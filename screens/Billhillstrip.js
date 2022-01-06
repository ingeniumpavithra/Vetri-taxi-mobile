import React,{useContext} from "react";
import { StyleSheet, Text, View,} from "react-native"
import Card from '../components/CalCard'
import axios from 'axios';
import Button from '../components/button'
import authHeader from "../assets/header/auth-header";
import {HillsContext} from "../context/HillsContextProvider";
import { useNavigation } from "@react-navigation/native";

  
const Billhillstrip = () => {   
  const navigation = useNavigation();

  let car_id;
  if(localStorage.length){
      const user_val = localStorage.getItem('user');
      const user = JSON.parse(user_val);
      car_id = user.user.id; 
  }

  const {
    billingDatas,
  } = useContext(HillsContext);

  const batta = billingDatas.trip_days * 300;
  let pay, result = 0;

  if(billingDatas.tripto){
    billingDatas.tripto==='Yercaud'? pay=3000 :billingDatas.tripto==='Kolli Hills'? pay=3500 :billingDatas.tripto==='Kodaikanal'? pay=6000 :billingDatas.tripto==='Ooty'? pay=6000 :billingDatas.tripto==='Palani'? pay=3000 : pay=0
    }

    batta>0 ? result = pay + batta : result = pay;

  let data = {
    car_id: car_id,
    trip_from: billingDatas.tripfrom,
    trip_to: billingDatas.tripto,
    payment: pay,
    cus_name: billingDatas.customer_name,
    mobile: billingDatas.phone_number,
    members: billingDatas.members,
    trip_days: billingDatas.trip_days,
    driver_batta: batta,
    total: result
  }

   async function addBill() {
    
    try{
        const response = await axios.post("http://127.0.0.1:8000/api/auth/add-day-trip",data, { headers: authHeader() });
        if(response){
          alert(response.data.message);
          navigation.navigate("Home");
        }
     
    }catch(e){
      console.log(e);
    }
  }
     
  return (
<View
         style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            
    <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%', justifyContent: 'center'}}>
        <Card initPayment={""} pricePerKm={""} totalPrice={""}>
          
        <Text style={{ color: '#223e4b', fontSize: 28, marginBottom: 16, alignItems: 'center', fontWeight: 'bold', }}>
        Traffic Calculation 
       </Text> 
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16, }}>
          Mobile : 
          {billingDatas.phone_number }
      </Text>
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16, }}>
          Trip payment : 
          {pay || 0}
      </Text>

      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
          Days :  
         {billingDatas.trip_days || 0}
      </Text>
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
          Driver Batta(Rs):  
          {batta || 0}
      </Text>
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
         Total : 
          {result || 0}
      </Text>
      
      </Card>
      </View>
      <Button label='Submit' onPress={addBill}/>

    </View>

  );
};

export default Billhillstrip;

