import React,{ createContext, useState, useContext, useMemo, useEffect }   from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {

    const [AuthData,setAuthData] = useState({
        car_id:'',
        token:'',
        header:'',
      });
      useEffect(async()=> {
        try {
            const jsonValue = await AsyncStorage.getItem('user');
            const user_val = JSON.parse(jsonValue);
            if(user_val && user_val.access_token){
              setAuthData(AuthData => ({...AuthData, ['car_id']:user_val.user.id,['token']:user_val.access_token,['header']:'Authorization: Bearer ' + user_val.access_token}))
            }
          } catch(e) {
            console.log(e)
          }
       },[])
        


    return (
      <AuthContext.Provider value={{
        AuthData,
      }}>
        {props.children}
      </AuthContext.Provider>
    )
}