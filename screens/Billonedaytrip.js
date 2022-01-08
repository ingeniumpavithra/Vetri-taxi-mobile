import React,{useContext} from "react";
import { StyleSheet, Text, View,} from "react-native"
import Card from '../components/CalCard'
import axios from 'axios';
import Button from '../components/button'
import authHeader from "../assets/header/auth-header";
import {BillingContext} from "../context/BillingContextProvider";
import { useNavigation } from "@react-navigation/native";

  
const Billonedaytrip = () => {   
  const navigation = useNavigation();

  let car_id='';
  if(localStorage.length){
      const user_val = localStorage.getItem('user');
      const user = JSON.parse(user_val);
      car_id = user.user.id; 
  }

  const {
    billingData,
  } = useContext(BillingContext);
  
  if(billingData.discount===''){
    billingData.discount=0;
  }
  if(billingData.tolls===''){
    billingData.tolls=0;
  }
  if(billingData.extra_amt===''){
    billingData.extra_amt=0;
  }

 
    let totalPrice = billingData.initial_payment + (billingData.distance_travelled * 7);
    let calc = 0;
    billingData.discount  >0 ? calc = (parseFloat(billingData.tolls) + parseFloat(billingData.extra_amt))-parseFloat(billingData.discount) : calc = parseFloat(billingData.tolls) + parseFloat(billingData.extra_amt);
      const result = totalPrice + calc;

  let data = {
    car_id : car_id,
    cus_name: billingData.customer_name,
    mobile: billingData.phone_number,
    distance: billingData.distance_travelled,
    tolls: billingData.tolls,
    extra: billingData.extra,
    extra_amt: billingData.extra_amt,
    discount: billingData.discount,
    total: totalPrice
   
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
          Initial payment : 
          {billingData.initial_payment || 0}
      </Text>
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
          Price / km :  
         {7 || 0}
      </Text>
      
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
         Total KM Price: 
          {billingData.distance_travelled * 7 || 0}
      </Text>
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
         Toll Price: 
          {billingData.tolls|| 0}
      </Text>
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
         Extra Amount: 
          {billingData.extra_amt  || 0}
      </Text>
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
          Discount :
           {billingData.discount || 0}
      </Text>
      <Text style={{ color: '#fb9403', fontSize: 28, marginBottom: 16, fontWeight: 'bold', }}>
         Total :
         {result }
      </Text>
     
      </Card>
      </View>
      <Button label='Submit' onPress={addBill}/>


    </View>

  );
};

export default Billonedaytrip;

