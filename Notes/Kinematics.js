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

export default class Kinematics extends Component {
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

        <Text style={styles.header}>Kinematics</Text>

        <ScrollView>
          <Text style={styles.textM}>
            Kinematics is the branch of physics that talks about the description
            of the motion of bodies. The characteristics of moving bodies like
            displacement and acceleration will be discussed in this chapter. The
            fundamental concepts of a motion of a particle in one, as well as
            two dimensions, will be discussed. Motion can be grouped under
            categories. The velocity vector is where the point of distinction is
            made. Based on this, a motion is divided into one dimensional,
            two-dimensional or three-dimensional. Motion in a Straight Line If
            an object changes its position with respect to its surroundings with
            time, then it is called in motion. It is a change in the position of
            an object over time. Motion in a straight line is nothing but linear
            motion. As the name suggests, it’s in a particular straight line,
            thus it can be said that it uses only one dimension. Types of Linear
            Motion The linear motion, also called the Rectilinear Motion can be
            of two types: Uniform linear motion with constant velocity or zero
            acceleration: If a body travels in a straight line and covers an
            equal amount of distance in an equal interval of time, it is said to
            have uniform motion. In simple words, a body is said to have uniform
            acceleration if the rate of change of its velocity remains constant.
            Example: If a car travels at a speed of 60 km/hour, it will cover a
            1 km/minute. In this sense, the motion of car acceleration is
            uniform. Non-Uniform linear motion with variable velocity or
            non-zero acceleration: Unlike the uniform acceleration, the body is
            said to have a non-uniform motion when the velocity of a body
            changes by unequal amounts in equal intervals of time—the rate of
            change of its velocity changes at different points of time during
            its movement. Example: A boy is kicking a football. It might cover 4
            meters in the first attempt, 6 meters in the second change, 9 meters
            in the third attempt and so on as per the velocity exerted by the
            boy. Motion in a Straight Line Formulas v =u + at s= ut+ 1/2 at2 v2
            = u2 + 2as Frame of reference The motion of a particle is always
            described with respect to a reference system. A reference system is
            made by taking an arbitrary point as origin and imagining a
            co-ordinate system to be attached to it. This co-ordinate system
            chosen for a given problem constitutes the reference system for it.
            We generally choose a co-ordinate system attached to the earth as
            the reference system for most of the problems. Path Length The path
            length is the total length of the path that has to be traversed by
            the object. For a particle in motion the total length of the actual
            path traversed between initial and final positions of the particle
            is known as the ‘total path length’ or distance covered by it.
            Displacement Displacement of a particle in a given time is defined
            as the change in the position of particle in a particular direction
            during that time. It is given by a vector drawn from its initial
            position to its final position. Factors Distinguishing Displacement
            from Distance: —> Displacement has direction. Distance does not have
            direction. —> The magnitude of displacement can be both positive and
            negative. —> Distance is always positive. It never decreases with
            time. —> Distance ≥ | Displacement | Uniform Motion When the
            displacement of an object is equal in equal time intervals, the
            motion is said to be uniform, else it is referred to as non-uniform.
            Average Speed The average speed is the total distance traveled by
            the object in a particular time interval. The average speed is a
            scalar quantity. It is represented by the magnitude and does not
            have direction. Let us know how to calculate average speed, the
            average speed formula, and solved examples on average speed.
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
