import React,{useState, useContext} from 'react'
import { View ,Text , form, TextInput} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Input from '../components/input'
import Button from '../components/button'
import { BillingContext } from "../context/BillingContextProvider";

export default function onedaytrip() {
  
  const {
    billingData,
    handleChangeBilling
  } = useContext(BillingContext);
  const navigation = useNavigation();
      return (
        <View
         style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            
            <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
            ONE DAY TRIP
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='user'
          placeholder='Customer Name'
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
          icon='phone'
          placeholder='Phone number'
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
          placeholder='Initital Payment'
          autoCapitalize='none'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          value = {billingData.initial_payment}
          onChangeText={value => handleChangeBilling(value,'initial_payment')}
        />
     </View>
       <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='gauge'
          placeholder='Distance Travelled'
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
       onPress={() => navigation.navigate("Billonedaytrip")}

        />
     
        </View>
    )
}
