import React,{useState, useContext} from 'react'
import { View, Text, Picker } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { NormalContext } from "../context/NormalContextProvider";
import Input from '../components/input'
import Button from '../components/button'

export default function NormalTrip() {
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

  const navigation = useNavigation();
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

  const {
    normalData,
    handleChangeBilling
  } = useContext(NormalContext);
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
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          value = {normalData.from}
          onChangeText={value => handleChangeBilling(value,'from')}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='arrow-right'
          placeholder='To'
          autoCapitalize='none'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          value = {normalData.to}
          onChangeText={value => handleChangeBilling(value,'to')}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='user'
          placeholder='Customer Name'
          autoCapitalize='none'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          value = {normalData.customer_name}
          onChangeText={value => handleChangeBilling(value,'customer_name')}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='phone'
          placeholder='phone number'
          autoCapitalize='none'
          keyboardType={'numeric'}
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          value = {normalData.phone}
          onChangeText={value => handleChangeBilling(value,'phone')}

        />

      </View>

      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input

          icon='gauge'
          placeholder='Distance Travelled'
          autoCapitalize='none'
          keyboardType={'numeric'}
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          value = {normalData.distance_travelled}
          onChangeText={value => handleChangeBilling(value,'distance_travelled')}

        />
      </View>
      <View style={{ paddingHorizontal: 32, paddingVertical: 0, marginBottom: 16, width: '85%', borderWidth: 0.3, borderRadius: 8 }}>

                <Picker
                   value = {normalData.waiting_hour}
                   onValueChange={value => handleChangeBilling(value,'waiting_hour')}

                >
                    <Picker.Item label="waiting_hour" value = "0" />
                    <Picker.Item label="1" value =  "1"/>
                    <Picker.Item label="2" value =  "2"/>
                    <Picker.Item label="3" value =  "3"/>
                    <Picker.Item label="4" value =  "4"/>
                    <Picker.Item label="5" value =  "5"/>
                </Picker>
            </View>
      <Button label='Next'      
       onPress={() => navigation.navigate("Billnormaltrip")
    }/>

    </View>
  )
}
