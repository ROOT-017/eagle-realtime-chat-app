"use client";
import { signIn } from "next-auth/react";



const Signup = (props) => {
  const handleSignup = () => {
    signIn();
  };
  return (
    <div className="  h-full bg-sm-abstract-bg  lg:bg-lg-abstract-bg bg-no-repeat bg-cover">
      <div className="flex flex-col justify-center items-center h-full bg-[rgba(0,0,0,0.8)]  ">
        <h1 className="text-5xl py-6 text-white font-bold">Eagle Chats</h1>
        <button
          onClick={handleSignup}
          className=" p-4   text-sm text-white lg:text-base bg-gradient-to-r from-oxford-blue hover:from-oxford-blue-200  hover:to-emerald-300 to-emerald-600 rounded-lg"
        >
          Sign Up with Github to Continue
        </button>
      </div>
    </div>
  );
};

export default Signup;
