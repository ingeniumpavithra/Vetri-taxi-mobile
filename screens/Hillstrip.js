import React,{ useState, useContext } from 'react'
import { View, Text, Picker } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { HillsContext } from "../context/HillsContextProvider";
import Input from '../components/input'
import Button from '../components/button'

const Hillstrip = () => {
    const [error, setError] = useState('');
    const {
        billingDatas,
        handleChangeBilling
      } = useContext(HillsContext);

      const navigation = useNavigation();

    const isValidForm = () => {
        if (!isValidObjField( customer_name, phone,  tripto,tripdays))
          return updateError('Required all fields !', setError);
       
        if (!customer_name.trim() || customer_name.length < 4)
          return updateError('Invalid username !', setError);
        if (!phone.trim() || phone.length != 10)
          return updateError('Phone number invalid !', setError);
       
        if (!tripto.trim())
          return updateError('Select trip to !', setError);
       
        if (!tripdays.trim() || tripdays.length > 30)
          return updateError('Trip days too long !', setError);
       
        return true
    
      }
    
      const isValidObjField = ( name, phone_number, tripto,tripdays) => {
    
        return  name.trim() && phone_number.trim && tripto.trim && tripdays.trim
      }
    
      const updateError = (error, stateUpdater) => {
        stateUpdater(error);
        setTimeout(() => {
          stateUpdater('');
        }, 2600);
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
                Hills Trip
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
                    value = {billingDatas.customer_name}
                    onChangeText={value => handleChangeBilling(value,'customer_name')}

                />
            </View>
            <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
                <Input
                    icon='phone'
                    placeholder='Phone number'
                    autoCapitalize='none'
                    autoCompleteType='username'
                    keyboardType='numeric'
                    keyboardAppearance='dark'
                    returnKeyType='next'
                    returnKeyLabel='next'
                    onChangeText={value => handleChangeBilling(value,'phone_number')}                    pattern="^\d{10}$"
                    value = {billingDatas.phone_number}
          

                />
            </View>

            <View style={{ paddingHorizontal: 32, paddingVertical: 0, marginBottom: 16, width: '85%', borderWidth: 0.3, borderRadius: 8 }}>

                <Picker
                    onValueChange={value => handleChangeBilling(value,'tripfrom')} 

                >
                    <Picker.Item label="Tiruchengode" value="Tiruchengode" />

                </Picker>
            </View>
            <View style={{ paddingHorizontal: 32, paddingVertical: 0, marginBottom: 16, width: '85%', borderWidth: 0.3, borderRadius: 8 }}>

                <Picker
                    onValueChange={(value, itemIndex) => handleChangeBilling(value,'tripto')}
                >
                    <Picker.Item label="Trip To" value="" />
                    <Picker.Item label="Yercaud" value="Yercaud" />
                    <Picker.Item label="Kolli Hills" value="Kolli Hills" />
                    <Picker.Item label="Kodaikanal" value="Kodaikanal" />
                    <Picker.Item label="Ooty" value="Ooty" />
                    <Picker.Item label="Palani" value="Palani" />

                </Picker>
            </View>

            <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
                <Input

                    icon='calendar'
                    placeholder='Enter Days'
                    autoCapitalize='none'
                    autoCompleteType='username'
                    keyboardType='default'
                    keyboardAppearance='dark'
                    returnKeyType='next'
                    returnKeyLabel='next'
                    value = {billingDatas.trip_days}
                    onChangeText={value => handleChangeBilling(value,'trip_days')}
                />
            </View>
            <View style={{ paddingHorizontal: 32, paddingVertical: 0, marginBottom: 16, width: '85%', borderWidth: 0.3, borderRadius: 8 }}>

                <Picker
                    selectedValue="members"
                    onValueChange={value => handleChangeBilling(value,'members')}

                >
                    <Picker.Item label="4" value="4" />


                </Picker>
            </View>
            <Button label='Next' onPress={() => navigation.navigate("Billhillstrip")} />

        </View>
    )
}

export default Hillstrip
