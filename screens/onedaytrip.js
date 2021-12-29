import React,{useState} from 'react'
import { View ,Text , form} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Input from '../components/input'
import Button from '../components/button'



export default function onedaytrip() {
  
  const [kms, setKms] = useState(0);
  const [custName, setCustName] = useState("");
  const [custNo, setCustNo] = useState("");
  const initPayment = 1800;
  const pricePerKm = 7;
  const totalPrice = initPayment + pricePerKm * kms;
  
  function kmsHandler(e) {
    setKms(e.target.value);
  }
  function custNameHandler(e) {
    setCustName(e.target.value);
  }
  function custNoHandler(e) {
    setCustNo(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    let data = {
      cus_name: custName,
      mobile: custNo,
      distance: kms,
      total: totalPrice
    }
    async function addbill(){
      const response = await axios.post("http://127.0.0.1:8000",data);
      if(response){
        alert(response.data.message);
      }else{
        alert("Something went wrong..!");
      }
    }
    addbill();

    console.log(JSON.stringify(data));
    setCustName("")
    setCustNo("")
    setKms(0)
  }



 const navigation = useNavigation();      
    return (
        <View
         style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <form onSubmit={submitHandler} className="pt-3"></form>
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
          value={custName}
          handler={custNameHandler}

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
          handler={custNoHandler}
          value={custNo}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='briefcase'
          placeholder='Initital Payment'
          autoCapitalize='none'
          keyboardType='default'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          value={initPayment}
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
          handler={kmsHandler}
          value={kms}
        />
      </View>
      
     
      <Button  label='Next'
       onPress={() => navigation.navigate("Billonedaytrip")}

        />
     
        </View>
    )
}
