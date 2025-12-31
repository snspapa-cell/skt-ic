'use client';

import { Mail, Clock } from 'lucide-react';

/** 바로가기 링크 */
const QUICK_LINKS = [
  { label: '혜택 안내', href: '#benefits' },
  { label: '실시간 현황', href: '#status' },
  { label: '고객 후기', href: '#testimonials' },
  { label: '상담 신청', href: '#contact' },
];

/** 섹션으로 부드럽게 스크롤 */
function scrollToSection(href: string) {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/** Footer 컴포넌트 */
export function Footer() {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <footer className="bg-[#1a1a2e] text-gray-300">
      {/* 상단 영역 */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* 로고 및 설명 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#E4002B] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SK</span>
              </div>
              <span className="text-white font-bold text-lg">공식인증센터</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              SKT 공식 인증 대리점으로서 고객님께 최고의 혜택과 서비스를 제공해
              드립니다.
            </p>
          </div>

          {/* 바로가기 */}
          <div>
            <h3 className="text-white font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 이메일 & 운영시간 */}
          <div className="space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-2">이메일</h3>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#E4002B]" />
                <a 
                  href="mailto:ic12company@gmail.com" 
                  className="text-white text-lg font-bold hover:text-[#E4002B] transition-colors"
                >
                  ic12company@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">운영시간</h3>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-[#E4002B] mt-0.5" />
                <div className="text-sm text-gray-400 space-y-1">
                  <p>평일 10:00 - 20:00</p>
                  <p>토요일 11:00 - 18:00 / 일요일 휴무</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 영역 - 사업자 정보 */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="text-xs text-gray-500 space-y-2">
            <p>
              <span className="font-semibold text-gray-400">사업자 정보</span>
              <span className="mx-2">|</span>
              대표: 김태희
              <span className="mx-2">|</span>
              사업자등록번호: 651-29-00696</p>
            <p>주소: 광주광역시 동구 금남로 161-5 (금남로5가 29)</p>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500">
              © 2025 SKT 공식인증센터. All rights reserved. 본 사이트는 SKT 공식
              인증 대리점의 온라인 가입 센터입니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

