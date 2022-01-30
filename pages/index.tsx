import type { NextPage } from "next";
import { Events } from "../components/Events";
import { NewEvent } from "../components/NewEvent";
import { SignIn } from "../components/SignIn";
import { supabase } from "../utils/supabaseClient";

const Home: NextPage = () => {
  const currentUser = supabase.auth.user();
  return (
    <div>
      {currentUser ? (
        <>
          <Events />
          <p style={{ margin: "50px" }}>__________________</p>
          <NewEvent />
        </>
      ) : (
        <>
          <p>Veuillez vous connecter pour accéder à votre tracking ! 😃</p>
          <SignIn />
        </>
      )}
    </div>
  );
};

export default Home;
