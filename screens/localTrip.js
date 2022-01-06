import React,{useState, useContext} from 'react'
import { View, Text ,Picker} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Input from '../components/input'
import Button from '../components/button'
import { LocalContext } from "../context/LocalContextProvider";

export default function LocalTrip() {
  const [error, setError] = useState('');
  
 
const isValidForm = () => {
  if (!isValidObjField(name, phone))
  return updateError('Required all fields !', setError);
    if (!name.trim() || name.length < 4)
    return updateError('Invalid username !', setError);
  if (!phone.trim() || phone.length != 10  )
    return updateError('Phone number invalid !', setError);
  return true

}

const isValidObjField = (name, phone) => {

  return name.trim() && phone.trim 
}
const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('');
  }, 2600);
}


const {
  localData,
  handleChangeBilling
} = useContext(LocalContext);
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
        Local Trip
      </Text>
      {error ? <Text style={{ color: "red", paddingBottom: 12, fontSize: 18 }} >{error}</Text> : null}
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
          value = {localData.name}
          onChangeText={value => handleChangeBilling(value,'name')}
         
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
          value = {localData.phone}
          onChangeText={value => handleChangeBilling(value,'phone')}
        />
      </View>
      <View style={{ paddingHorizontal: 32,paddingVertical:0, marginBottom: 16,   width: '85%',borderWidth: 0.3,borderRadius:8}}>

     <Picker
    selectedValue = {localData.triphr}
    onValueChange={value => handleChangeBilling(value,'triphr')}
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
          value = {localData.tripkms}
           onChangeText={value => handleChangeBilling(value,'tripkms')}
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
          value = {localData.xtrakm}
           onChangeText={value => handleChangeBilling(value,'xtrakm')} 
        />
      </View>
      <Button  label='Next'
       onPress={() => navigation.navigate("Billlocaltrip")}
      />
    </View>
  )
}
