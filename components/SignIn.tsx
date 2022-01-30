import React, { FormEventHandler, useRef } from "react";
import { magicSignIn } from "../api/auth";

export const SignIn = () => {
  const refEmail = useRef<any>();

  const onSubmit = async (e: any) => {
    e?.preventDefault();
    const email = refEmail.current.value;
    await magicSignIn(email);
  };

  return (
    <form onSubmit={onSubmit} key="signInEvent">
      {/* <input type="email" name="email" id="email" ref={refEmail} /> */}
      <button type="submit">Se connecter</button>
    </form>
  );
};
