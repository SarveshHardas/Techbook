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

export default class Structure extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            this.props.navigation.navigate('Chemistry_Notes');
          }}>
          <Image
            style={styles.backButtonImage}
            source={require('../assets/backButton.png')}
          />
        </TouchableOpacity>

        <Text style={styles.header}>Structure of atom</Text>

        <ScrollView>
          <Text style={styles.textM}>
            Discovery of Electron—Discharge Tube Experiment In 1879, William
            Crooks studied the conduction of electricity through gases at low
            pressure. He performed the experiment in a discharge tube which is a
            cylindrical hard glass tube about 60 cm in length. It is sealed at
            both the ends and fitted with two metal electrodes. The electrical
            discharge through the gases could be observed only at very low
            pressures and at very high voltages. The pressure of different gases
            could be adjusted by evacuation. When sufficiently high voltage is
            applied across the electrodes, current starts flowing through a
            stream of particles moving in the tube from the negative electrode
            (cathode) to the positive electrode (anode). These were called
            cathode rays or cathode ray particles. • Properties of Cathode Rays
            (i) Cathode rays travel in straight line. (ii) Cathode rays start
            from cathode and move towards the anode. (iii) These rays themselves
            are not visible but their behaviour can be observed with the help of
            certain kind of materials (fluorescent or phosphorescent) which glow
            when hit by them. (iv) Cathode rays consist of negatively charged
            particles. When electric field is applied on the cathode rays with
            the help of a pair of metal plates, these are found to be deflected
            towards the positive plate indicating the presence of negative
            charge. (v) The characteristics of cathode rays do not depend upon
            the material of electrodes and the nature of gas present in the
            cathode ray’tube. • Determination of Charge/Mass (elm) Ratio for
            Electrons J. J. Thomson for the first time experimentally determined
            charge/mass ratio called elm ratio for the electrons. For this, he
            subjected the beam of electrons released in the discharge tube as
            cathode rays to influence the electric and magnetic fields. These
            were acting perpendicular to one another as well as to the path
            followed by electrons. According to Thomson, the amount of deviation
            of the particles from their path in presence of electrical and
            magnetic field depends upon following factors: (i) Greater the
            magnitude of the charge on the particle, greater is the interaction
            with the electric or magnetic field and thus greater is the
            deflection. (ii) The mass of the particle — lighter the particle,
            greater the deflection. (iii) The deflection of electrons from their
            original path increases with the increase in the voltage across the
            electrodes or strength of the magnetic field. By carrying out
            accurate measurements on the amount of deflections observed by the
            electrons on the electric field strength or magnetic field strength,
            Thomson was able to determine the value of e/me = 1.758820 x 1011 C
            kg-1 where me = Mass of the electron in kg e = magnitude of charge
            on the electron in coulomb (C). • Charge on the Electron R.A.
            Millikan devised a method known as oil drop experiment to determine
            the charge on the electrons.Discovery of Proton—Anode Rays In 1886,
            Goldstein modified the discharge tube by using a perforated cathode.
            On reducing the pressure, he observed a new type of luminous rays
            passing through the holes or perforations of the cathode and moving
            in a direction opposite to the cathode rays. These rays were named
            as positive rays or anode rays or as canal rays. Anode rays are not
            emitted from the anode but from a space between anode and cathode. •
            Properties of Anode Rays (i) The value of positive charge (e) on the
            particles constituting anode rays depends upon the nature of the gas
            in the discharge tube. (ii) The charge to mass ratio of the
            particles is found to depend on the gas from which these originate.
            (iii) Some of the positively charged particles carry a multiple of
            the fundamental unit of electrical charge. (iv) The behaviour of
            these particles in the magnetic or electric field is opposite to
            that observed for electron or cathode rays. • Proton The smallest
            and lightest positive ion was obtained from hydrogen and was called
            proton. Mass of proton = 1.676 x 10-27 kg Charge on a proton = (+)
            1.602 x 10-19 C • Neutron It is a neutral particle. It was
            discovered by Chadwick (1932). By the bombardment of thin sheets of
            beryllium with fast moving a-particles he observed • that highly
            penetrating rays consist of neutral particles which were named
            neutrons. • Thomson Model of Atom (i) J. J. Thomson proposed that an
            atom may be regarded as a sphere of approximate radius 1CT8 cm
            carrying positive charge due to protons and in which negatively
            charged electrons are embedded. (ii) In this model, the atom is
            visualized as a pudding or cake of positive charge with electrons
            embedded into it. (iii) The mass of atom is considered to be evenly
            spread over the atom according to this model. Drawback of Thomson
            Model of Atom This model was able to explain the overall neutrality
            of the atom, it could not satisfactorily, explain the results of
            scattering experiments carried out by Rutherford in 1911.
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
