import React, { useState } from 'react'
import { View, Text, Picker } from 'react-native'


import Input from '../components/input'
import Button from '../components/button'

const Hillstrip = () => {
    const [error, setError] = useState('');
    const [tripto, setTripto] = useState("");
    const [tripdays, setTripdays] = useState("");
    const [name, setName] = useState("");
    const [payment, setPayment] = useState("");
    const [phone, setPhone] = useState("");
    let batta = 0;
    batta = 300 * tripdays;
    let result = 0;
    let pay;

    function tariffcalc(tripto) {
        setTripto(tripto)
        tripto === 'Yercaud' ? pay = 3000 : tripto === 'Kolli Hills' ? pay = 3500 : tripto === 'Kodaikanal' ? pay = 6000 : tripto === 'Ooty' ? pay = 6000 : tripto === 'Palani' ? pay = 3000 : pay = 0
        setPayment(pay)
    }

    batta > 0 ? result = payment + batta : result = payment;

    const isValidForm = () => {
        if (!isValidObjField( name, phone,  tripto,tripdays))
          return updateError('Required all fields !', setError);
       
        if (!name.trim() || name.length < 4)
          return updateError('Invalid username !', setError);
        if (!phone.trim() || phone.length != 10)
          return updateError('Phone number invalid !', setError);
       
        if (!tripto.trim())
          return updateError('Select trip to !', setError);
       
        if (!tripdays.trim() || tripdays.length > 30)
          return updateError('Trip days too long !', setError);
       
        return true
    
      }
    
      const isValidObjField = ( name, phone, tripto,tripdays) => {
    
        return  name.trim() && phone.trim && tripto.trim && tripdays.trim
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
            trip_from: "Tiruchengode",
            trip_to: tripto,
            payment: payment,
            cus_name: name,
            mobile: phone,
            members: "4",
            trip_days: tripdays,
            driver_batta: batta,
            total: result
        }
        console.log(JSON.stringify(data))
        // async function addbill() {
        //     const response = await axios.post("http://127.0.0.1:8000/api/auth/hills-trip", data);
        //     if (response) {
        //         alert(response.data.message);
        //     } else {
        //         alert("Something went wrong..!");
        //     }
        // }
        // addbill();

        setTripto("")
        setName("")
        setPayment("")
        setPhone("")
        setTripdays("")
    }}

    const [place, setPlace] = useState("Thiruchengode")

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
                    pattern="^\d{10}$"
                    value={phone}

                />
            </View>

            <View style={{ paddingHorizontal: 32, paddingVertical: 0, marginBottom: 16, width: '85%', borderWidth: 0.3, borderRadius: 8 }}>

                <Picker
                    selectedValue={place}
                    onValueChange={setPlace}

                >
                    <Picker.Item label="Tiruchengode" value="Tiruchengode" />

                </Picker>
            </View>
            <View style={{ paddingHorizontal: 32, paddingVertical: 0, marginBottom: 16, width: '85%', borderWidth: 0.3, borderRadius: 8 }}>

                <Picker
                    selectedValue={tripto}
                    onValueChange={setTripto,tariffcalc}

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
                    onChangeText={setTripdays}

                    value={tripdays}
                />
            </View>
            <View style={{ paddingHorizontal: 32, paddingVertical: 0, marginBottom: 16, width: '85%', borderWidth: 0.3, borderRadius: 8 }}>

                <Picker
                    selectedValue={place}
                    onValueChange={4}

                >
                    <Picker.Item label="4" value="4" />


                </Picker>
            </View>
            <Button label='Next' onPress={subHandler} />

        </View>
    )
}

export default Hillstrip
