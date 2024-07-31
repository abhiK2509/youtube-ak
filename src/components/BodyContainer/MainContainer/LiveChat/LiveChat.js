import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../../../../redux/chatSlice";
import {
  generateRandomName,
  makeRandomMessage,
} from "../../../../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: makeRandomMessage(5) + "🚀",
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-[408px] ml-2 p-2 border border-black bg-slate-100 rounded-t-lg overflow-y-scroll flex flex-col-reverse">
        {messages.length !== 0 &&
          messages.map((msg, index) => (
            <ChatMessage key={index} name={msg.name} message={msg.message} />
          ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-b-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Abhijeet",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          value={liveMessage}
          className="px-2 w-64"
          type="text"
          placeholder="Enter message"
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
