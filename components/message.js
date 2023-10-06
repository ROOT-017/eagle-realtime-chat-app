const MessageTemplate = ({ time, message }) => {
  return (
    <div className="rounded bg-gray-300 flex flex-col w-fit p-1">
      <h1 className="text-right">{time}</h1>
      <p>
        {message}
      </p>
    </div>
  );
};

export default MessageTemplate;
