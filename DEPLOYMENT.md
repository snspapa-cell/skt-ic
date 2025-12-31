# SKT 공식인증대리점 랜딩페이지 - 배포 및 인수인계 문서

## 📋 프로젝트 개요

SKT 공식인증대리점 랜딩페이지로, 고객 상담 신청을 받고 관리자에게 이메일 알림을 발송하는 기능을 제공합니다.

### 주요 기능
- 반응형 랜딩페이지 (히어로, 혜택, 실시간 현황, 후기, 위치, FAQ, 상담신청)
- 상담 신청 폼 (Supabase DB 저장)
- 관리자 이메일 알림 (Resend)
- 부드러운 애니메이션 (Framer Motion)

---

## 🛠 기술 스택

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
| 배포 | Vercel (권장) |

---

## 📁 디렉토리 구조

```
src/
├── app/                          # Next.js App Router
│   ├── api/submit/route.ts       # 상담 신청 API
│   ├── page.tsx                  # 메인 랜딩페이지
│   ├── layout.tsx                # 루트 레이아웃
│   └── globals.css               # 전역 스타일
├── components/
│   ├── navigation.tsx            # 네비게이션 바
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

---

## 🚀 배포 순서 (Step by Step)

### Step 1: Supabase 설정

1. **Supabase 프로젝트 생성**
   - https://supabase.com 접속
   - "New Project" 클릭
   - 프로젝트 이름, 데이터베이스 비밀번호 설정
   - Region: Northeast Asia (Seoul) 선택

2. **테이블 생성**
   - SQL Editor 이동
   - `supabase/migrations/001_create_consultations_table.sql` 내용 복사/붙여넣기
   - "Run" 클릭하여 실행

3. **API 키 확인**
   - Settings > API 메뉴 이동
   - 다음 값 복사해두기:
     - **Project URL** (예: `https://xxx.supabase.co`)
     - **anon public key** (예: `eyJhbGci...`)

---

### Step 2: Resend 설정 (이메일 알림)

1. **Resend 계정 생성**
   - https://resend.com 접속
   - 회원가입 및 로그인

2. **API Key 발급**
   - API Keys 메뉴 이동
   - "Create API Key" 클릭
   - 키 복사해두기 (예: `re_xxxxx...`)

3. **(선택) 도메인 인증**
   - 실제 서비스 시 자체 도메인 인증 필요
   - 테스트 시에는 `onboarding@resend.dev` 사용 가능

---

### Step 3: Vercel 배포

1. **GitHub 저장소 연결**
   - https://vercel.com 접속
   - "Add New Project" 클릭
   - GitHub 연동 후 `skt-ic` 저장소 선택

2. **환경변수 설정**
   - "Environment Variables" 섹션에서 다음 추가:

   | Variable | Value | 설명 |
   |----------|-------|------|
   | `NEXT_PUBLIC_SUPABASE_URL` | `https://xxx.supabase.co` | Supabase 프로젝트 URL |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGci...` | Supabase Anon Key |
   | `RESEND_API_KEY` | `re_xxxxx...` | Resend API Key |
   | `ADMIN_EMAIL` | `your@email.com` | 알림 받을 관리자 이메일 |

3. **배포**
   - "Deploy" 클릭
   - 빌드 완료 후 자동 배포

4. **커스텀 도메인 (선택)**
   - Settings > Domains 메뉴
   - 도메인 추가 후 DNS 설정

---

### Step 4: 배포 확인

1. 배포된 URL 접속
2. 상담 신청 폼 작성 및 제출
3. Supabase Table Editor에서 데이터 확인
4. 관리자 이메일 수신 확인

---

## 🔧 로컬 개발 환경 설정

### 필수 요구사항
- Node.js 18.x 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/snspapa-cell/skt-ic.git
cd skt-ic

# 의존성 설치
npm install

# 환경변수 설정
# .env.local 파일 생성 후 아래 내용 추가
```

### .env.local 파일 내용

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Resend
RESEND_API_KEY=re_your-api-key

# 관리자 이메일
ADMIN_EMAIL=admin@example.com
```

### 개발 서버 실행

```bash
npm run dev
# http://localhost:3200 에서 확인
```

---

## 📊 Supabase 테이블 구조

### consultations 테이블

| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | UUID | 기본키 (자동생성) |
| customer_name | VARCHAR(50) | 고객 이름 |
| phone | VARCHAR(20) | 연락처 (010-0000-0000) |
| subscription_type | VARCHAR(30) | 가입유형 (number_transfer, device_change, new_subscription) |
| desired_device | VARCHAR(100) | 희망 기종 |
| message | TEXT | 문의 내용 (선택) |
| privacy_consent | BOOLEAN | 개인정보 동의 |
| status | VARCHAR(20) | 상태 (pending, contacted, completed) |
| created_at | TIMESTAMP | 생성일시 |
| updated_at | TIMESTAMP | 수정일시 |

### 상담 데이터 조회 (Supabase Dashboard)
1. Table Editor 메뉴 이동
2. consultations 테이블 선택
3. 접수된 상담 내역 확인/관리

---

## 🔑 환경변수 요약

| 환경변수 | 필수 | 용도 |
|----------|------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ | Supabase 연결 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ | Supabase 인증 |
| `RESEND_API_KEY` | ✅ | 이메일 발송 |
| `ADMIN_EMAIL` | ✅ | 알림 수신 이메일 |

---

## 📝 유지보수 가이드

### 콘텐츠 수정
- 메인 페이지: `src/app/page.tsx`
- 혜택 내용: `BenefitsSection` 컴포넌트의 `benefits` 배열
- FAQ 내용: `FAQ_DATA` 상수
- 후기 내용: `TestimonialsSection` 컴포넌트의 `testimonials` 배열
- 매장 정보: `LocationSection` 컴포넌트

### 스타일 수정
- 전역 스타일: `src/app/globals.css`
- 브랜드 컬러: `#E4002B` (SKT 레드)

### 새 shadcn/ui 컴포넌트 추가
```bash
npx shadcn@latest add [component-name]
# 예: npx shadcn@latest add alert
```

---

## 🐛 알려진 이슈 및 해결방법

### 포트 3000 권한 오류 (Windows)
- 현재 포트 3200으로 설정됨
- `package.json`의 `dev` 스크립트 참고

### Select 컴포넌트 리셋 안됨
- ✅ 해결됨: `defaultValue`를 `value`로 변경

---

## 📞 연락처

문의사항이 있으시면 GitHub Issues 또는 담당자에게 연락해주세요.

---

**마지막 업데이트:** 2025년 12월 31일

