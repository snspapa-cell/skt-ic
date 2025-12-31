'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PrivacyPage() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF9F7]">
      <div className="container mx-auto px-4 py-12">
         
        {/* 제목 */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            개인정보처리방침
          </h1>

          {/* 본문 */}
          <div className="bg-white rounded-3xl shadow-lg shadow-gray-100 p-8 md:p-12 space-y-8">
            {/* 서문 */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                주식회사 정준(이하 &quot;회사&quot; 또는 &quot;원이컴퍼니&quot;)은 고객님의 개인정보를 중요시하며, 
                &quot;정보통신망 이용촉진 및 정보보호법&quot;을 준수합니다.
              </p>
              <p>
                회사는 개인정보처리방침을 통해 고객님의 개인정보가 어떻게 이용되고 보호되고 있는지 안내드립니다.
              </p>
            </div>

            {/* 1. 수집하는 개인정보 항목 및 수집 방법 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                1. 수집하는 개인정보 항목 및 수집 방법
              </h2>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">가. 수집하는 개인정보 항목</h3>
                <p className="text-gray-600">
                  회사는 회원가입, 상담, 서비스 신청 시 다음과 같은 개인정보를 수집합니다:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>회원가입 시: 이름, 생년월일, 성별, 로그인 ID, 비밀번호, 전화번호, 휴대전화번호, 이메일, 14세 미만 가입자의 법정대리인 정보</li>
                  <li>서비스 신청 시: 주소, 결제 정보</li>
                  <li>서비스 이용 과정에서 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP, 결제 기록, 불량 이용 기록이 자동으로 수집될 수 있습니다.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">나. 수집 방법</h3>
                <p className="text-gray-600">
                  홈페이지, 서면 양식, 게시판, 이메일, 이벤트 응모, 배송 요청, 전화, 팩스, 생성 정보 수집 툴 등을 통해 수집됩니다.
                </p>
              </div>
            </section>

            {/* 2. 개인정보의 수집 및 이용 목적 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                2. 개인정보의 수집 및 이용 목적
              </h2>
              <p className="text-gray-600">
                회사는 수집한 개인정보를 다음과 같은 목적으로 사용합니다:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>서비스 제공에 관한 계약 이행 및 요금 정산: 콘텐츠 제공, 구매 및 결제, 물품 배송, 금융 거래 인증</li>
                <li>회원 관리: 본인 확인, 불량 회원 이용 방지, 가입 의사 확인, 법정 대리인 동의 확인, 민원 처리, 고지 사항 전달</li>
                <li>마케팅 및 광고 활용: 이벤트 정보 제공, 접속 빈도 분석, 서비스 통계 제공</li>
              </ul>
            </section>

            {/* 3. 개인정보의 보유 및 이용 기간 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                3. 개인정보의 보유 및 이용 기간
              </h2>
              <p className="text-gray-600">
                원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 
                단, 법령에 따라 일정 기간 동안 정보를 보존할 수 있습니다.
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">가. 회사 내부 방침에 의한 정보 보유</h3>
                <p className="text-gray-600">
                  회원 탈퇴 시까지 보유하나, 다음의 경우에는 해당 사유 종료 시까지 보관합니다:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>법령 위반에 따른 조사 진행 중인 경우: 조사 종료 시까지</li>
                  <li>채권·채무 관계가 있는 경우: 채권·채무 정산 시까지</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">나. 관련 법령에 의한 정보 보유</h3>
                <p className="text-gray-600">관련 법령에 따라 아래의 정보를 보존합니다:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>계약 또는 청약철회 기록: 5년 (전자상거래법)</li>
                  <li>대금 결제 및 재화 공급 기록: 5년 (전자상거래법)</li>
                  <li>소비자 불만 또는 분쟁 처리 기록: 3년 (전자상거래법)</li>
                  <li>로그 기록: 3개월 (통신비밀보호법)</li>
                </ul>
              </div>
            </section>

            {/* 4. 개인정보의 파기 절차 및 방법 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                4. 개인정보의 파기 절차 및 방법
              </h2>
              <p className="text-gray-600">
                회사는 개인정보 보유 기간이 종료되거나 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>파기 절차: 고객님의 정보는 별도의 DB로 옮겨져 법령에 따라 일정 기간 저장된 후 파기됩니다.</li>
                <li>파기 방법: 전자적 파일은 재생할 수 없는 기술적 방법으로 삭제됩니다.</li>
              </ul>
            </section>

            {/* 5. 개인정보의 제공 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                5. 개인정보의 제공
              </h2>
              <p className="text-gray-600">
                회사는 원칙적으로 이용자의 동의 없이 외부에 개인정보를 제공하지 않습니다. 
                다만, 법령에 따른 요청이 있는 경우에는 예외로 합니다.
              </p>
            </section>

            {/* 6. 개인정보의 위탁 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                6. 개인정보의 위탁
              </h2>
              <p className="text-gray-600">
                회사는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁하고 있습니다:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>택배사: 배송 업무</li>
                <li>PG사: 결제 처리</li>
              </ul>
            </section>

            {/* 7. 이용자 및 법정대리인의 권리 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                7. 이용자 및 법정대리인의 권리
              </h2>
              <p className="text-gray-600">
                이용자 및 법정 대리인은 언제든지 본인 또는 14세 미만 아동의 개인정보를 조회하거나 수정, 삭제 요청을 할 수 있습니다.
              </p>
              <p className="text-gray-600">
                개인정보 조회 또는 수정은 &quot;개인정보변경&quot;, 탈퇴는 &quot;회원탈퇴&quot; 메뉴에서 처리할 수 있습니다.
              </p>
              <p className="text-gray-600">
                또한, 회사는 요청 시 개인정보 보호책임자에게 서면, 전화, 이메일로 연락하여 처리합니다.
              </p>
            </section>

            {/* 8. 개인정보의 안전성 확보 조치 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                8. 개인정보의 안전성 확보 조치
              </h2>
              <p className="text-gray-600">
                회사는 개인정보보호법 제29조에 따라 다음과 같은 조치를 취합니다:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>정기적인 자체 감사 실시: 분기 1회 이상 개인정보 취급 관련 안정성 확보를 위해 자체 감사를 실시합니다.</li>
                <li>개인정보 취급 직원의 최소화 및 교육: 개인정보 취급 직원을 지정하고 최소화하여 관리합니다.</li>
                <li>내부 관리 계획 수립 및 시행: 개인정보 안전을 위해 내부 관리 계획을 수립하고 이를 시행합니다.</li>
              </ul>
            </section>

            {/* 9. 개인정보 자동 수집 장치의 설치 및 거부 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                9. 개인정보 자동 수집 장치의 설치 및 거부
              </h2>
              <p className="text-gray-600">
                회사는 이용자의 정보를 저장하고 수시로 불러오는 &quot;쿠키&quot;를 사용합니다.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>쿠키 사용 목적: 이용자의 접속 빈도나 방문 시간 분석, 맞춤형 서비스 제공</li>
                <li>쿠키 설정 거부 방법: 웹 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으며, 거부 시 일부 서비스 이용이 제한될 수 있습니다.</li>
              </ul>
            </section>

            {/* 10. 개인정보 보호책임자 및 민원 서비스 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                10. 개인정보 보호책임자 및 민원 서비스
              </h2>
              <p className="text-gray-600">
                회사는 개인정보 보호와 관련한 민원 처리를 위해 다음과 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 text-gray-600">
                <p><strong>개인정보보호책임자:</strong> 김태희</p>
                <p><strong>이메일:</strong> ic12company@gmail.com</p>
              </div>
              <p className="text-gray-600">
                회사는 고객님의 민원에 신속히 대응하겠습니다.
              </p>
            </section>

            {/* 11. 기타 개인정보 침해 관련 신고 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                11. 기타 개인정보 침해 관련 신고
              </h2>
              <p className="text-gray-600">
                기타 개인정보 침해에 대한 신고는 다음 기관에 문의하실 수 있습니다:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>개인정보침해신고센터 (privacy.kisa.or.kr / 국번 없이 118)</li>
                <li>대검찰청 사이버범죄수사단 (spo.go.kr / 02-3480-2000)</li>
                <li>경찰청 사이버안전국 (ctrc.go.kr / 국번 없이 182)</li>
              </ul>
            </section>
          </div>

          {/* 하단 홈으로 돌아가기 버튼 */}
          <div className="mt-8 text-center">
            <Button
              asChild
              className="bg-[#E4002B] hover:bg-[#C50025] text-white font-semibold px-8 py-3 rounded-xl"
            >
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                홈으로 돌아가기
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

