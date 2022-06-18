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

        <Text style={styles.header}>Set</Text>

        <ScrollView>
          <Text style={styles.textM}>
            A set is a well-defined collection of objects. Representation of
            Sets There are two methods of representing a set Roster or Tabular
            form In the roster form, we list all the members of the set within
            braces {} and separate by commas. Set-builder form In the
            set-builder form, we list the property or properties satisfied by
            all the elements of the sets. Types of Set:- Empty Sets: A set which
            does not contain any element is called an empty set or the void set
            or null set and it is denoted by {} or Φ. Singleton Set: A set
            consists of a single element, is called a singleton set. Finite and
            infinite Set: A set which consists of a finite number of elements,
            is called a finite set, otherwise the set is called an infinite set.
            Equal Sets: Two sets A and 6 are said to be equal, if every element
            of A is also an element of B or vice-versa, i.e. two equal sets will
            have exactly the same element. Equivalent Sets: Two finite sets A
            and 6 are said to be equal if the number of elements are equal, i.e.
            n(A) = n(B).
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
