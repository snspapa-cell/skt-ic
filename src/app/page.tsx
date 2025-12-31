'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  MapPin,
  Clock,
  Phone,
  ChevronRight,
  Shield,
  Percent,
  CreditCard,
  Gift,
  BadgeCheck,
  Navigation,
  Megaphone,
  ChevronDown,
  Quote,
  Star,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ContactForm } from '@/features/contact/components/contact-form';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col bg-[#FDF9F7]">
      <HeroSection />
      <BenefitsSection />
      <StatusSection />
      <TestimonialsSection />
      <LocationSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}

/** 히어로 섹션 - 밝고 따뜻한 스타일 */
function HeroSection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-28 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-[#FDF9F7]">
      {/* 부드러운 배경 패턴 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-48 h-48 bg-[#E4002B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#E4002B]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FFE4E1]/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* 뱃지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#E4002B]/10 px-4 py-2 rounded-full mb-6"
          >
            <Shield className="w-4 h-4 text-[#E4002B]" />
            <span className="text-[#E4002B] font-medium text-sm">
              SKT 공식인증대리점
            </span>
          </motion.div>

          {/* 메인 헤드라인 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            최신 스마트폰
            <br />
            <span className="text-[#E4002B]">최대 지원금</span>으로 만나세요
          </motion.h1>

          {/* 서브 헤드라인 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed"
          >
            SKT 공식인증대리점에서만 제공하는
            <br />
            특별한 혜택을 지금 바로 확인하세요
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button
              size="lg"
              className="bg-[#E4002B] hover:bg-[#C50025] text-white font-semibold px-6 py-5 text-sm rounded-full shadow-lg shadow-[#E4002B]/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#E4002B]/30"
              onClick={scrollToContact}
            >
              무료 상담 신청하기
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-5 text-sm rounded-full"
              onClick={() =>
                document
                  .querySelector('#benefits')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              혜택 살펴보기
            </Button>
          </motion.div>

          {/* 사전승낙점 인증 카드 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 relative"
          >
            <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-4 max-w-md mx-auto border border-gray-100">
              <div className="flex items-center gap-3">
                {/* KAIT 인증 로고 */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src="/kait-logo.png"
                    alt="사전승낙판매점 인증 로고"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* 인증 정보 */}
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-medium text-[#E4002B] bg-[#E4002B]/10 px-2 py-0.5 rounded-full">
                      KAIT 인증
                    </span>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">
                    SKT 공식 사전승낙대리점
                  </p>
                  <p className="text-xs text-gray-500">
                    사전승낙번호 제 2024-XXXX-XXXX 호
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 파트너 로고 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-6 text-gray-400 text-xs"
          >
            <span className="flex items-center gap-1.5">
              <BadgeCheck className="w-3.5 h-3.5" /> 공식인증
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" /> 안전거래
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5" /> 고객만족
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** 혜택 안내 섹션 */
function BenefitsSection() {
  const benefits = [
    {
      icon: Percent,
      title: '요금 할인',
      description:
        '인기 요금제 최대 50% 할인! 첫 달 무료 프로모션과 함께 매월 통신비를 절약하세요.',
      highlight: '최대 50% 할인',
      color: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
    {
      icon: CreditCard,
      title: '기기값 지원',
      description:
        '최신 스마트폰 구매 시 최대 100만원 기기값 지원! 부담 없이 프리미엄 기기를 만나보세요.',
      highlight: '최대 100만원',
      color: 'bg-green-50',
      iconColor: 'text-green-500',
    },
    {
      icon: Gift,
      title: '프리미엄 사은품',
      description:
        '갤럭시 버즈, 정품 케이스, 무선충전기 등 다양한 프리미엄 사은품을 드립니다.',
      highlight: '갤럭시 버즈 증정',
      color: 'bg-purple-50',
      iconColor: 'text-purple-500',
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#E4002B] font-semibold text-sm tracking-wider uppercase mb-3 bg-[#E4002B]/10 px-4 py-1.5 rounded-full">
            Special Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SKT 공식인증센터만의 특별 혜택
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            고객님께 최고의 조건을 제공해드리기 위해 최선을 다합니다.
          </p>
        </div>

        {/* 혜택 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-0 shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 rounded-3xl overflow-hidden group">
                <CardHeader className="pb-4">
                  {/* 아이콘 */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className={`w-7 h-7 ${benefit.iconColor}`} />
                  </div>

                  {/* 하이라이트 뱃지 */}
                  <span className="inline-block bg-[#E4002B]/10 text-[#E4002B] text-xs font-bold px-3 py-1 rounded-full mb-2">
                    {benefit.highlight}
                  </span>

                  <CardTitle className="text-xl font-bold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 실시간 상담 접수 현황 데이터 */
const CONSULTATION_DATA = [
  { name: '김*식', phone: '010-1234-**78', device: '아이폰17 Pro', time: '방금 전' },
  { name: '이*영', phone: '010-9876-**21', device: '갤럭시 S25 Ultra', time: '1분 전' },
  { name: '박*준', phone: '010-5555-**33', device: '아이폰17', time: '2분 전' },
  { name: '김*희', phone: '010-3333-**99', device: '갤럭시 Z플립7', time: '3분 전' },
  { name: '선*식', phone: '010-0000-**67', device: '갤럭시 A36', time: '4분 전' },
  { name: '정*민', phone: '010-7777-**44', device: '아이폰17 Pro Max', time: '5분 전' },
  { name: '강*우', phone: '010-2222-**66', device: '갤럭시 S25+', time: '6분 전' },
  { name: '장*현', phone: '010-4444-**55', device: '갤럭시 Z폴드7', time: '7분 전' },
  { name: '조*정', phone: '010-0001-**26', device: '갤럭시 S25', time: '8분 전' },
  { name: '천*구', phone: '010-0000-**77', device: '아이폰17', time: '9분 전' },
  { name: '김*조', phone: '010-0000-**14', device: '갤럭시 Z플립7', time: '10분 전' },
];

/** 실시간 상담 접수 현황 섹션 */
function StatusSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CONSULTATION_DATA.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleItems = [
    CONSULTATION_DATA[currentIndex],
    CONSULTATION_DATA[(currentIndex + 1) % CONSULTATION_DATA.length],
    CONSULTATION_DATA[(currentIndex + 2) % CONSULTATION_DATA.length],
    CONSULTATION_DATA[(currentIndex + 3) % CONSULTATION_DATA.length],
  ];

  return (
    <section id="status" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-medium text-sm">실시간</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📢 실시간 상담 접수 현황
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            지금 이 순간에도 많은 고객님들이 상담을 신청하고 계십니다
          </p>
        </div>

        {/* 롤링 애니메이션 영역 */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#FDF9F7] rounded-3xl p-6 md:p-8 relative overflow-hidden">
            {/* 롤링 아이템 리스트 */}
            <div className="space-y-3 relative">
              <AnimatePresence mode="popLayout">
                {visibleItems.map((item, index) => (
                  <motion.div
                    key={`${item.name}-${item.phone}-${currentIndex}-${index}`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                      ease: 'easeOut',
                    }}
                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      {/* 상태 인디케이터 */}
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full flex-shrink-0" />

                      {/* 고객 정보 */}
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          <span className="text-[#E4002B] font-semibold">
                            {item.name}
                          </span>
                          님 {item.device} 상담 신청
                        </p>
                        <p className="text-xs text-gray-400">{item.time}</p>
                      </div>
                    </div>

                    {/* 완료 뱃지 */}
                    <span className="hidden sm:inline-block bg-[#E4002B]/10 text-[#E4002B] px-3 py-1 rounded-full text-xs font-medium">
                      접수완료
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* 통계 */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: '오늘 상담', value: '127건' },
              { label: '이번 달 개통', value: '1,892건' },
              { label: '만족도', value: '98.5%' },
              { label: '누적 고객', value: '50,000+' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <p className="text-2xl font-bold text-[#E4002B]">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** 고객 후기 섹션 */
function TestimonialsSection() {
  const testimonials = [
    {
      name: '김*현',
      device: '아이폰17 Pro',
      content:
        '다른 대리점 여러 군데 비교해봤는데 여기가 제일 혜택이 좋았어요. 상담도 친절하고 빠르게 진행해주셔서 만족합니다!',
      rating: 5,
    },
    {
      name: '이*수',
      device: '갤럭시 S25 Ultra',
      content:
        '기기값 지원금이 정말 많이 나와서 놀랐어요. 사은품도 다양하게 챙겨주시고 정말 감사합니다.',
      rating: 5,
    },
    {
      name: '박*영',
      device: '갤럭시 Z플립7',
      content:
        '번호이동 절차가 복잡할 줄 알았는데 다 알아서 해주셔서 편했어요. 다음에도 여기서 할 예정입니다.',
      rating: 5,
    },
    {
      name: '최*민',
      device: '아이폰17',
      content:
        '요금제 상담도 꼼꼼하게 해주시고 제 사용 패턴에 맞는 요금제를 추천해주셔서 매달 절약하고 있어요!',
      rating: 5,
    },
    {
      name: '정*호',
      device: '갤럭시 S25+',
      content:
        '처음에 온라인으로 상담 신청했는데 바로 연락주시고 빠르게 처리해주셨어요. 추천합니다!',
      rating: 5,
    },
    {
      name: '강*지',
      device: '아이폰16 Pro Max',
      content:
        '공식인증대리점이라 믿고 맡겼는데 역시 기대 이상이었어요. 가족들도 여기서 할 예정이에요.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#FDF9F7]">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#E4002B] font-semibold text-sm tracking-wider uppercase mb-3 bg-[#E4002B]/10 px-4 py-1.5 rounded-full">
            Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            고객님들의 생생한 후기
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            실제 이용 고객님들의 솔직한 후기를 확인해보세요
          </p>
        </div>

        {/* 후기 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-0 shadow-lg shadow-gray-100 rounded-3xl overflow-hidden">
                <CardContent className="p-6">
                  {/* 인용 아이콘 */}
                  <Quote className="w-8 h-8 text-[#E4002B]/20 mb-4" />

                  {/* 후기 내용 */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {testimonial.content}
                  </p>

                  {/* 고객 정보 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#E4002B]/10 rounded-full flex items-center justify-center">
                        <span className="text-[#E4002B] font-semibold text-sm">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {testimonial.device}
                        </p>
                      </div>
                    </div>

                    {/* 별점 */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 매장 위치 섹션 */
function LocationSection() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#E4002B] font-semibold text-sm tracking-wider uppercase mb-3 bg-[#E4002B]/10 px-4 py-1.5 rounded-full">
            Location
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            매장 위치
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            가까운 매장을 방문하여 상담받아 보세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* 왼쪽: 매장 정보 */}
          <div className="flex flex-col gap-4 order-2 lg:order-1 lg:min-h-[500px]">
            {[
              {
                icon: MapPin,
                title: '주소',
                content: '광주광역시 동구 금남로 161-5',
                sub: '(광주광역시 동구 금남로5가 29)',
              },
              {
                icon: Clock,
                title: '운영시간',
                content: '평일 10:00 - 20:00',
                sub: '토요일 11:00 - 18:00 / 일요일 휴무',
              },
              {
                icon: Navigation,
                title: '오시는 길',
                content: '금남로5가역 1번 출구 도보 3분',
                sub: '인근 공영주차장 이용 가능',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-1"
              >
                <Card className="bg-[#FDF9F7] border-0 rounded-2xl h-full">
                  <CardContent className="p-5 h-full flex items-center">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#E4002B]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[#E4002B]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-700">{item.content}</p>
                        <p className="text-sm text-gray-400">{item.sub}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* 오른쪽: 지도 iframe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="w-full h-[400px] lg:h-full lg:min-h-[500px] rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50">
              <iframe
                src="https://www.google.com/maps?q=광주광역시+동구+금남로+161-5&output=embed&z=17"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="매장 위치 지도"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** FAQ 데이터 */
const FAQ_DATA = [
  {
    question: 'SKT 공식인증대리점이란 무엇인가요?',
    answer:
      'SKT로부터 공식적으로 인증받은 대리점으로, 정식 계약을 통해 운영되며 안전하고 신뢰할 수 있는 서비스를 제공합니다. KAIT(한국정보통신진흥협회)에서 인증한 사전승낙번호를 보유하고 있습니다.',
  },
  {
    question: '상담 신청 후 얼마나 빨리 연락받을 수 있나요?',
    answer:
      '영업시간 내 상담 신청 시 보통 30분 이내에 전문 상담사가 연락드립니다. 영업시간 외 신청 건은 다음 영업일 오전 중으로 연락드립니다.',
  },
  {
    question: '번호이동 시 기존 번호를 그대로 사용할 수 있나요?',
    answer:
      '네, 번호이동 시 기존에 사용하시던 번호를 그대로 유지하실 수 있습니다. 번호이동 절차는 저희가 모두 대행해드리며, 고객님은 신분증만 준비해주시면 됩니다.',
  },
  {
    question: '기기값 지원금은 어떻게 받을 수 있나요?',
    answer:
      '요금제와 약정 기간에 따라 지원금이 달라집니다. 상담 시 고객님의 사용 패턴에 맞는 최적의 요금제와 최대 지원금을 안내해드립니다.',
  },
  {
    question: '사은품은 언제 받을 수 있나요?',
    answer:
      '개통 완료 후 즉시 사은품을 받으실 수 있습니다. 일부 사은품의 경우 재고 상황에 따라 배송으로 진행될 수 있으며, 이 경우 3-5일 내 배송됩니다.',
  },
  {
    question: '온라인으로도 개통이 가능한가요?',
    answer:
      '네, 온라인 상담 후 비대면으로 개통이 가능합니다. 신분증 사본과 필요 서류를 전송해주시면 저희가 개통 절차를 진행해드립니다.',
  },
];

/** FAQ 섹션 */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#FDF9F7]">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#E4002B] font-semibold text-sm tracking-wider uppercase mb-3 bg-[#E4002B]/10 px-4 py-1.5 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            궁금하신 점을 확인해보세요
          </p>
        </div>

        {/* FAQ 아코디언 */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_DATA.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'shadow-lg shadow-gray-200/50'
                    : 'shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 상담 신청 섹션 */
function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* 부드러운 배경 패턴 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#E4002B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#E4002B]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 왼쪽: 텍스트 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[#E4002B] font-semibold text-sm tracking-wider uppercase mb-4">
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                SKT 최대 혜택,
                <br />
                무엇이든 물어보세요
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                연락처를 남겨주시면 전문 상담사가
                <br />
                최적의 요금제와 혜택을 안내해드립니다.
              </p>

              <div className="flex items-start gap-3 text-gray-300">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">운영시간</p>
                  <p>평일 10:00 - 20:00</p>
                  <p className="text-sm text-gray-400">토요일 11:00 - 18:00 / 일요일 휴무</p>
                </div>
              </div>
            </motion.div>

            {/* 오른쪽: 폼 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            입력하신 정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
