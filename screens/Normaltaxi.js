import React,{useState} from 'react'
import { View ,Text} from 'react-native'

import Input from '../components/input'
import Button from '../components/button'

export default function LocalTrip() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [km, setKm] = useState("");
  const [hr, setHr] = useState("");

  let result = 12 * km;
  let w_charge = 0 ;
  let d_batta = 0 ;

  km>=300 ? d_batta = 300 : d_batta = 0 ;

  function subHandler(e) {
      e.preventDefault();
      let data = {
          from: start,
          to: end,
          cus_name: name,
          mobile: phone,
          distance: km,
          w_hour: hr,
          w_charge: w_charge,
          driver_batta: d_batta,
          total: result
        }
      console.log(JSON.stringify(data))
      // async function addbill(){
      //     const response = await axios.post("http://127.0.0.1:8000/api/auth/taxi-trip",data);
      //     if(response){
      //       alert(response.data.message);
      //     }else{
      //       alert("Something went wrong..!");
      //     }
      //   }
      //  addbill();

          setStart("")
          setEnd("")
          setName("")
          setPhone("")
          setKm("")
          setHr("")
  }

    return (
        <View
         style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            
            <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
            NORMAL TAXI
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='arrow-left'
          placeholder='From'
          autoCapitalize='none'
          autoCompleteType='From'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={setStart}
         
          value={start}
        
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='arrow-right'
          placeholder='To'
          autoCapitalize='none'
          autoCompleteType='To'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={setEnd}
        
          value={end}
         
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='user'
          placeholder='Customer Name'
          autoCapitalize='none'
          autoCompleteType='customername'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={setName}
          
          value={name}
         
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='phone'
          placeholder='phone number'
          autoCapitalize='none'
          autoCompleteType='phonenumber'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
         
          onChangeText={setPhone}
         
          value={phone}
        
        />
      </View>
      
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
       
          icon='gauge'
          placeholder='Distance Travelled'
          autoCapitalize='none'
          autoCompleteType='distancetravelled'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={setKm}
         
          value={km}
        
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
       
          icon='compass'
          placeholder='Waiting Charge'
          autoCapitalize='none'
          autoCompleteType='waitingcharge'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={setHr}
          
          value={hr}
          
        />
      </View>
      <Button label='Next' onPress={subHandler} />

        </View>
    )
}
