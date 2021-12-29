import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, View, Button, Image} from "react-native";
const Separator = () => (
  <View style={styles.separator} />
);


const Home = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
        
         <Button
        
        onPress={() => navigation.navigate("Login")}
        title="Log in"
       color="hotpink" 
       /> 
       <Separator />
      <Button
        onPress={() => navigation.navigate("onedaytrip")}
        title="One Day Trip"
       color="#ffc107" 
       />  
     
   <Separator />

   <Button
        onPress={() => navigation.navigate("Normaltaxi")}
        title="Normal Taxi"
       color="#ffc107" 
       />  
   <Separator />
   <Button
        onPress={() => navigation.navigate("localTrip")}
        title="Local Trip"
       color="#ffc107" 
       />  
   <Separator />
   <Button
        onPress={() => navigation.navigate("Hillstrip")}
        title="Hills Trip"
       color="#ffc107" 
       />  
   <Separator />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    backgroundColor: '#ffc107',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    
  },
});
