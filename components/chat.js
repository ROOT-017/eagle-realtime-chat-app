import MessageTemplate from "./message";

const Chat = (props) => {
  return (
    <div className="w-2/3 p-2">
      <div className="h-full flex flex-col  w-full bg-space_cadet  rounded-lg">
        <div className="h-[90%] p-1  flex flex-col gap-1">
          <MessageTemplate
            time={`20:00am`}
            message={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
  quibusdam distinctio laboriosam atque corporis cupiditate alias
  similique optio, repudiandae aspernatur.`}
          />
          <MessageTemplate
            time={`20:00am`}
            message={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
quibusdam distinctio laboriosam .`}
          />
          <MessageTemplate
            time={`20:00am`}
            message={`atque corporis cupiditate alias
similique optio, repudiandae aspernatur.`}
          />
        </div>
        <div className="h-[10%] p-1 ">
          <form onSubmit={handleSubmit} className="flex h-full ">
            <input
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full focus:outline-none p-1 rounded-lg text-xl"
            />
            <button className="mx-4" type="submit">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
