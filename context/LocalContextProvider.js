import React,{ createContext, useState, useContext, useMemo, useEffect }   from "react";

export const LocalContext = createContext(null);

export const LocalContextProvider = (props) => {

  const [localData,setLocalData] = useState({
    name:'',
    phone:'',
    trip_km:'',
    tripkms:'',
    xtrakm:'',

  });

  const handleChangeBilling = (value,name) => {
    setLocalData(localData => ({...localData,[name]:value}));
  } 

  useEffect(()=> {
   console.log(localData,"localData");
  },[localData])
    return (
      <LocalContext.Provider value={{
        localData,
        setLocalData,
        handleChangeBilling
      }}>
        {props.children}
      </LocalContext.Provider>
    )
}