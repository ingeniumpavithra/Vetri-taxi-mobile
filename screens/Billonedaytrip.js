import React,{useContext} from "react";
import { StyleSheet, Text, View,} from "react-native"
import Card from '../components/CalCard'
import { useFormik } from 'formik'
import Button from '../components/button'

import {BillingContext} from "../context/BillingContextProvider";

  
const Billonedaytrip = () => {   

  const {
    billingData,
  } = useContext(BillingContext);

     
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
          Initital payment : 
          {billingData.initial_payment || 0}
      </Text>
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
          Price Per KM : 
         {billingData.distance_allowed * 7 || 0}
      </Text>
      <Text style={{ color: '#fb9403', fontSize: 28, marginBottom: 16, fontWeight: 'bold', }}>
         Total :
         {billingData.initial_payment + billingData.distance_allowed * 7}
      </Text>
     
      </Card>
      </View>
      <Button label='Submit'/>

    </View>

  );
};

export default Billonedaytrip;

