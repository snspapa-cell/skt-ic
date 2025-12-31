import { createClient } from '@supabase/supabase-js';

/** Supabase 환경변수 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/** Supabase 클라이언트 인스턴스 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/** 상담 신청 데이터 타입 */
export interface Consultation {
  id: string;
  customer_name: string;
  phone: string;
  subscription_type: string;
  desired_device: string;
  message?: string;
  privacy_consent: boolean;
  status: 'pending' | 'contacted' | 'completed';
  created_at: string;
  updated_at: string;
}

/** 상담 신청 Insert 타입 */
export interface ConsultationInsert {
  customer_name: string;
  phone: string;
  subscription_type: string;
  desired_device: string;
  message?: string;
  privacy_consent: boolean;
}


