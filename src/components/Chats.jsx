import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { ChatContext } from "../context/chatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);
  const userChat = Object.entries(chats);

  const handelSelect = (value) => {
    dispatch({ type: "SWITCH_USER", payload: value });
  };

  return (
    <div className="chats">
      {userChat?.sort((a,b)=>b[1].date-a[1].date).map((chat) => {
        return (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handelSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.PhotoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
