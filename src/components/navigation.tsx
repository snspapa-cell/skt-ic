'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

/** 네비게이션 메뉴 항목 */
const NAV_ITEMS = [
  { label: '혜택', href: '#benefits' },
  { label: '실시간', href: '#status' },
  { label: '위치', href: '#location' },
] as const;

/** 섹션으로 부드럽게 스크롤 */
function scrollToSection(href: string) {
  if (href === '#top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/** Sticky 네비게이션 바 컴포넌트 */
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isPrivacyPage = pathname === '/privacy';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* 로고 */}
        {isPrivacyPage ? (
          <Link
            href="/"
            className="flex items-center gap-1.5 font-bold text-lg hover:opacity-80 transition-opacity"
          >
            <span className="text-[#E4002B]">SKT</span>
            <span className="transition-colors text-gray-800">
              공식인증대리점
            </span>
          </Link>
        ) : (
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, '#top')}
            className="flex items-center gap-1.5 font-bold text-lg hover:opacity-80 transition-opacity"
          >
            <span className="text-[#E4002B]">SKT</span>
            <span className={cn(
              'transition-colors',
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            )}>
              공식인증대리점
            </span>
          </a>
        )}

        {/* 데스크탑 메뉴 - privacy 페이지에서는 숨김 */}
        {!isPrivacyPage && (
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-all',
                      'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA 버튼 */}
            <Button
              asChild
              className="bg-[#E4002B] hover:bg-[#C50025] text-white font-semibold px-5 py-2 h-9 text-sm rounded-full ml-2"
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                무료 상담
              </a>
            </Button>
          </div>
        )}

        {/* 모바일 메뉴 버튼 - privacy 페이지에서는 숨김 */}
        {!isPrivacyPage && (
          <button
            type="button"
            className={cn(
              'md:hidden p-2 rounded-full transition-colors',
              'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        )}
      </nav>

      {/* 모바일 메뉴 - privacy 페이지에서는 숨김 */}
      {!isPrivacyPage && (
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-4 space-y-2">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium py-3 px-4 rounded-xl transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                asChild
                className="w-full bg-[#E4002B] hover:bg-[#C50025] text-white font-semibold rounded-xl py-3 h-auto"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  무료 상담 신청하기
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
