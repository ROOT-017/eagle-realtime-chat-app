"use client";
import MessageTemplate from "../../components/message";
import { BiSend } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { useChannel } from "ably/react";
import { useContext } from "react";
import Context from "@/store/contex";
import formatChannelName from "@/utils/formatChannelName";

const ChatId = ({ params }) => {
  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setMessages] = useState([]);
  const [channelName, setChannelName] = useState("");
  const { chatId } = params;
  const ctx = useContext(Context);
  const { signedUser, activeChat, signedUserObj } = ctx;
  const messageTextIsEmpty = messageText.trim().length === 0;
  const inputBox = useRef(null);
  let messageEnd = null;

  // const creatChannel = (user1, user2) => {
  //   if (user1 === null || user2 === null) return;

  //   let channel = `${user1?.image.split("/")[4].split("?")[0].toString()}-${
  //     user2?.id
  //   }`;

  //   setChannelName(channel);
  //   return channel;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageTextIsEmpty) {
      return;
    }
    channel.publish({
      name: "channelName",
      data: JSON.stringify({
        text: messageText,
        time: new Date().toLocaleTimeString(),
        name: signedUser?.name,
      }),
    });
    setMessageText("");
    inputBox.current.value = "";
    inputBox.current.focus();
  };

  const { channel, ably } = useChannel("channelName", (message) => {
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);
  });

  const messages = receivedMessages.map((message, index) => {
    const data = JSON.parse(message.data);
    const author =
      message.connectionId === ably.connection.id ? "me" : data.name;
    return (
      <MessageTemplate
        key={index}
        username={author}
        time={data.time}
        message={data.text}
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

  useEffect(() => {
    // creatChannel(signedUser, activeChat);
    // formatChannelName(signedUserObj, chatId);
    if (signedUserObj === null || activeChat === null) return;
    let channelName = formatChannelName(signedUserObj.login, chatId);
    setChannelName(channelName);
    console.log(channelName);
  }, [signedUserObj, activeChat, chatId]);

  return (
    <div className="lg:w-2/3 w-full h-full p-2">
      <div className="h-full flex flex-col  w-full bg-space_cadet  rounded-lg">
        <div className="h-[90%] p-1  flex flex-col gap-1 overflow-y-scroll">
          {messages}
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
              disabled={
                messageTextIsEmpty |
                (activeChat === null) |
                (signedUser === null)
              }
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
