"use client";
import MessageTemplate from "../../components/message";
import { BiSend } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useChannel } from "ably/react";

const ChatId = (props) => {
  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setMessages] = useState([]);
  const messageTextIsEmpty = messageText.trim().length === 0;
  const inputBox = useRef(null);
  const { chatId } = useParams();
  let messageEnd = null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputBox.current.value);
    if (messageTextIsEmpty) {
      return;
    }
    channel.publish({ name: "chat-message", data: messageText });
    setMessageText("");
    inputBox.current.value = "";
    inputBox.current.focus();
  };

  const { channel, ably } = useChannel("chat-demo", (message) => {
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);
  });

  const messages = receivedMessages.map((message, index) => {
    const author = message.connectionId === ably.connection.id ? "me" : "other";
    return (
      <MessageTemplate
        key={index}
        username={`Name`}
        time={`20:00 am`}
        message={message.data}
      />
    );
    /* return (
      <span key={index} className={styles.message} data-author={author}>
        {message.data}
      </span>
    );*/
  });

  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: "smooth" });
  });

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
          <div
            ref={(element) => {
              messageEnd = element;
            }}
          ></div>
        </div>
        <div className="h-[10%] p-1 ">
          <form
            onSubmit={handleSubmit}
            className="flex h-full bg-white rounded-lg"
          >
            <input
              type="text"
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Type your message..."
              ref={inputBox}
              className="w-full focus:outline-none p-1 rounded-lg  text-xl"
            />
            <button
              className="mx-4"
              type="submit"
              disabled={messageTextIsEmpty}
            >
              <BiSend size={`2em`} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatId;
