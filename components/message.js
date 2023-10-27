import styles from "./message.module.css";
const MessageTemplate = ({ username = "unknown", time, message }) => {
  return (
    <div className={`${username === "me" ? styles.myMessage : null}`}>
      {" "}
      <div className="rounded bg-gray-300 flex  flex-col w-fit p-1">
        {/* <h1 className="text-right">{time}</h1> */}
        <p className="flex min-w-[6em] gap-2 w-full justify-between">
          <span className="pr-4">{username}</span>
          <span>{time}</span>
        </p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default MessageTemplate;
