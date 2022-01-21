import React,{useState, useContext} from 'react'

import { View ,Text ,ScrollView} from 'react-native'

import { useNavigation } from "@react-navigation/native";
import Input from '../components/input'
import Button from '../components/button'
import {HeaderIconButton} from '../components/HeaderIconButton';
import { BillingContext } from "../context/BillingContextProvider";

export default function petrol() { ({navigation}) 
const [error, setError] = useState('');
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
       
          <HeaderIconButton
            name={'logout'}
            onPress={() => navigation.navigate("Login")}
            
          />
          
       
      ),
    });
  }, [navigation]);


  const {
    billingData,
    handleChangeBilling
  } = useContext(BillingContext);

  

  const navigation = useNavigation();
      return (
        <ScrollView
        style={{
           flex: 1,
           backgroundColor: '#fff',
         }}>
        <View
         style={{
            alignItems: 'center',
          }}>
            
            <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 10, paddingVertical: 25 }}>
            PETROL REPORT
      </Text>
      {error ? <Text style={{ color: "red", paddingBottom: 12, fontSize: 18 }} >{error}</Text> : null}
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='gauge'
          placeholder='Kilo Meter'
          autoCapitalize='none'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          value = {billingData.customer_name}
          onChangeText={value => handleChangeBilling(value,'customer_name')}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='water'
          placeholder='Liter'
          autoCapitalize='none'
          keyboardType='numeric'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          value = {billingData.phone_number}
          onChangeText={value => handleChangeBilling(value,'phone_number')}
        />
      </View>
      
       <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='briefcase'
          placeholder='Price'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          value = {billingData.distance_travelled}
          keyboardType = 'numeric'
          onChangeText={value => handleChangeBilling(value,'distance_travelled')}
        />
      </View>
    
    
     
      <Button  label='Next'
       onPress={() =>  { if(isValidForm()){
        navigation.navigate("Billonedaytrip")
}
}} 

        />
     
        </View>
        </ScrollView>
    )
}
