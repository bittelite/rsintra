"use client";

import { signIn } from "next-auth/react";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function LoginButton() {
  return (
    <div className="hover:text-blue-accent-hover">
      <button
        onClick={() => signIn("azure-ad")}
        className="flex uppercase font-bold w-full justify-center"
      >
        <span className="hidden md:flex">Logg inn</span>
        <FontAwesomeIcon icon={faRightToBracket} className="icon" />
      </button>
    </div>
  );
}
