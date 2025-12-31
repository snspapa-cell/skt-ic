'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';
import Link from 'next/link';

/** 가입 유형 옵션 */
const SUBSCRIPTION_TYPES = [
  { value: 'number_transfer', label: '번호이동' },
  { value: 'device_change', label: '기기변경' },
  { value: 'new_subscription', label: '신규가입' },
] as const;

/** 연락처 자동 포맷팅 함수 (010-0000-0000 형식) */
function formatPhoneNumber(value: string): string {
  const numbers = value.replace(/[^\d]/g, '');

  if (numbers.length <= 3) {
    return numbers;
  }
  if (numbers.length <= 7) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  }
  return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
}

/** 연락처 유효성 검사 정규식 (010-0000-0000 형식) */
const phoneRegex = /^010-\d{4}-\d{4}$/;

/** 상담 신청 폼 스키마 */
const contactFormSchema = z.object({
  customerName: z
    .string()
    .min(2, '고객명을 2자 이상 입력해주세요')
    .max(20, '고객명은 20자 이하로 입력해주세요'),
  phone: z
    .string()
    .regex(phoneRegex, '올바른 연락처 형식을 입력해주세요 (010-0000-0000)'),
  subscriptionType: z.string().min(1, '가입 유형을 선택해주세요'),
  desiredDevice: z
    .string()
    .min(2, '희망 기종을 입력해주세요')
    .max(50, '희망 기종은 50자 이하로 입력해주세요'),
  message: z
    .string()
    .max(500, '문의 내용은 500자 이하로 입력해주세요')
    .optional(),
  privacyConsent: z
    .boolean()
    .refine((val) => val === true, '개인정보 수집에 동의해주세요'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

/** 상담 신청 폼 컴포넌트 */
export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      customerName: '',
      phone: '',
      subscriptionType: '',
      desiredDevice: '',
      message: '',
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || '상담 신청에 실패했습니다.');
      }

      toast({
        title: '상담 신청이 완료되었습니다',
        description: '빠른 시일 내에 연락드리겠습니다.',
      });

      form.reset();
    } catch (error) {
      console.error('Submit error:', error);
      toast({
        title: '상담 신청에 실패했습니다',
        description: error instanceof Error ? error.message : '잠시 후 다시 시도해주세요.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /** 연락처 입력 핸들러 (자동 포맷팅) */
  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    const formatted = formatPhoneNumber(e.target.value);
    onChange(formatted);
  };

  return (
    <Card className="border-0 shadow-2xl shadow-black/10 rounded-3xl overflow-hidden">
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* 고객명 */}
            <FormField
              control={form.control}
              name="customerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium text-sm">
                    이름 <span className="text-[#E4002B]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="홍길동"
                      className="h-12 text-base rounded-xl border-gray-200 focus:border-[#E4002B] focus:ring-[#E4002B]/20"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* 연락처 */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium text-sm">
                    연락처 <span className="text-[#E4002B]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="010-0000-0000"
                      className="h-12 text-base rounded-xl border-gray-200 focus:border-[#E4002B] focus:ring-[#E4002B]/20"
                      disabled={isSubmitting}
                      value={field.value}
                      onChange={(e) => handlePhoneChange(e, field.onChange)}
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                      maxLength={13}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* 가입 유형 */}
            <FormField
              control={form.control}
              name="subscriptionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium text-sm">
                    가입유형 <span className="text-[#E4002B]">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={isSubmitting}
                  >
                    <FormControl>
                      <SelectTrigger className="h-12 text-base rounded-xl border-gray-200 focus:border-[#E4002B] focus:ring-[#E4002B]/20">
                        <SelectValue placeholder="선택해주세요" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded-xl">
                      {SUBSCRIPTION_TYPES.map((type) => (
                        <SelectItem
                          key={type.value}
                          value={type.value}
                          className="rounded-lg"
                        >
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* 희망 기종 */}
            <FormField
              control={form.control}
              name="desiredDevice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium text-sm">
                    희망기종 <span className="text-[#E4002B]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="예: 아이폰17 Pro, 갤럭시 S25"
                      className="h-12 text-base rounded-xl border-gray-200 focus:border-[#E4002B] focus:ring-[#E4002B]/20"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* 문의 내용 (선택) */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium text-sm">
                    문의내용 <span className="text-gray-400 font-normal">(선택)</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="궁금한 점이 있으시면 남겨주세요"
                      className="min-h-[100px] text-base resize-none rounded-xl border-gray-200 focus:border-[#E4002B] focus:ring-[#E4002B]/20"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* 개인정보 수집 동의 */}
            <FormField
              control={form.control}
              name="privacyConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border border-gray-100 p-4 bg-gray-50/50">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={isSubmitting}
                      className="mt-0.5 rounded"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-gray-700 font-medium text-sm cursor-pointer">
                      <Link 
                        href="/privacy" 
                        target="_blank"
                        className="underline hover:text-[#E4002B] transition-colors"
                      >
                        개인정보 수집 및 이용
                      </Link>
                      에 동의합니다
                      <span className="text-[#E4002B]"> *</span>
                    </FormLabel>
                    <p className="text-xs text-gray-400">
                      수집된 정보는 상담 목적으로만 사용됩니다.
                    </p>
                    <FormMessage className="text-xs" />
                  </div>
                </FormItem>
              )}
            />

            {/* 제출 버튼 */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-[#E4002B] hover:bg-[#C50025] text-white font-semibold py-6 text-base rounded-xl shadow-lg shadow-[#E4002B]/20 transition-all hover:shadow-xl hover:shadow-[#E4002B]/30 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  신청 중...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  상담 신청하기
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
