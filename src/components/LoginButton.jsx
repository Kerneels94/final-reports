import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        onClick={() => loginWithRedirect()}
        className="bg-lime-300 rounded-lg px-2 py-1"
      >
        Login
      </button>
    )
  );
};
