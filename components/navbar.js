"use client";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../assets/TERENCE.png";
import { BiArrowBack } from "react-icons/bi";
import { useRouter, usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import Context from "@/store/contex";

const Navbar = (props) => {
  const { activeChat, signedUser, setSignedUser ,setActiveChat} = useContext(Context);

  const router = useRouter();
  const path = usePathname();

  const handleBack = () => {
    router.back();
  };

  const handleSignOut = () => {
    setSignedUser(null);
    setActiveChat(null);
    router.push("/signup");
  };

  useEffect(() => {
    if (path === "/") {
      console.log(signedUser);

      return;
    }
  }, [path, signedUser]);

  return (
    <div className="text-white fixed h-16 lg:px-12 w-full px-4 justify-between bg-oxford-blue flex items-center">
      {path !== "/" && path !== "signup" && (
        <BiArrowBack
          className="lg:hidden"
          size={`1.5em`}
          onClick={handleBack}
        />
      )}{" "}
      <Link href={"/"}>
        <span>EAGLE CHAT</span>
      </Link>
      <>
        <div className="flex items-center gap-3">
          {signedUser && (
            <button
              onClick={handleSignOut}
              className="text-white lg:text-base bg-gradient-to-r from-oxford-blue hover:from-oxford-blue-200  hover:to-emerald-300 to-emerald-600 rounded-lg px-4 py-2"
            >
              Sign Out
            </button>
          )}
          {path === "/" && signedUser && (
            <Image
              src={signedUser.avatar_url}
              alt="profile"
              height={42}
              width={42}
              className="rounded-full"
            />
          )}
          {/* {path !== "/" && (
          <Image
            src={signedUser.avatar_url}
            alt="profile"
            height={42}
            width={42}
            className="rounded-full"
          />
        )} */}
          {signedUser === null && path === "/signup" && (
            <button className="text-white lg:text-base bg-gradient-to-r from-oxford-blue hover:from-oxford-blue-200  hover:to-emerald-300 to-emerald-600 rounded-lg px-4 py-2">
              Sign up
            </button>
          )}

          {activeChat && (
            <Image
              src={activeChat.avatar_url}
              alt="profile"
              height={42}
              width={42}
              className="rounded-full"
            />
          )}
        </div>
      </>
    </div>
  );
};

export default Navbar;
