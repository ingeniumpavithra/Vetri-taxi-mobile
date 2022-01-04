import React, { useState } from 'react'
import { View, Text } from 'react-native'

import Input from '../components/input'
import Button from '../components/button'

export default function LocalTrip() {
  const [error, setError] = useState('');
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [km, setKm] = useState("");
  const [hr, setHr] = useState("");

  let result = 12 * km;
  let w_charge = 0;
  let d_batta = 0;

  km >= 300 ? d_batta = 300 : d_batta = 0;


  const isValidForm = () => {
    if (!isValidObjField(start, end, name, phone, km, hr))
      return updateError('Required all fields !', setError);
    if (!start.trim() || start.length < 4)
      return updateError('Invalid start place !', setError);
    if (!end.trim() || end.length < 4)
      return updateError('Invalid end place !', setError);
    if (!name.trim() || name.length < 4)
      return updateError('Invalid username !', setError);
    if (!phone.trim() || phone.length != 10)
      return updateError('Phone number invalid!', setError);
    if (!km.trim())
      return updateError('km required !', setError);
    return true

  }

  const isValidObjField = (start, end, name, phone, km, hr) => {

    return start.trim() && end.trim() && name.trim() && phone.trim && km.trim && hr.trim
  }

  const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {
      stateUpdater('');
    }, 2600);
  }

  function subHandler(e) {

    if (isValidForm()) {


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
      {error ? <Text style={{ color: "red", paddingBottom: 12, fontSize: 18 }} >{error}</Text> : null}
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
          autoCompleteType='tel'
          keyboardType={'numeric'}
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
          autoCompleteType='none'
          keyboardType={'numeric'}
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
          autoCompleteType='none'
          keyboardType={'numeric'}
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
          onChangeText={setHr}
          
          value={hr}
         
        />
      </View>
      <Button label='Next' onPress={subHandler} />

    </View>
  )
}
