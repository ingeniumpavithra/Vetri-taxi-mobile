import React,{useContext} from "react";
import { StyleSheet, Text, View} from "react-native"
import Card from '../components/CalCard'
import axios from 'axios';
import Button from '../components/button'
import {BillingContext} from "../context/BillingContextProvider";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigation } from "@react-navigation/native";
import API_URL from "./env";

  
const Billonedaytrip = () => {   
  const navigation = useNavigation();
  
  const {
    billingData,
  } = useContext(BillingContext);
  const {
    AuthData,
  } = useContext(AuthContext);
  
  if(billingData.discount===''){
    billingData.discount=0;
  }
  if(billingData.tolls===''){
    billingData.tolls=0;
  }
  if(billingData.extra_amt===''){
    billingData.extra_amt=0;
  }

 let car_id ='';
    let totalPrice = billingData.initial_payment + (billingData.distance_travelled * 7);
    let calc = 0;
    billingData.discount  >0 ? calc = (parseFloat(billingData.tolls) + parseFloat(billingData.extra_amt))-parseFloat(billingData.discount) : calc = parseFloat(billingData.tolls) + parseFloat(billingData.extra_amt);
      const result = totalPrice + calc;

  let data = {
    car_id : AuthData.car_id,
    cus_name: billingData.customer_name,
    mobile: billingData.phone_number,
    distance: billingData.distance_travelled,
    tolls: billingData.tolls,
    extra: billingData.extra,
    extra_amt: billingData.extra_amt,
    discount: billingData.discount,
      xtra_desc: billingData.extra,
      xtracharge: billingData.extra_amt,
      tollcharge: billingData.tolls,
    total: result
   
  }

  async function addBill() {
    try{
      const response = await axios.post(`${API_URL}/add-day-trip`,data);
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
      
      { billingData.extra_amt >0 ? ( <View>
        <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
         Extra Amount: 
          {billingData.extra_amt}
      </Text>
              </View>):(<View></View>) }
      { billingData.tolls >0 ? ( <View>
        <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
         Toll Price: 
          {billingData.tolls}
      </Text>
          </View>):(<View></View>) }
      { billingData.discount >0 ? ( <View>
            
          <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,fontWeight: 'bold',}}>
          Subtotal :
          {totalPrice + parseFloat(billingData.tolls) + parseFloat(billingData.extra_amt)}
      </Text>
          
          <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
          Discount :
           {billingData.discount}
      </Text>
          </View>):(<View></View>) }
      
      
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

