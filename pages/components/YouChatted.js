import { useUser } from '@auth0/nextjs-auth0';

export default function YouChatted({message}) {
  const { user, error, isLoading } = useUser();
  return (
    <div className="flex items-center flex-row-reverse mb-4">
    <div className="flex-none flex flex-col items-center space-y-1 ml-4">
      <img className="rounded-full w-10 h-10" src={user?.picture} />
      <a href="#" className="block text-xs hover:underline">{user?.username}</a>
    </div>
    <div className="flex-1 bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2 relative">
      <p>{message}</p>
      <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100"></div>
    </div>
  </div>
  )
}