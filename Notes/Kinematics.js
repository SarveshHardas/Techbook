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
  ScrollView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Sets extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            this.props.navigation.navigate('Mathematics_Notes');
          }}>
          <Image
            style={styles.backButtonImage}
            source={require('../assets/backButton.png')}
          />
        </TouchableOpacity>

        <Text style={styles.header}>Kinematics</Text>

        <ScrollView>
          <Text style={styles.textM}>
            Kinematics
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  androidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  textM: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: RFValue(50),
    marginLeft: RFValue(30),
    marginRight: RFValue(30),
  },
  header: {
    fontFamily: 'Valerie-Hand',
    fontSize: 75,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 28,
    marginTop: RFValue(30),
    marginLeft: RFValue(30),
    marginRight: RFValue(30),
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
});
