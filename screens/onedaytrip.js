import React from 'react'
import { View ,Text} from 'react-native'
import { useFormik } from 'formik'

import Input from '../components/input'
import Button from '../components/button'

export default function onedaytrip() {
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
            ONE DAY TRIP
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='user'
          placeholder='Customer Name'
          autoCapitalize='none'
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
          icon='briefcase'
          placeholder='Initital Amount'
          autoCapitalize='none'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={handleChange('Initital Amount')}
          onBlur={handleBlur('Initital Amount')}
          error={errors.InititalAmount}
          value={values.InititalAmount}
          touched={touched.InititalAmount}
        />
     </View>
       <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='gauge'
          placeholder='Distance Allowed'
          autoCapitalize='none'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          disabled={true}
          onChangeText={handleChange('Distance Allowed')}
          onBlur={handleBlur('DistanceAllowed')}
          error={errors.DistanceAllowed}
          value={values.DistanceAllowed}
          touched={touched.DistanceAllowed}
        />
      </View>
      
     
      <Button label='Next' onPress={handleSubmit} />

        </View>
    )
}
