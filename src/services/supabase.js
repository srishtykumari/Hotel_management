
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://megmatjeeucnbmxduhac.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lZ21hdGplZXVjbmJteGR1aGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1ODUwODYsImV4cCI6MjAzODE2MTA4Nn0.JtbQHGmYBcQFulwu583_28Rxndpk_lildtLbUHOTRFQ"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;