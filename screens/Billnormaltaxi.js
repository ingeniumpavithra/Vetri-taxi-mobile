import React,{useContext} from "react";
import axios from 'axios';
import { StyleSheet, Text, View,} from "react-native"
import Card from '../components/CalCard'
import { useNavigation } from "@react-navigation/native";
import Button from '../components/button'
import {NormalContext} from "../context/NormalContextProvider";
import authHeader from "../assets/header/auth-header";

const Billnormaltrip = () => {  
  
  let car_id;
  if(localStorage.length){
      const user_val = localStorage.getItem('user');
      const user = JSON.parse(user_val);
      car_id = user.user.id; 
  }


//useNavigation   
    const navigation = useNavigation();
 //contextprovider   
const {
        normalData,
      } = useContext(NormalContext);

      let result = normalData.distance_travelled * 12;

      normalData.distance_travelled >= 300 ? result = result + normalData.driver_beta + normalData.waiting_chargeamount : result = result + normalData.waiting_chargeamount;

      let data = {
        car_id: car_id,
        from: normalData.from,
        to: normalData.to,
        cus_name: normalData.customer_name,
        mobile: normalData.phone,
        distance: normalData.distance_travelled,
        w_hour: normalData.waiting_hour,
        w_charge: normalData.waiting_chargeamount,
        driver_batta: normalData.driver_beta,
        total: result
      }

      async function addBill() {
        console.log(data);
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/auth/taxi-trip",data, { headers: authHeader() });
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
                <Card>
                  
                <Text style={{ color: '#223e4b', fontSize: 28, marginBottom: 16, alignItems: 'center', fontWeight: 'bold', }}>
                Traffic Calculation 
               </Text> 
              <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16, }}>
                  Distance Travelled: 
                  {normalData.distance_travelled * 12 || 0}
              </Text>
              <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
                  Waiting Hours: 
                  {normalData.waiting_hour || 0} 
              </Text>
              <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
                  Waiting Charge: 
                  {normalData.waiting_chargeamount || 0}
              </Text>
              {normalData.distance_travelled >=300 &&
                <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
                    Driver Beta: 
                    {normalData.driver_beta || 0}
                    
                </Text>
                }
              <Text style={{ color: '#fb9403', fontSize: 28, marginBottom: 16, fontWeight: 'bold', }}>
                 Total : {result}
              </Text>
             
              </Card>
              </View>
              <Button label='Submit' onPress={addBill}/>
        
        
            </View>
        
          );
        };
        
        export default Billnormaltrip;
        