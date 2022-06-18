import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class FeedBack extends Component {
  constructor() {
    super();
    this.state = {
      textInput: '',
    };
  }

  updateText = () => {
    this.setState({
      textInput: '',
    });
  };

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

        <Text style={styles.textM}>Feedback</Text>
        <TextInput
          style={styles.textinput}
          placeholder={'Feedback'}
          onChangeText={(text) =>
            this.setState({
              textInput: text,
            })
          }
          placeholderTextColor={'black'}
          value={this.state.textInput}
          autoFocus
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.updateText();
            Alert.alert(
              'Your Feedback has been submitted successfully!! Thankyou'
            );
            this.props.navigation.navigate('Home');
          }}>
          <Text style={styles.buttonText}>Submit your feedback</Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          *Please kindly submit your feedback as it is very important for us to
          keep improving ourselves.
        </Text>
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
    fontSize: 100,
    alignSelf: 'center',
  },
  textinput: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: RFValue(150),
    width: '80%',
    height: 50,
    padding: 10,
    borderColor: '#4C5D70',
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 30,
    backgroundColor: '#F88379',
    fontFamily: 'Valerie-hand',
    color: 'black',
  },
  button: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: RFValue(50),
    height: RFValue(70),
    width: RFValue(200),
    borderRadius: RFValue(20),
  },
  buttonText: {
    fontFamily: 'Valerie-hand',
    fontSize: 30,
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(150),
  },
  backButton: {
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
