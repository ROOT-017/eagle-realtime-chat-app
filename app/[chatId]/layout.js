"use client";
import Image from "next/image";
import userImg from "@/public/assets/TERENCE.png";
import { useRouter } from "next/navigation";
import { data } from "@/utils/utils";
import SearchUser from "@/components/searchUser";
import { useEffect, useContext, useCallback } from "react";
import Context from "@/store/contex";
import { signIn } from "next-auth/react";

const Chatlayout = ({ children, params }) => {
  const { activeChat, setActiveChat, setSignedUserObj, signedUser } =
    useContext(Context);
  // const [activeChat, setActiveChat] = useState(null);
  const router = useRouter();
  const { chatId } = params;

  const openChat = ({ value }) => {
    router.push(`/` + value);
  };

  const handleSignup = () => {
    signIn();
  };

  const fetchUserObj = useCallback(
    async (name) => {
      const user = await fetch(`https://api.github.com/search/users?q=${name}`);
      if (!user.ok) return;
      const { items } = await user.json();

      setSignedUserObj(items[0]);
      return user;
    },
    [setSignedUserObj]
  );

  const searchUser = useCallback(
    async (username) => {
      const res = await fetch(
        `https://api.github.com/search/users?q=${username}`
      );
      if (!res.ok)
        throw new Error(`Fail to load ${username} , check internet connection`);

      const data = await res.json();
      setActiveChat(data.items[0]);
      return data;
    },
    [setActiveChat]
  );

  useEffect(() => {
    searchUser(chatId);
  }, [chatId, searchUser]);

  useEffect(() => {
    console.log("userObj");
    if (!signedUser) return;
    fetchUserObj(signedUser.name);
  }, [signedUser, fetchUserObj, setSignedUserObj]);

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
