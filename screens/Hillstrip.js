import React, { useState } from 'react'
import { View, Text, Picker } from 'react-native'
import { useFormik } from 'formik'

import Input from '../components/input'
import Button from '../components/button'

const Hillstrip = () => {
    const { handleChange,
        handleSubmit,
        handleBlur,
        values,
        errors,
        touched } = useFormik({
            //   validationSchema: TripSchema,
            initialValues: { username: '', password: '' },
            onSubmit: () =>
                alert("")
        });
    const [place, setPlace] = useState("Thiruchengode")
    const [members, setMembers] = useState("4")
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
                    onChangeText={handleChange('customerName')}
                    onBlur={handleBlur('customerName')}
                    error={errors.username}
                    value={values.username}
                    touched={touched.username}
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
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('PhoneNumber')}
                    error={errors.phoneNumber}
                    value={values.PhoneNumber}
                    touched={touched.phoneNumber}
                />
            </View>
            <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
                <Input
                    icon='clock'
                    placeholder='Trip Hour'
                    autoCapitalize='none'
                    autoCompleteType='username'
                    keyboardType='default'
                    keyboardAppearance='dark'
                    returnKeyType='next'
                    returnKeyLabel='next'
                    onChangeText={handleChange('hour')}
                    onBlur={handleBlur('hour')}
                    error={errors.hour}
                    value={values.hour}
                    touched={touched.hour}
                />
            </View>
            <View style={{ paddingHorizontal: 32, paddingVertical: 0, marginBottom: 16, width: '85%', borderWidth: 0.3, borderRadius: 8 }}>

                <Picker
                    selectedValue={place}
                    onValueChange={() => setPlace("Tiruchengode")}

                >
                    <Picker.Item label="Tiruchengode" value="Tiruchengode" />

                </Picker>
            </View>
            <View style={{ paddingHorizontal: 32, paddingVertical: 0, marginBottom: 16, width: '85%', borderWidth: 0.3, borderRadius: 8 }}>

                <Picker
                    selectedValue={place}
                    onValueChange={() => setPlace("Tiruchengode")}

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
                    onChangeText={handleChange('extraKms')}
                    onBlur={handleBlur('extraKms')}
                    error={errors.extraKms}
                    value={values.extraKms}
                    touched={touched.extraKms}
                />
            </View>
            <View style={{ paddingHorizontal: 32, paddingVertical: 0, marginBottom: 16, width: '85%', borderWidth: 0.3, borderRadius: 8 }}>

<Picker
    selectedValue={place}
    onValueChange={() => setMembers("4")}

>
    <Picker.Item label="4" value="4" />
   

</Picker>
</View>
            <Button label='Next' onPress={handleSubmit} />

        </View>
    )
}

export default Hillstrip
