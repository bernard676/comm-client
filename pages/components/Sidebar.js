import AddIcon from '@mui/icons-material/Add';
import AddUserModal from './AddUserModal';
import { Tooltip } from "@mui/material";
import { useUser } from '@auth0/nextjs-auth0';
import React, { useEffect, useState, useContext } from 'react';
import { useMainContext, useMainUpdateContext} from '../contexts/MainUserContext';

export default function Sidebar({socket}) {
  const userInfoContext = useMainContext();
  const updateUserInfoContext = useMainUpdateContext();
  const [open,setOpen] = useState(false);
  const { user, error, isLoading } = useUser();

  const showAddUserModal = () => {
    document.getElementById("defaultModal").classList.remove("hidden");
  }

  const setTalkingTo = (value) => {
    let copy = {
      contact: userInfoContext?.contact, 
      talkingTo: value, 
      server: value,
      serverRoom: userInfoContext?.serverRoom,
      history: userInfoContext?.history
    };
    //console.log("was on server "+JSON.stringify(userInfoContext.server));
    //console.log("entered server of "+JSON.stringify(copy.server));
    updateUserInfoContext(copy);
    //console.log("new current: "+JSON.stringify(userInfoContext.server))
  }
  return (
    <div className="text-white">
      <div>
        <nav>
        <ul>
          <li>
            <img className="rounded-xl" src={user?.picture} />
          </li>
        </ul>
      </nav>
      </div>
      <div className='mt-2 mb-4 rounded bg-gray-300 w-10 h-1'>
        
      </div>
      <nav>
        <ul >
        {
            userInfoContext?.contact?.map((element, index) => {
              return (
                <li className="mb-3" onClick={() => setTalkingTo(element)} key={index}>
                  <img className="rounded hover:cursor-pointer" src={element?.image} />
                </li>
              );
            })
          }
        </ul>
      </nav>
      <div>
      <Tooltip title="Server" arrow placement="right">
        <AddIcon onClick={ () => showAddUserModal()} className="bg-gray-500 w-[40%] h-[40%] ml-[30%] mt-2 rounded-full"></AddIcon>
      </Tooltip>
      </div>
      <AddUserModal></AddUserModal>
    </div>
  )
}