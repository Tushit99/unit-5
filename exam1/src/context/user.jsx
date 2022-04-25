import React, { createContext, useState } from "react";


const UserContext = createContext(undefined);    
function UserProvider({ children }) {    
  const [total, settotal] = useState({   
    terminated : 0 ,
    promoted: 0,
    total_new : 0,
  });

const handlecount = (key)=>{
    var m = {};
    m[key] = total[key]+1;
   settotal({
        ...total,
        ...m
    })
}

  return (
    <UserContext.Provider value={{total , handlecount}}>
        {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };