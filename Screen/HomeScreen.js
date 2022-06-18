import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

let customFonts = {
  'Valerie-Hand': require('../assets/fonts/ValerieHand.ttf'),
};

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }

  fontloaded = async () => {
    await Font.loadAsync(customFonts);
    this.setState({
      fontLoaded: true,
    });
  };

  componentDidMount() {
    this.fontloaded();
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.androidSafeArea} />
          <Image style={styles.imageS} source={require('../assets/logo.png')} />

          <View style={{ flexDirection: 'row', flex: 1 }}>
            <TouchableOpacity
              style={styles.screenTopComponent}
              onPress={() => {
                this.props.navigation.navigate('Mathematics');
              }}>
              <Image
                style={styles.maths_iconImage}
                source={require('../assets/maths_logo.png')}
              />
              <Text style={styles.buttonText}>Mathematics</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.screenTopComponent}
              onPress={() => {
                this.props.navigation.navigate('Physics');
              }}>
              <Image
                style={styles.physics_iconImage}
                source={require('../assets/physics_logo.png')}
              />
              <Text style={styles.buttonText}>Physics</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', flex: 1 }}>
            <TouchableOpacity
              style={styles.screenBottomComponent}
              onPress={() => {
                this.props.navigation.navigate('Chemistry');
              }}>
              <Image
                style={styles.chemistry_iconImage}
                source={require('../assets/chemistry_logo.png')}
              />
              <Text style={styles.buttonText}>Chemistry</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.screenBottomComponent}
              onPress={() => {
                this.props.navigation.navigate('Biology');
              }}>
              <Image
                style={styles.biology_iconImage}
                source={require('../assets/biology_logo.png')}
              />
              <Text style={styles.buttonText}>Biology</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABCEA9',
  },
  imageS: {
    width: RFValue(200),
    height: RFValue(200),
    alignSelf: 'center',
    padding: 10,
    marginTop: 20,
  },
  androidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  screenTopComponent: {
    backgroundColor: '#fff',
    height: RFValue(120),
    width: RFValue(130),
    marginTop: RFValue(70),
    marginRight: RFValue(30),
    marginLeft: RFValue(25),
    borderRadius: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  screenBottomComponent: {
    backgroundColor: '#fff',
    height: RFValue(120),
    width: RFValue(130),
    marginTop: RFValue(-10),
    borderRadius: RFValue(20),
    marginLeft: RFValue(25),
    marginRight: RFValue(30),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonText: {
    fontFamily: 'Valerie-Hand',
    fontSize: 35,
    top: -25,
  },
  maths_iconImage: {
    positon: 'absolute',
    right: 43,
    top: -26.5,
    height: 50,
    width: 50,
    resizedMode: 'contain',
  },
  physics_iconImage: {
    positon: 'absolute',
    right: 43,
    top: -23.5,
    height: 70,
    width: 70,
    resizedMode: 'contain',
  },
  chemistry_iconImage: {
    positon: 'absolute',
    right: 40,
    top: -20.5,
    height: 85,
    width: 85,
    resizedMode: 'contain',
  },
  biology_iconImage: {
    positon: 'absolute',
    right: 40,
    top: -23.5,
    height: 65,
    width: 65,
    resizedMode: 'contain',
  },
});
