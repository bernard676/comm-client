import { useMainContext } from '../contexts/MainUserContext';

export default function ChatHeader() {
  const userInfoContext = useMainContext();

  return (
    <div className="sticky top-0">
      <div className="sticky top-0 text-white flex items-center bg-[#36393f] border-b border-gray-500 p-2">
        <img className="rounded-full w-10 h-10" src={userInfoContext?.talkingTo?.image} />
        <div className="pl-2">
          <div className="font-semibold">
            <a className="hover:underline" href="#">{userInfoContext?.talkingTo?.username}</a>
          </div>
          <div className="text-xs"><p>{userInfoContext?.talkingTo?.online == true ? "online" : "away"}</p></div>
        </div>
      </div>
    </div>
  )
}