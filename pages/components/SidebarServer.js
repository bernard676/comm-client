import { useUser } from '@auth0/nextjs-auth0';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useMainContext, useMainUpdateContext } from '../contexts/MainUserContext';
import { useSocket } from '../_app';
export default function Sidebar() {

  let servers = ["roomA1", "roomA2", "roomA3", "roomA4", "roomA5"];
  const socket = useSocket();
  const userInfoContext = useMainContext();
  const updateUserInfoContext = useMainUpdateContext();
  const { user, error, isLoading } = useUser();
  const [serverRoom, setServerRoom] = useState(undefined);

  const joinRoomFromServer = (room) => {
    setServerRoom(room);
    if (user && serverRoom != undefined) {
      let copy = {
        contact: userInfoContext?.contact,
        talkingTo: userInfoContext?.talkingTo,
        serverRoom: serverRoom,
        server: userInfoContext?.server,
        history: userInfoContext?.history
      };

      console.log("entered server room: " + serverRoom)
      updateUserInfoContext(copy);
      socket.emit("join_room", serverRoom);
    }
  }

  return (
    <div className="text-white">
      <nav>
        <ul>
          {
            servers.map((element, index) => {
              return (
                <li className="w-md p-2" key={index} onClick={() => joinRoomFromServer(servers[index])}>
                  <button className="hover:bg-[gray] hover:rounded hover:p p-1 hover:cursor-pointer text-white button text-center w-full">{servers[index]}</button>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
}