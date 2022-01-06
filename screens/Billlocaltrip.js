import React,{useContext} from "react";
import { StyleSheet, Text, View,} from "react-native"
import Card from '../components/CalCard'
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import Button from '../components/button'
import { LocalContext } from "../context/LocalContextProvider";
import authHeader from "../assets/header/auth-header";


const Billlocaltrip = () => {   
  let car_id;
  if(localStorage.length){
      const user_val = localStorage.getItem('user');
      const user = JSON.parse(user_val);
      car_id = user.user.id; 
  }

    //useNavigation   
    const navigation = useNavigation();
    const {
        localData,
        handleChangeBilling
      } = useContext(LocalContext);

      const xtracharge = localData.xtrakm * 12;
      let result = 0;

      xtracharge > 0 ? result = localData.tripCharge + xtracharge : result = localData.tripCharge;

      let data = {
        car_id: car_id,
        triphr: localData.triphr,
        tripkms: localData.tripkms,
        payment: localData.tripCharge,
        cus_name: localData.name,
        mobile: localData.phone,
        xtrakm: localData.xtrakm,
        xtracharge: xtracharge,
        total: result
    }

      async function addBill() {
        console.log(data);
        try{
          const response = await axios.post("http://127.0.0.1:8000/api/auth/local-trip", data, { headers: authHeader() });
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
                  Trip Hour : 
                  {localData.triphr || 0}
              </Text>
              <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16, }}>
                  Allowed Distance(km) : 
                  {localData.tripkms || 0}
              </Text>
              <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
                 Trip Payment : 
                 {localData.tripCharge || 0}
              </Text>
              <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
                  Extra kms : 
                  {localData.xtrakm || 0}
              </Text>
              
                <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
                   Extra kms charge : 
                   
                   {localData.xtrakm * 12 || 0}
                </Text>
          
              <Text style={{ color: '#fb9403', fontSize: 28, marginBottom: 16, fontWeight: 'bold', }}>
                 Total : { result }
              </Text>
             
              </Card>
              </View>
              <Button label='Submit' onPress={addBill}/>
        
        
            </View>
        
          );
        };
        
        export default Billlocaltrip;