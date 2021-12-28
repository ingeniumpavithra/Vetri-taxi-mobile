import React from 'react'
import { View ,Text} from 'react-native'
import { useFormik } from 'formik'
import Input from '../components/input'
import Button from '../components/button'

export default function LocalTrip() {
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
          onChangeText={handleChange('From')}
          onBlur={handleBlur('From')}
          error={errors.From}
          value={values.From}
          touched={touched.From}
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
          onChangeText={handleChange('To')}
          onBlur={handleBlur('To')}
          error={errors.To}
          value={values.To}
          touched={touched.To}
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
          onChangeText={handleChange('customername')}
          onBlur={handleBlur('customername')}
          error={errors.customername}
          value={values.customername}
          touched={touched.customername}
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
          disabled={true}
          onChangeText={handleChange('phonenumber')}
          onBlur={handleBlur('phonenumber')}
          error={errors.phonenumber}
          value={values.phonenumber}
          touched={touched.phonenumber}
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
          onChangeText={handleChange('distancetravelled')}
          onBlur={handleBlur('distancetravelled')}
          error={errors.distancetravelled}
          value={values.distancetravelled}
          touched={touched.distancetravelled}
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
          onChangeText={handleChange('waitingcharge')}
          onBlur={handleBlur('waitingcharge')}
          error={errors.waitingcharge}
          value={values.waitingcharge}
          touched={touched.waitingcharge}
        />
      </View>
      <Button label='Next' onPress={handleSubmit} />

        </View>
    )
}
