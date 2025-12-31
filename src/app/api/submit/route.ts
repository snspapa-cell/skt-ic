import { NextRequest, NextResponse } from 'next/server';
import { supabase, ConsultationInsert } from '@/lib/supabase';
import { Resend } from 'resend';
import { z } from 'zod';

/** Resend 클라이언트 */
const resend = new Resend(process.env.RESEND_API_KEY);

/** 요청 데이터 유효성 검사 스키마 */
const consultationSchema = z.object({
  customerName: z.string().min(2).max(50),
  phone: z.string().regex(/^010-\d{4}-\d{4}$/),
  subscriptionType: z.string().min(1),
  desiredDevice: z.string().min(2).max(100),
  message: z.string().max(500).optional(),
  privacyConsent: z.boolean().refine((val) => val === true),
});

/** 가입 유형 라벨 매핑 */
const SUBSCRIPTION_TYPE_LABELS: Record<string, string> = {
  number_transfer: '번호이동',
  device_change: '기기변경',
  new_subscription: '신규가입',
};

/** 이메일 발송 함수 */
async function sendNotificationEmail(data: ConsultationInsert) {
  const adminEmail = process.env.ADMIN_EMAIL;
  
  if (!adminEmail) {
    console.warn('ADMIN_EMAIL 환경변수가 설정되지 않았습니다.');
    return;
  }

  const subscriptionLabel = SUBSCRIPTION_TYPE_LABELS[data.subscription_type] || data.subscription_type;
  const messageContent = data.message || '(작성 내용 없음)';

  try {
    await resend.emails.send({
      from: 'SKT 상담신청 <onboarding@resend.dev>',
      to: adminEmail,
      subject: `[새로운 상담신청] ${data.customer_name}님 - ${data.desired_device}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #E4002B 0%, #C50025 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📱 새로운 상담 신청</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">SKT 공식인증대리점 상담 요청이 접수되었습니다.</p>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 120px;">고객명</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #111827;">${data.customer_name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">연락처</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #111827;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">가입유형</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #111827;">${subscriptionLabel}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">희망기종</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #E4002B;">${data.desired_device}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6b7280; vertical-align: top;">문의내용</td>
                <td style="padding: 12px 0; color: #374151; line-height: 1.6;">${messageContent}</td>
              </tr>
            </table>
            
            <div style="margin-top: 24px; padding: 16px; background: #fff; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                ⏰ 접수시간: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}
              </p>
            </div>
          </div>
          
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 20px;">
            이 메일은 SKT 공식인증대리점 상담신청 시스템에서 자동 발송되었습니다.
          </p>
        </div>
      `,
    });

    console.log('알림 이메일 발송 완료:', adminEmail);
  } catch (error) {
    console.error('이메일 발송 실패:', error);
  }
}

/** POST 요청 핸들러 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 유효성 검사
    const validationResult = consultationSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: '입력 데이터가 올바르지 않습니다.', details: validationResult.error.flatten() },
        { status: 400 }
      );
    }

    const { customerName, phone, subscriptionType, desiredDevice, message, privacyConsent } = validationResult.data;

    // Supabase Insert 데이터 형식
    const insertData: ConsultationInsert = {
      customer_name: customerName,
      phone,
      subscription_type: subscriptionType,
      desired_device: desiredDevice,
      message: message || undefined,
      privacy_consent: privacyConsent,
    };

    // Supabase에 데이터 저장
    const { data, error } = await supabase
      .from('consultations')
      .insert(insertData)
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: '데이터 저장에 실패했습니다.', details: error.message },
        { status: 500 }
      );
    }

    // 이메일 알림 발송 (비동기, 실패해도 응답에 영향 없음)
    sendNotificationEmail(insertData);

    return NextResponse.json(
      { success: true, message: '상담 신청이 완료되었습니다.', data },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}


