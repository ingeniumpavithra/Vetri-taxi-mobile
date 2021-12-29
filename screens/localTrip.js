import React ,{useState}from 'react'
import { View, Text ,Picker} from 'react-native'


import Input from '../components/input'
import Button from '../components/button'

export default function LocalTrip() {
  
  
  const [triphr, setTriphr] = useState("");
  const [tripkms, setTripkms] = useState("");
  const [name, setName] = useState("");
  const [payment, setPayment] = useState("");
  const [phone, setPhone] = useState("");
  const [xtrakm, setXtrakm] = useState(0);
  let xtracharge = 0;
  xtracharge = 12 * xtrakm;
  let result = 0;
  let km = 0;
  let pay; 
  function setkm(triphr) {
    triphr === '1' ? km = 10 : triphr === '2' ? km = 20 : km = 0
    setTripkms(km)
    if (km >= 0) {
        km === 10 ? pay = 250 : km === 20 ? pay = 500 : pay = 0
        setPayment(pay)
    }
}
xtracharge > 0 ? result = payment + xtracharge : result = payment;


function subHandler(e) {
  e.preventDefault();
  let data = {
      triphr: triphr,
      tripkms: tripkms,
      payment: payment,
      cus_name: name,
      mobile: phone,
      xtrakm: xtrakm,
      xtracharge: xtracharge,
      total: result
  }
  console.log(JSON.stringify(data))
  // async function addbill() {
  //     const response = await axios.post("http://127.0.0.1:8000/api/auth/local-trip", data);
  //     if (response) {
  //         alert(response.data.message);
  //     } else {
  //         alert("Something went wrong..!");
  //     }
  // }
  //addbill();

  setTriphr("")
  setName("")
  setPayment("")
  setPhone("")
  setXtrakm(0)
  setTripkms("")
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
        Local Trip
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='user'
          placeholder='Customer Name'
          autoCapitalize='none'
          autoCompleteType='username'
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
          placeholder='Phone number'
          autoCapitalize='none'
          autoCompleteType='username'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={setPhone}
         
          value={phone}
          
        />
      </View>
      <View style={{ paddingHorizontal: 32,paddingVertical:0, marginBottom: 16,   width: '85%',borderWidth: 0.3,borderRadius:8}}>

     <Picker
       selectedValue = {triphr}
       onValueChange={(itemValue) =>[ setTriphr(itemValue), setkm(itemValue)]}

      
              
      >
         <Picker.Item label="Trip Hour" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
      </Picker>
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='gauge'
          placeholder='Kms Allowed'
          autoCapitalize='none'
          autoCompleteType='username'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          disabled
          value={tripkms}
        />
      </View>

      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input

          icon='arrow-with-circle-up'
          placeholder='Extra Kms'
          autoCapitalize='none'
          autoCompleteType='username'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={setXtrakm}
          
          value={xtrakm}
        />
      </View>
      <Button label='Next' onPress={subHandler} />

    </View>
  )
}
