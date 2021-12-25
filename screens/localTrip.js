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
          disabled={true}
          onChangeText={handleChange('customerName')}
          onBlur={handleBlur('customerName')}
          error={errors.customerName}
          value={values.customerName}
          touched={touched.customerName}
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
          onChangeText={handleChange('extraKms')}
          onBlur={handleBlur('extraKms')}
          error={errors.extraKms}
          value={values.extraKms}
          touched={touched.extraKms}
        />
      </View>
      <Button label='Next' onPress={handleSubmit} />

        </View>
    )
}
