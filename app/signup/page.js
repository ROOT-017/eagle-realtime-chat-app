"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useContext } from "react";
import Context from "@/store/contex";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Eagle from "../assets/cherry-99.png";
// import { Eagle_Lake } from "next/font/google";

const Signup = (props) => {
  const { data } = useSession();
  const { setSignedUser } = useContext(Context);
  const router = useRouter();

  const handleSignup = () => {
    signIn();
  };

  useEffect(() => {
    // console.log(data);
    if (!data) return;
    setSignedUser(data.user);
    router.push("/");
  }, [data, setSignedUser, router]);

  return (
    <div className="  h-full bg-sm-abstract-bg  lg:bg-lg-abstract-bg bg-no-repeat bg-cover">
      <div className="flex flex-col justify-center items-center h-full bg-[rgba(0,0,0,0.8)]  ">
        <Image src={Eagle} alt="eagle" className="lg:h-64 lg:w-64 h-48 w-48" />
        <h1 className="lg:text-5xl text-3xl py-6 text-white font-bold">Eagle Chats</h1>
        <button
          onClick={handleSignup}
          className=" p-4 text-xs text-white lg:text-base bg-gradient-to-r from-oxford-blue hover:from-oxford-blue-200  hover:to-emerald-300 to-emerald-600 rounded-lg"
        >
          Sign Up with Github to Continue
        </button>
      </div>
    </div>
  );
};

export default Signup;
