-- consultations 테이블 생성
-- 상담 신청 데이터를 저장하기 위한 테이블

CREATE TABLE IF NOT EXISTS consultations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name VARCHAR(50) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  subscription_type VARCHAR(30) NOT NULL,
  desired_device VARCHAR(100) NOT NULL,
  message TEXT,
  privacy_consent BOOLEAN NOT NULL DEFAULT false,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스 생성 (조회 성능 향상)
CREATE INDEX idx_consultations_created_at ON consultations(created_at DESC);
CREATE INDEX idx_consultations_status ON consultations(status);

-- updated_at 자동 업데이트 트리거
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_consultations_updated_at
  BEFORE UPDATE ON consultations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) 설정
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- 익명 사용자가 INSERT할 수 있도록 정책 추가
CREATE POLICY "Allow anonymous insert" ON consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 주석
COMMENT ON TABLE consultations IS '상담 신청 데이터 테이블';
COMMENT ON COLUMN consultations.customer_name IS '고객 이름';
COMMENT ON COLUMN consultations.phone IS '연락처 (010-0000-0000 형식)';
COMMENT ON COLUMN consultations.subscription_type IS '가입 유형 (number_transfer, device_change, new_subscription)';
COMMENT ON COLUMN consultations.desired_device IS '희망 기종';
COMMENT ON COLUMN consultations.message IS '문의 내용 (선택)';
COMMENT ON COLUMN consultations.privacy_consent IS '개인정보 수집 동의 여부';
COMMENT ON COLUMN consultations.status IS '상담 상태 (pending, contacted, completed)';


