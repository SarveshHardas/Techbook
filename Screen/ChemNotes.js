import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  Button,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ChemNotes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
          <Image
            style={styles.backButtonImage}
            source={require('../assets/backButton.png')}
          />
        </TouchableOpacity>
        <Text style={styles.textM}> Chemistry Notes </Text>

        <TouchableOpacity
          style={styles.tOS}
          onPress={() => {
            this.props.navigation.navigate('Basic_concept');
          }}>
          <Text style={styles.tOST}>Some basic concept of chemistry</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tOS}
          onPress={() => {
            this.props.navigation.navigate('Structure');
          }}>
          <Text style={styles.tOST}>Structure of atom</Text>
        </TouchableOpacity>
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
    fontSize: 75,
    alignSelf: 'center',
    marginTop: RFValue(50),
  },
  backButton: {
    marginTop: RFValue(30),
    marginLeft: RFValue(10),
    width: RFValue(70),
    height: RFValue(60),
    borderRadius: RFValue(20),
  },
  backButtonImage: {
    alignItems: 'center',
    alignSelf: 'center',
    width: RFValue(80),
    height: RFValue(80),
    fontSize: 30,
    padding: 20,
  },
  tOS: {
    height: RFValue(100),
    width: RFValue(150),
    backgroundColor: 'white',
    marginTop: RFValue(70),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: RFValue(20),
  },
  tOST: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontFamily: 'Valerie-Hand',
    fontSize: RFValue(40),
  },
});
