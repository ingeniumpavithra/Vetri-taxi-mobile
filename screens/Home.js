import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, View, Button, Image } from "react-native";

const Separator = () => (
  <View style={styles.separator} />
);


const Home = () => {
  const navigation = useNavigation();
  

  return (
    <SafeAreaView style={styles.container}>
       
      <Button
        onPress={() => navigation.navigate("Second")}
        title="One Day Trip"
       color="#ffc107" 
       />  
   <Separator />

   <Button
        onPress={() => navigation.navigate("Second")}
        title="Normal Taxi"
       color="#841584" 
       />  
   <Separator />
   <Button
        onPress={() => navigation.navigate("Second")}
        title="Local Trip"
       color="#841584" 
       />  
   <Separator />
   <Button
        onPress={() => navigation.navigate("Second")}
        title="Hills Trip"
       color="#841584" 
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
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    
  },
});
