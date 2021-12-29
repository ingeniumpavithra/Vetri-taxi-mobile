import React ,{useState}from 'react'
import { View, Text ,Picker} from 'react-native'
import { useFormik } from 'formik'




import Input from '../components/input'
import Button from '../components/button'

export default function LocalTrip() {
  
  const [triphr,setTriphr] = useState('')
 
  const { handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched } = useFormik({
      //   validationSchema: TripSchema,
      initialValues: {
        customerName: '',
        phoneNumber: '',
        kms: '',
        extraKms: '',
      },
      onSubmit: () =>
        console.log(values)

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
          error={errors.customerName}
          value={values.customerName}
          touched={touched.customerName}
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
      <View style={{ paddingHorizontal: 32,paddingVertical:0, marginBottom: 16,   width: '85%',borderWidth: 0.3,borderRadius:8}}>

     <Picker
       selectedValue = {triphr}
       onValueChange={(itemValue) => setTriphr(itemValue)}
              
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
          onChangeText={handleChange("kms")}
          onBlur={handleBlur('kms')}
          error={errors.kms}
          value={triphr === "1" ? "10"  : triphr === "2" ? "20": "0"}
          touched={touched.kms}
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
