import React,{ createContext, useState, useContext, useMemo, useEffect }   from "react";

export const NormalContext = createContext(null);

export const NormalContextProvider = (props) => {

  const [normalData,setNormalData] = useState({
    from:'',
    to:'',
    customer_name:'',
    phone:'',
    distance_travelled:'',
    waiting_hour:'',
  });

  const handleChangeBilling = (value,name) => {
    setNormalData(normalData => ({...normalData,[name]:value}));
  } 

  useEffect(()=> {
   // console.log(billingData,"billingData");
  },[normalData])
    return (
      <NormalContext.Provider value={{
        normalData,
        setNormalData,
        handleChangeBilling
      }}>
        {props.children}
      </NormalContext.Provider>
    )
}