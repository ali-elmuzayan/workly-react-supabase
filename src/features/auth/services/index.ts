import { supabase } from "@/lib/supabase";

/**
 * Login a user
 */
export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return { data };
}


/**
 * Register a new User
 */
export async function register() {
  return 
}
