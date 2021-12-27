import React,{useState,useEffect} from 'react'
import { View ,Text} from 'react-native'
import { useFormik } from 'formik'
import { useNavigation } from "@react-navigation/native";
import Input from '../components/input'
import Button from '../components/button'



export default function onedaytrip() {
  
const [data, setData] = useState({
        customer_name:'',
        mobile_no:'',
        initial_payment:1800,
        distance_travel:'',
      });
      
const handleChange = (e,name) => {
      setData(data => ({
        ...data,
        [name]:e.target.value
      }));
} 
            


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
          value={data.customer_name}
          onChange = {(e)=>handleChange(e,'customer_name')}

        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='phone'
          placeholder='Phone number'
          autoCapitalize='none'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChange = {(e)=>handleChange(e,'Phonenumber')}
           value={data.Phonenumber}
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
          value={data.initial_payment}
        />
     </View>
       <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='gauge'
          placeholder='Distance Allowed'
          autoCapitalize='none'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          disabled={true}
          onChange = {(e)=>handleChange(e,'distance_travel')}
          value={data.distance_travel}
        />
      </View>
      
     
      <Button  label='Next'
       onPress={() => navigation.navigate("Billonedaytrip")}

        />
     
        </View>
    )
}
