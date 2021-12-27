import React from "react";
import { StyleSheet, Text, View,} from "react-native";
import Card from '../components/Calcard'
import { useFormik } from 'formik'
import Button from '../components/button'


  const { handleChange,
      handleSubmit,
      touched } = useFormik({
      //   validationSchema: TripSchema,
        initialValues: { username: '', password: '' },
        onSubmit: () =>
          alert("")
      });
const Billonedaytrip = (props) => {   
      const {
        data
      } = props;
     
  return (
<View
         style={{
            flex: 1,
            justifyContent: 'center'
          }}>
            
    <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%', justifyContent: 'center'}}>
        <Card >
          
        <Text style={{ color: '#223e4b', fontSize: 28, marginBottom: 16, marginLeft: 50, fontWeight: 'bold', }}>
        Traffic Calculation 
       </Text> 
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16, marginLeft: 50, }}>
          Initital payment : {data.initial_payment}
      </Text>
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16, marginLeft: 50, }}>
          Price Per KM :  {data.distance_travel * 7}
      </Text>
      <Text style={{ color: '#fb9403', fontSize: 28, marginBottom: 16, marginLeft: 50, fontWeight: 'bold', }}>
         Total : {parseInt(data.initial_payment) + (data.distance_travel * 7)}
      </Text>
     
      <Button label='Submit' onPress={handleSubmit}/>
      </Card>
      </View>
    </View>

  );
};

export default Billonedaytrip() 

