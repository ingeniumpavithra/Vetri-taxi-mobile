import React,{ createContext, useState, useContext, useMemo }   from "react";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export const BillingContext = createContext(null);

export const BillingContextProvider = (props) => {

  const [billingData,setBillingData] = useState();

  const handleChangeBilling = (value,name) => {
    setBillingData(billingData => ({...billingData,[name]:value}));
  } 
    return (
      <BillingContext.Provider value={
        billingData,
        setBillingData,
        handleChangeBilling
      }>
        {props.children}
      </BillingContext.Provider>
    )
}