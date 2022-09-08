import Layout from './layouts/Layout';
import ChatboxLayout from './layouts/ChatboxLayout';
import React, { useState, useEffect } from "react";
import { useSocket } from './_app';
import { useMainContext, useMainUpdateContext } from './contexts/MainUserContext';
import { useUser } from '@auth0/nextjs-auth0';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import SidebarServer from './components/SidebarServer';
import ChatHeader from './components/ChatHeader';
import YouChatted from './components/YouChatted';
import YouReceived from './components/YouReceived';

export default function chat({ }) {
  const socket = useSocket();
  const userInfoContext = useMainContext();
  const { user, error, isLoading } = useUser();
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        talkingTo: userInfoContext?.talkingTo, 
        server: userInfoContext?.talkingTo,
        serverRoom: userInfoContext?.serverRoom,
        author: user.name,
        message: currentMessage,
        room: userInfoContext?.serverRoom,
        socketId: socket?.id,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
  return (
    <div className="min-h-screen flex flex-col h-screen  overflow-x-hidden">
      <header className="bg-red-50">
        <NavBar />
      </header>
      <div className="relative flex-1 flex flex-row  overflow-x-hidden overflow-y-hidden">
        <nav className="w-min order-first bg-[#202225] overflow-y-auto p-3">
          <Sidebar />
        </nav>
        <nav className="order-first bg-[#2f3136] w-32 py-1 m-auto h-full overflow-y-auto">
          <SidebarServer />
        </nav>
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="min-h-screen flex flex-col">

            <ChatHeader />
            <main className="text-white flex-1 bg-[#36393f] p-2">
              <h1>hello: {user?.name} this is your chat box</h1>
              <h1>socket: {socket.id}</h1>
              <h1>server: {JSON.stringify(userInfoContext?.server)}</h1>
              <h1>room: {JSON.stringify(userInfoContext?.serverRoom)}</h1>
              {
                messageList.map((messageContent) => {
                  return (
                    user?.name === messageContent.author ?
                     <YouChatted message={messageContent.message}/>:
                     <YouReceived form={userInfoContext?.talkingTo} message={messageContent.message}/>
                  );
                })

                /*return (
                    socket.id === messageContent.socketId ? 
                    <YouChatted message={messageContent.message}/>:
                    <YouReceived form={userInfoContext?.talkingTo} message={messageContent.message}/>
                  ); */
              }
            </main>
            <div className="sticky bottom-0">
              <form>
                <div className="mb-4 w-full bg-gray-50 border border-gray-200 dark:bg-gray-600 dark:border-gray-600">
                  <div className="py-2 px-4 bg-white dark:bg-gray-800">
                    <label className="sr-only">Your comment</label>
                    <textarea 
                    onChange={(event) => {
                      setCurrentMessage(event.target.value);
                    }} 
                    onKeyPress={(event) => {
                      event.key === "Enter" && sendMessage();
                    }}
                    value={currentMessage} 
                    id="comment" rows="2" className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..."></textarea>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                    <p onClick={()=> {sendMessage()}} className="button inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                      Post comment
                    </p>
                    <div className="flex pl-0 space-x-1 sm:pl-2">
                      <button type="button" className="inline-flex justify-center p-2 text-gray-500 cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Attach file</span>
                      </button>
                      <button type="button" className="inline-flex justify-center p-2 text-gray-500 cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Set location</span>
                      </button>
                      <button type="button" className="inline-flex justify-center p-2 text-gray-500 cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Upload image</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>

      </div>
    </div>
  )
}