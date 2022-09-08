import React, { useEffect, useContext ,useState,createContext } from 'react';

export const MainUserContext = createContext();
export const MainUserUpdateContext = createContext();

export const useMainContext = () => {
  return useContext(MainUserContext);
}
export const useMainUpdateContext = () => {
  return useContext(MainUserUpdateContext);
}

export const MainUserProvider = ({children}) => {
  const [contact, setContact] = useState([
    {
      id: 1,
      name: 'Marcel Jones ',
      username: 'Marcel.Jones$1 ',
      email: "atuny0@sohu.com",
      phone: "+63 791 675 8914",
      show: false,
      online: true,
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
    },
    {
      id: 12,
      name: 'Marcel Jones ',
      username: 'f.Jones$1 ',
      email: "f@sohu.com",
      phone: "+63 791 675 8914",
      show: false,
      online: true,
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 11,
      name: 's Jones ',
      username: 's.Jones$1 ',
      email: "atuny0@sohu.com",
      phone: "+63 791 675 8914",
      show: false,
      online: true,
      image: "https://i.pinimg.com/originals/cd/84/a9/cd84a90ebdf252b443f0d8c8da4d3318.jpg",
    },
    {
      id: 2,
      name: 'Sheldon Quigley ',
      username: 'Sheldon.Quigley#1 ',
      "email": "hbingley1@plala.or.jp",
      "phone": "+7 813 117 7139",
      show: false,
      online: false,
      image: "https://lh3.googleusercontent.com/nB99Cnn0mXfp6EMiDflAL9DnV3ckcta0czwG_wF6whkzhE5D-SEz8-dZ475X2UfUTuR9pdgqPbJUTcAUQqhCGDwqk8OgQQbpYI0NwA=w600",
    },
    {
      id: 83,
      name: 'Leonard Leach ',
      username: 'Leach.Leonard#21 ',
      "email": "rshawe2@51.la",
      "phone": "+63 739 292 7942",
      show: true,
      online: true,
      image: "https://play-lh.googleusercontent.com/MtAnwAXFymTtu3_8rRNw78aPpOfFHHUPuTa2aj3jxAiCD4xGL7g4fZAS0sRVdRSrcwhf",
    },
    {
      id: 53,
      name: 'eeee Leach ',
      username: 'seeee.Leonard#21 ',
      "email": "rshawe2@51.la",
      "phone": "+63 739 292 7942",
      show: true,
      online: true,
      image: "https://exploringbits.com/wp-content/uploads/2022/01/cute-pfp-4.jpg?ezimgfmt=rs:670x673/rscb3/ng:webp/ngcb3",
    },
    {
      id: 31,
      name: 'aaaaaa Leach ',
      username: 'aaaa.Leonard#21 ',
      "email": "rsaaaahawe2@51.la",
      "phone": "+63 739 292 7942",
      show: true,
      online: true,
      image: "https://images.unsplash.com/photo-1584999734482-0361aecad844?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500",
    }, 
    {
      id: 23,
      name: 'uuuuuuuu Leach ',
      username: 'Luuuueach.Leonard#21 ',
      "email": "rshawe2@51.la",
      "phone": "+63 739 292 7942",
      show: true,
      online: true,
      image: "https://images.unsplash.com/photo-1584999734482-0361aecad844?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500",
    },
  ]);
  const [talkingTo, setTalkingTo] = useState({
    id: 1,
    name: 'Marcel Jones ',
    username: 'Marcel.Jones$1 ',
    email: "atuny0@sohu.com",
    phone: "+63 791 675 8914",
    show: false,
    online: true,
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
  }
  );
  const [mainContext, setMainContext] = useState(
    {
      contact: contact,
      talkingTo: talkingTo, 
      server: talkingTo,
      serverRoom: "",
      history: []
    }
  );
  
  function changeUserMainContext(value) {setMainContext(value);}

  return (
    <MainUserContext.Provider value={mainContext}>
      <MainUserUpdateContext.Provider value={(value)=>changeUserMainContext(value)}>
        {children}
      </MainUserUpdateContext.Provider>
    </MainUserContext.Provider>
  )
}