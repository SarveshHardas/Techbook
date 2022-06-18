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

export default class Laws extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            this.props.navigation.navigate('Physics_Notes');
          }}>
          <Image
            style={styles.backButtonImage}
            source={require('../assets/backButton.png')}
          />
        </TouchableOpacity>

        <Text style={styles.header}>Laws of motion</Text>

        <ScrollView>
          <Text style={styles.textM}>
            Dynamics is the branch of physics in which we study the motion of a
            body by taking into consideration the cause i.e., force which
            produces the motion. • Force Force is an external cause in the form
            of push or pull, which produces or tries to produce motion in a body
            at rest, or stops/tries to stop a moving body or changes/tries to
            change the direction of motion of the body. • The inherent property,
            with which a body resists any change in its state of motion is
            called inertia. Heavier the body, the inertia is more and lighter
            the body, lesser the inertia. • Law of inertia states that a body
            has the inability to change its state of rest or uniform motion
            (i.e., a motion with constant velocity) or direction of motion by
            itself. • Newton’s Laws of Motion Law 1. A body will remain at rest
            or continue to move with uniform velocity unless an external force
            is applied to it. First law of motion is also referred to as the
            ‘Law of inertia’. It defines inertia, force and inertial frame of
            reference. I here is always a need of ‘frame of reference’ to
            describe and understand the motion of particle, lhc simplest ‘frame
            of reference’ used are known as the inertial frames. A frame of
            referent, e is known as an inertial frame it, within it, all
            accelerations of any particle are caused by the action of ‘real
            forces’ on that particle. When we talk about accelerations produced
            by ‘fictitious’ or ‘pseudo’ forces, the frame of reference is a
            non-inertial one. Law 2. When an external force is applied to a body
            of constant mass the force produces an acceleration, which is
            directly proportional to the force and inversely proportional to the
            mass of the body. Law 3. “To every action there is equal and
            opposite reaction force”. When a body A exerts a force on another
            body B, B exerts an equal and opposite force on A.
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
