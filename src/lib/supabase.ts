import { createClient } from '@supabase/supabase-js'

// These are safe to commit: the anon key is public by design.
// Row-level security on the consultation_requests table restricts
// what it can do (insert only, no reads).
const SUPABASE_URL = 'https://zyzjvolxzyvnmsxcpttn.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5emp2b2x4enl2bm1zeGNwdHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0ODQ5NjMsImV4cCI6MjA5MTA2MDk2M30.Z2Iq_idVo8OynYWNafC4537hywSnKFX2lzHuc2stYjQ'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export type ConsultationRequest = {
  full_name: string
  phone: string
  consultation_type: string
}

export async function submitConsultationRequest(data: ConsultationRequest) {
  return supabase.from('consultation_requests').insert({
    full_name: data.full_name,
    phone: data.phone,
    consultation_type: data.consultation_type,
    user_agent: navigator.userAgent,
    page_url: window.location.href,
  })
}
