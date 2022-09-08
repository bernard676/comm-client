export default function YouReceived({ from, message }) {
  return (
    <div className="flex items-center mb-4">
            <div className="flex-none flex flex-col items-center space-y-1 mr-4">
              <img className="rounded-full w-10 h-10" src={from?.image} />
              <a href="#" className="block text-xs hover:underline">{from?.name}</a>
            </div>
            <div className="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
              <div><p>{message}</p></div>

              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
            </div>
          </div>
  )
}