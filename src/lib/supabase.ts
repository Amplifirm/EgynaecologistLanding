import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(url, anonKey)

export type ConsultationRequest = {
  full_name: string
  phone: string
  consultation_type: string
  user_agent?: string
  page_url?: string
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
