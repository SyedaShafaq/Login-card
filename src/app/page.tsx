 "use client"
 
 

import React, { useState, useEffect } from "react";
import Link from "next/link";

const LoginForm: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  // Load saved data on component
  useEffect(() => {
    const savedEmailOrPhone = localStorage.getItem("emailOrPhone");
    const savedRememberMe = localStorage.getItem("rememberMe") === "true";

    if (savedEmailOrPhone && savedRememberMe) {
      setEmailOrPhone(savedEmailOrPhone);
      setRememberMe(true);
    }
  }, []);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem("emailOrPhone", emailOrPhone);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("emailOrPhone");
      localStorage.setItem("rememberMe", "false");
    }
    alert("form submitted")
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="bg-white w-3/5 flex flex-col px-4 py-8 bg-opacity-20 shadow-lg text-black">
        <h1 className="text-center text-2xl lg:5xl md-4xl font-semibold lg:font-bold">
          Nice To See You Again
        </h1>
        <form className="flex flex-col lg:text-xl text-pretty" onSubmit={handleSubmit}>
          <label htmlFor="emailOrPhone">Login</label>
          <input
            className="rounded-md"
            type="text"
            placeholder="Email or Phone No"
            id="emailOrPhone"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />
          <label className="mt-4" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md"
            type="password"
            placeholder="Enter Password"
            id="password"
            required
          />
          <div className="flex justify-center lg:flex-row flex-col space-x-5">
            <label className="mt-4">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              /> 
              Remember me
            </label>
            <span className="mt-4">
              <Link href="/">Forgot password?</Link>
            </span>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-[150px] text-xl lg:text-2xl mt-4 bg-[#85C028] px-4 py-2 hover:bg-[#F5A482] hover:text-white rounded-lg lg:font-semibold"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;



 
   