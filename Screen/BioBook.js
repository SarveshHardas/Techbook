import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  Image
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Biology extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />

        <TouchableOpacity style={styles.backButton}
         onPress={()=>{
           this.props.navigation.navigate('Home')
         }} >
          <Image style={styles.backButtonImage}
           source={require('../assets/backButton.png')} />
        </TouchableOpacity>

        <Text style={styles.textM}> Biology </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABCEA9',
  },
  androidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  textM: {
    fontFamily: 'Valerie-Hand',
    fontSize: 150,
    alignSelf: 'center',
    marginTop: RFValue(250),
  },
  backButton: {
    marginTop: RFValue(30),
    marginLeft:RFValue(10),
    width: RFValue(70),
    height: RFValue(60),
    borderRadius: RFValue(20),
  },
  backButtonImage:{
    alignItems:'center',
    alignSelf:'center',
    width:RFValue(80),
    height:RFValue(80),
    fontSize:30,
    padding:20
  }
});
