import React,{useContext} from "react";
import { StyleSheet, Text, View,} from "react-native"
import Card from '../components/CalCard'
import { useNavigation } from "@react-navigation/native";
import Button from '../components/button'
import { LocalContext } from "../context/LocalContextProvider";

const Billlocaltrip = () => {   

    //useNavigation   
    const navigation = useNavigation();
    const {
        localData,
        handleChangeBilling
      } = useContext(LocalContext);
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
                  Trip KM: 
                  {localData.triphr || 0}
              </Text>
              <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
                 Trip Payment: 
                 {localData.tripkms * 10 || 0}
              </Text>
              <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
                  Extra kms: 
                  {localData.Xtrakm || 0}
              </Text>
              
                <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16,}}>
                   Extra kms charge: 
                   
                   {localData.Xtrakm * 12 || 0}
                </Text>
          
              <Text style={{ color: '#fb9403', fontSize: 28, marginBottom: 16, fontWeight: 'bold', }}>
                 Total :
              </Text>
             
              </Card>
              </View>
              <Button label='Submit' />
        
        
            </View>
        
          );
        };
        
        export default Billlocaltrip;