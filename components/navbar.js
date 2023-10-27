"use client";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { useRouter, usePathname } from "next/navigation";
import { useCallback, useContext, useEffect } from "react";
import Context from "@/store/contex";
import { signOut, useSession } from "next-auth/react";

const Navbar = (props) => {
  const { activeChat, signedUser, setSignedUser, setActiveChat } =
    useContext(Context);
  const router = useRouter();
  const path = usePathname();
  const { data: session } = useSession();
  const handleBack = () => {
    router.back();
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/signup", redirect: true });
    setSignedUser(null);
    setActiveChat(null);
  };

  useEffect(() => {
    if (path === "/") {
      return;
    }
  }, [path, signedUser]);

  useEffect(() => {
    if (session) {
      setSignedUser(session.user);
    }
  });

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
          )}{" "}
          {path === "/" && signedUser && (
            <Image
              src={signedUser.image}
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
          )}{" "}
          {path === "/" && !signedUser && (
            <button
              onClick={() => router.push("/signup")}
              className="text-white lg:text-base bg-gradient-to-r from-oxford-blue hover:from-oxford-blue-200  hover:to-emerald-300 to-emerald-600 rounded-lg px-4 py-2"
            >
              Sign up
            </button>
          )}
          {activeChat && path !== "/" && path !== "/signup" && (
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
