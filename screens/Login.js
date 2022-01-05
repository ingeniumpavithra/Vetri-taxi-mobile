import React from 'react'
import { View, Text } from 'react-native'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Button from '../components/button'
import Input from '../components/input'
import { useNavigation } from "@react-navigation/native";



export default function Login() {

  const navigation = useNavigation();
  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string()
      .min(5, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required')
  });

  const { handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched } = useFormik({
      validationSchema: LoginSchema,
      initialValues: { username: '', password: '' },
      onSubmit: () => {
        async function addbill() {
          try{
            const response = await axios.post("http://127.0.0.1:8000/api/auth/login", values);
          if (response) {
             console.log(response);
             navigation.navigate("Home")
          } 
          }catch(e){
            console.log(e);
          }
      }
      addbill();
      
      }
      
      
    });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
        Login
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='user'
          placeholder='Enter your Username'
          autoCapitalize='none'
          autoCompleteType='username'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
          error={errors.username}
          value={values.username}
          touched={touched.username}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='key'
          placeholder='Enter your password'
          secureTextEntry
          autoCompleteType='password'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          value={values.password}
          touched={touched.password}
        />
      </View>
      <Button label='Login' onPress={handleSubmit} />
    </View>
  )
}
