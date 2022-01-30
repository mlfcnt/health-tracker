import { supabase } from "../utils/supabaseClient";

export const magicSignIn = async (email: string) => {
  const { user, session, error } = await supabase.auth.signIn({
    email,
  });

  return { user, session, error };
};
