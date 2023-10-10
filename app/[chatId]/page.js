"use client";
import MessageTemplate from "../../components/message";
import { BiSend } from "react-icons/bi";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

const ChatId = (props) => {
  const [message, setMessage] = useState("");
  const { chatId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  

  return (
    <div className="lg:w-2/3 w-full h-full p-2">
      <div className="h-full flex flex-col  w-full bg-space_cadet  rounded-lg">
        <div className="h-[90%] p-1  flex flex-col gap-1 overflow-y-scroll">
          <MessageTemplate
            time={`20:00 am`}
            message={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
quibusdam distinctio laboriosam atque corporis cupiditate alias
similique optio, repudiandae aspernatur.`}
          />
          <MessageTemplate
            time={`20:00 am`}
            message={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
quibusdam distinctio laboriosam .`}
          />
          <MessageTemplate
            time={`20:00 am`}
            message={`atque corporis cupiditate alias
similique optio, repudiandae aspernatur.`}
          />
          
        </div>
        <div className="h-[10%] p-1 ">
          <form
            onSubmit={handleSubmit}
            className="flex h-full bg-white rounded-lg"
          >
            <input
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full focus:outline-none p-1 rounded-lg  text-xl"
            />
            <button className="mx-4" type="submit">
              <BiSend size={`2em`} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatId;
