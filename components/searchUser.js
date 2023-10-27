import Image from "next/image";
import Link from "next/link";
import Search from "./search";
import Spinder from "./ui/spinder";
import userImg from "@/public/assets/TERENCE.png";
import MessageTemplate from "@/components/message";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { data } from "@/utils/utils";
import { BiSearch } from "react-icons/bi";

const SearchUser = ({ handleActiveChat }) => {
  const [search, setSearch] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const handleSearch = useCallback(async () => {
    if (search.trim().length === 0) return;
    setIsPending(true);
    const res = await fetch(`https://api.github.com/search/users?q=${search}`);
    setIsPending(false);
    const data = await res.json();

    if (data.items.length > 0) {
      setSearchResult(data.items.slice(0, 5));
    } else {
      setSearchResult(null);
    }
  }, [search]);

  useEffect(() => {
    if (search.trim() === "") {
      setIsTyping(false);
      setSearchResult([]);
      return;
    }
    setSearchResult([]);
    // perform search only when user stops typing
    setIsTyping(true);
    const timer = setTimeout(() => {
      setIsTyping(false);
      handleSearch();
    }, 700);
    return () => {
      clearTimeout(timer);
    };
  }, [search, handleSearch]);

  return (
    <div className="pb-2">
      <Search setTerm={setSearch} />
      {searchResult?.length > 0 ? (
        <ul>
          {searchResult.map((user) => (
            <li
              key={user.id}
              className=" p-2 rounded-lg hover:bg-oxford-blue  text-white"
            >
              <Link
                href={"/" + user.login}
                className="w-full h-full flex justify-between items-center"
                onClick={() => handleActiveChat(user)}
              >
                <Image
                  src={
                    user.avatar_url ||
                    "https://avatars.githubusercontent.com/u/1?v=4"
                  }
                  height={48}
                  width={48}
                  className="rounded-full"
                  alt="avatar"
                />
                <span>
                  {user.login.length > 10
                    ? user.login.slice(0, 15) + "..."
                    : user.login}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      {
        // if no user found
        searchResult === null && (
          <div className="p-2">
            <h1 className="text-center py-2 text-white text-lg">
              &quot;
              <span className="font-bold text-emerald-400">{search}</span>&quot;
              not found
            </h1>
          </div>
        )
      }
      {isTyping ||
        (isPending && (
          <div className="flex justify-center items-center p-2">
            <Spinder />
          </div>
        ))}
    </div>
  );
};

export default SearchUser;
