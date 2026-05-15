export type Subject = 'VCE English' | 'VCE Methods' | 'VCE Specialist'

export type BookingFormData = {
  role: 'student' | 'parent'
  first_name: string
  last_name: string
  email: string
  phone: string
  subject: Subject
  year_level: string
  location: 'online'
  message?: string
}

export type Booking = BookingFormData & {
  id: string
  created_at: string
}
