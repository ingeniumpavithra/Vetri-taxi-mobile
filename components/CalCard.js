// React Native Card View for Android and IOS
// https://aboutreact.com/react-native-card-view/

// import React in our code
import React from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';

//import Card
import { Card } from 'react-native-paper';

const App = (props) => {

  const {
    data
  } = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Card containerStyle={{borderWidth: 2, borderColor: '#212529', elevation: 0}}> 
          <Text style={styles.paragraph}>
            Tariff Calculation
          </Text>
          <Text style={styles.text}>
            Initial Payment : {data.initial_payment}</Text>
          <Text style={styles.text}>
            Price Per Km : {data.distance_travel * 7}
          </Text>
          <Text style={styles.text}>
            TOTAL : {parseInt(data.initial_payment) + (data.distance_travel * 7)}
          </Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ecf0f1',
    borderColor: '#212529',

  },
  
paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
text: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 20,
     paddingLeft: 50,
  },
 
});
