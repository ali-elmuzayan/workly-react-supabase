import { createClient } from "@supabase/supabase-js";

const URL = "https://oobyfcrqkstvspduqsvr.supabase.co";
const PUBLISH_KEY = "sb_publishable_Z3tkHaNfUrloPLFjv2nl1A_lOfUXkCc";

/**
 * The 'Supabase' Client
 */
export const supabase = createClient(URL, PUBLISH_KEY);
