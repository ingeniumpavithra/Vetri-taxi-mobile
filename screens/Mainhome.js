import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, View, Button, Text} from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { IconButton, Colors } from 'react-native-paper';
import Card from '../components/CalCard'

   
const Mainhome = () => {
  const navigation = useNavigation();
  return (
    <View 
      style={{ 
        paddingHorizontal: 30, 
        paddingVertical: 20,
        marginBottom: 20, 
        width: '110%',
        display:'flex', 
        flexDirection:'row', 
        flexWrap:'wrap',
        alignItems: 'center',
      }}
    >
      
      <Card>
         <Text style={{ color: '#223e4b', fontSize: 12, marginHorizontal: 40}}>
            LOGIN
      </Text>
      <IconButton
        icon="account"
        color={Colors.yellow700}
        size={75}
        onPress={() => console.log('Pressed')}
       />
       <Button
        onPress={() => navigation.navigate("Driverlogin")}
        title="Driver Login"
       color="#1D8348" 
       />  
       
   </Card>

   <Card> 
     <Text style={{ color: '#223e4b', fontSize: 12, marginHorizontal: 40}}>
            BILLING
      </Text>
      <IconButton
        icon="newspaper"
        color={Colors.yellow700}
        size={75}
       
       />
       <Button
        onPress={() => navigation.navigate("Home")}
        title="Billing"
       color="#1D8348" 
       />  
       
   </Card>

   <Card> 
     <Text style={{ color: '#223e4b', fontSize: 12, marginHorizontal: 40}}>
            PETROL
      </Text>
      <IconButton
        icon="fuel"
        color={Colors.yellow700}
        size={75}
       
       />
       <Button
        onPress={() => navigation.navigate("petrol")}
        title="PETROL"
       color="#1D8348" 
       />  
       
   </Card>

   
   <Card> 
     <Text style={{ color: '#223e4b', fontSize: 12, marginHorizontal: 40}}>
            LOGOUT
      </Text>
      <IconButton
        icon="logout"
        color={Colors.yellow700}
        size={75}
       
       />
       <Button
        onPress={() => navigation.navigate("Login")}
        title="LOGOUT"
        color="#1D8348" 
       />  
       
   </Card>

   

    </View>
);
};


export default Mainhome;

const styles = StyleSheet.create({

  
});
