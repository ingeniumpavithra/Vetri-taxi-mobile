import React,{useState, useContext, useEffect,} from 'react'
import { View ,Text ,  StyleSheet, SafeAreaView} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Input from '../components/input'
import Button from '../components/button'
import {HeaderIconButton} from '../components/HeaderIconButton';
import moment from 'moment';
import Card from '../components/CalCard'
import {Picker} from "@react-native-picker/picker";

const Separator = () => (
  <View style={styles.separator} />
);

export default function Driverlogin() { ({navigation}) 
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
       
          <HeaderIconButton
            name={'logout'}
            onPress={() => navigation.navigate("Login")}
            
          />
          
       
      ),
    });
  }, [navigation]);

  const navigation = useNavigation();
  const [currentDate, setcurrentDate] = useState('')
  const [currentDateWithMoment, setcurrentDateWithMoment] = useState('')
  useEffect(() => {
    var date = new Date().getDate()     //current Date
    var month = new Date().getMonth() + 1 //current month
    var year = new Date().getFullYear() //current year
  
    setcurrentDate(
      date + '/' + month + '/' + year + ''
    )

      var dateMoment = moment().utcOffset('+05:30')
                                .format('hh:mm a')

      setcurrentDateWithMoment(dateMoment)
  }) 
 
    
     
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 10, paddingVertical: 25 }}>
        DRIVER REPORT </Text>
        <Card>
        <Text style={styles.textStyle}>
          DATE :
          {currentDate}
        </Text>

        <Separator />

        <Text style={styles.textStyle}>
            TIME : {currentDateWithMoment}
        </Text>
        </Card>
        <Separator />
        <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='gauge'
          placeholder='KM Travelled'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          keyboardType = 'numeric'
         
        />
      </View>
      <Picker style={{ width:290, height:40, marginBottom:16 }}
       
      >
        <Picker.Item label="StartTime" value="start" />
        <Picker.Item label="EndTime" value="end" />
      </Picker>
        <Button label='SUBMIT' />
        </View>
        </SafeAreaView>
)
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding:10, 
  },
  textStyle:{
    textAlign: 'center',
    fontSize: 25,
    color: 'green',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    
  },
});