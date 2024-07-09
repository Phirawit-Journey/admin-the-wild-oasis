import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://blgejddwmgyltigwrjls.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsZ2VqZGR3bWd5bHRpZ3dyamxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkxMzIzMjIsImV4cCI6MjAzNDcwODMyMn0.wFKvdcprYDoG_1TNvARl0He2GiIJ64y1PKpFkpcJhLo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
