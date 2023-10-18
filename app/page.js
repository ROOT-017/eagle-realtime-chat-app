"use client";
import Image from "next/image";
import userImg from "../assets/TERENCE.png";
import MessageTemplate from "@/components/message";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { data } from "@/utils/utils";
import { BiSearch } from "react-icons/bi";
import Search from "@/components/search";
import Spinder from "@/components/ui/spinder";
import Link from "next/link";
import SearchUser from "@/components/searchUser";


export default function Home({ children }) {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
  };


  const handleChat = ({ value }) => {
    router.push("/" + value.id);
  };

  return (
    <>
      <div className="h-full lg:flex w-full hidden  ">
        <div className="w-1/3 p-2 h-full bg-space_cadet">
          <div className="h-full">
            <SearchUser />
            <ul className="flex flex-col gap-1">
              {data.map((e) => (
                <li
                  key={e.id}
                  onClick={handleChat.bind(null, { value: e })}
                  className="py-4 hover:text-white  flex justify-between hover:bg-oxford-blue-200 bg-oxford-blue rounded-md pl-2 transition-colors ease-linear "
                >
                  <Image
                    src={userImg}
                    height={48}
                    className="rounded-full"
                    alt="user"
                  ></Image>
                  <span className="pr-2 text-white">10:05am</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex w-2/3 justify-center items-center h-full">
          <p className="text-xl">Select a chat</p>
        </div>
      </div>
      <div className="h-full bg-space_cadet w-full lg:hidden ">
        <SearchUser />
        <ul className="flex flex-col ">
          {data.map((e) => (
            <li
              key={e.id}
              onClick={handleChat.bind(null, { value: e })}
              className="py-4 border-gray-300 border-b hover:text-white  flex justify-between bg-space_cadet pl-2 transition-colors ease-linear "
            >
              <Image
                src={userImg}
                height={48}
                className="rounded-full"
                alt="user"
              ></Image>
              <span className="pr-2 text-white">10:05am</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
