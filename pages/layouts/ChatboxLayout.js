import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import SidebarServer from '../components/SidebarServer';
import React from 'react';
import { useMainContext } from '../contexts/MainUserContext';
import ChatHeader from '../components/ChatHeader';

export default function ChatboxLayout({ children }) {
  const userInfoContext = useMainContext();
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
          <div className="container bg-green-300 min-h-screen flex flex-col">
            <ChatHeader />
            <div className='bg-red-500 h-30'>
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}