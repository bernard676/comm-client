import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { React } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ThemeProvider } from './contexts/ThemeContext';
import { MainUserProvider } from './contexts/MainUserContext';
import io from 'socket.io-client';

var socket = io.connect("http://localhost:3001");
export function useSocket() {return socket;}

export default function MyApp({ Component, pageProps }) {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <UserProvider>
      <ThemeProvider>
        <MainUserProvider>
          <Component {...pageProps}/>
        </MainUserProvider>  
      </ThemeProvider>
    </UserProvider>
  );
}