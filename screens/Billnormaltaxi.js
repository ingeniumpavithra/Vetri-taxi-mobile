import React,{useContext} from "react";
import { StyleSheet, Text, View,} from "react-native"
import Card from '../components/CalCard'
import { useNavigation } from "@react-navigation/native";
import Button from '../components/button'
import {NormalContext} from "../context/NormalContextProvider";

const Billnormaltrip = () => {   

    //useNavigation   
    const navigation = useNavigation();
 //contextprovider   
const {
        normalData,
      } = useContext(NormalContext);
  //waiting charge    

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
                 Total :
              </Text>
             
              </Card>
              </View>
              <Button label='Submit' />
        
        
            </View>
        
          );
        };
        
        export default Billnormaltrip;
        