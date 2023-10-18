"use client";
import Image from "next/image";
import userImg from "../../assets/TERENCE.png";
import { useRouter } from "next/navigation";
import { data } from "@/utils/utils";
import SearchUser from "@/components/searchUser";
import { useEffect, useContext, useCallback } from "react";
import { useParams } from "next/navigation";
import Context from "@/store/contex";
import { signIn } from "next-auth/react";

const Chatlayout = ({ children }) => {
  const { activeChat, setActiveChat } = useContext(Context);
  // const [activeChat, setActiveChat] = useState(null);
  const router = useRouter();
  const { chatId } = useParams();

  const openChat = ({ value }) => {
    router.push(`/` + value);
  };

  const handleSignup = () => {
    signIn();
  };
  const searchUser = useCallback(
    async (username) => {
      const res = await fetch(
        `https://api.github.com/search/users?q=${username}`
      );
      if (!res.ok) return;
      const data = await res.json();
      // setActiveChat(data.items[0]);
      setActiveChat(data.items[0]);
      return data;
    },
    [setActiveChat]
  );

  useEffect(() => {
    searchUser(chatId);
  }, [chatId, searchUser]);

  return (
    <>
      <div className="h-full lg:flex w-full hidden  ">
        <div className="w-1/3 p-2 h-full bg-space_cadet">
          <div className="h-full overflow-y-scrol">
            <SearchUser handleActiveChat={setActiveChat} />
            <ul className="flex flex-col gap-1">
              {activeChat && (
                <li
                  onClick={() => openChat({ value: activeChat.login })}
                  className="py-4 hover:text-white  flex justify-between hover:bg-oxford-blue-200 bg-oxford-blue rounded-md pl-2 transition-colors ease-linear "
                >
                  <Image
                    src={activeChat.avatar_url}
                    height={48}
                    width={48}
                    className="rounded-full"
                    alt="user"
                  ></Image>
                  <span className="pr-2 text-white">{activeChat.login}</span>
                </li>
              )}
              {data.map((e) => (
                <li
                  key={e.id}
                  onClick={() => openChat({ value: e.id })}
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
              <li className="py-4 hover:text-white  flex justify-between hover:bg-oxford-blue-200 bg-oxford-blue rounded-md pl-2 transition-colors ease-linear ">
                <Image
                  src={userImg}
                  height={48}
                  className="rounded-full"
                  alt="user"
                ></Image>
                <span className="pr-2 text-white">10:05am</span>
              </li>{" "}
              <li className="py-4 hover:text-white  flex justify-between hover:bg-oxford-blue-200 bg-oxford-blue rounded-md pl-2 transition-colors ease-linear ">
                <Image
                  src={userImg}
                  height={48}
                  className="rounded-full"
                  alt="user"
                ></Image>
                <span className="pr-2 text-white">10:05am</span>
              </li>
            </ul>
          </div>
        </div>

        <>{children}</>
      </div>
      <div className="h-full w-full lg:hidden ">
        <>{children}</>
      </div>
    </>
  );
};

export default Chatlayout;
