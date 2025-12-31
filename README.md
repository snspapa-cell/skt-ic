# SKT 공식인증대리점 랜딩페이지

SKT 공식인증대리점 랜딩페이지로, 고객 상담 신청을 받고 관리자에게 이메일 알림을 발송하는 기능을 제공합니다.

## 주요 기능

- 반응형 랜딩페이지 (히어로, 혜택, 실시간 현황, 후기, 위치, FAQ, 상담신청)
- 상담 신청 폼 (Supabase DB 저장)
- 관리자 이메일 알림 (Resend)
- 부드러운 애니메이션 (Framer Motion)

## 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | Next.js 15.1.0 (App Router) |
| 언어 | TypeScript |
| 스타일링 | Tailwind CSS |
| UI 컴포넌트 | shadcn/ui |
| 애니메이션 | Framer Motion |
| 폼 관리 | React Hook Form + Zod |
| DB | Supabase (PostgreSQL) |
| 이메일 | Resend |

## 로컬 개발 환경 설정

### 필수 요구사항

- Node.js 18.x 이상
- npm

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 환경변수 설정 (.env.local 파일 생성)
# 아래 환경변수 섹션 참고

# 개발 서버 실행
npm run dev
# http://localhost:3200 에서 확인
```

### 환경변수 (.env.local)

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Resend
RESEND_API_KEY=re_your-api-key

# 관리자 이메일
ADMIN_EMAIL=admin@example.com
```

## 배포

자세한 배포 가이드는 [DEPLOYMENT.md](./DEPLOYMENT.md)를 참고해주세요.

## 디렉토리 구조

```
src/
├── app/                          # Next.js App Router
│   ├── api/submit/route.ts       # 상담 신청 API
│   ├── page.tsx                  # 메인 랜딩페이지
│   ├── privacy/page.tsx          # 개인정보 처리방침
│   └── layout.tsx                # 루트 레이아웃
├── components/
│   ├── navigation.tsx            # 네비게이션 바
│   ├── footer.tsx                # 푸터
│   └── ui/                       # shadcn/ui 컴포넌트
├── features/
│   └── contact/
│       └── components/
│           └── contact-form.tsx  # 상담 신청 폼
├── hooks/
│   └── use-toast.ts              # 토스트 훅
└── lib/
    ├── supabase.ts               # Supabase 클라이언트
    └── utils.ts                  # 유틸리티 함수

supabase/
└── migrations/
    └── 001_create_consultations_table.sql  # DB 마이그레이션
```
