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

        <Text style={styles.header}>Angle and its measurement</Text>

        <ScrollView>
          <Text style={styles.textM}>
            Directed Angles: The ordered pair of rays (OA,OB) together with the
            rotation of the ray OA to the position of the ray OB is called the
            directed angle. If the rotation of the initial ray is anticlockwise
            then the measure of directed angle is considered as positive and if
            it is clockwise then the measure of directed angle is considered as
            negative. In the ordered pair (OA,OB), the ray OA is called the
            initial arm and the ray OB is called the terminal arm. Zero angle:
            If the ray OA has zero rotation, that is it does not rotate, the
            initial arm itself is a terminal arm OB, the angle so formed is zero
            angle. One rotation angle: After one complete rotation if the
            initial ray OA coincides with the terminal ray OB then so formed
            angle is known as one rotation angle Straight angle: After the
            rotation, if the initial ray OA and the terminal ray OB are in
            opposite directions then directed angle so formed is known as
            straight angle. Right angle: One fourth of one rotation angle is
            called as one right angle, it is also half of a straight angle. One
            rotation angle is four right angles. Right angle: One fourth of one
            rotation angle is called as one right angle, it is also half of a
            straight angle. One rotation angle is four right angles Angle in a
            Quadrant: A directed angle in standard position is said to be in a
            particular quadrant if its terminal ray lies in that quadrant.
            Quadrantal Angles: A directed angle in standard position whose
            terminal ray lies along X-axis or Y-axis is called a quadrantal
            angle. Co-terminal angles: Directed angles of different amount of
            rotation having the same positions of, initial rays and terminal
            rays are called co-terminal angles.
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
