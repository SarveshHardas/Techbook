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

export default class Basic_concept extends Component {
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

        <Text style={styles.header}>Some basic concept of chemistry</Text>

        <ScrollView>
          <Text style={styles.textM}>
            Importance of Chemistry Chemistry has a direct impact on our life
            and has wide range of applications in different fields. These are
            given below: (A) In Agriculture and Food: (i) It has provided
            chemical fertilizers such as urea, calcium phosphate, sodium
            nitrate, ammonium phosphate etc. (ii) It has helped to protect the
            crops from insects and harmful bacteria, by the use ‘ of certain
            effective insecticides, fungicides and pesticides. (iii) The use of
            preservatives has helped to preserve food products like jam, butter,
            squashes etc. for longer periods. (B) In Health and Sanitation: (i)
            It has provided mankind with a large number of life-saving drugs.
            Today, dysentery and pneumonia are curable due to discovery of
            sulpha drugs and penicillin life-saving drugs. Cisplatin and taxol
            have been found to be very effective for cancer therapy and AZT
            (Azidothymidine) is used for AIDS victims. (ii) Disinfectants such
            as phenol are used to kill the micro-organisms present in drains,
            toilet, floors etc. (iii) A low concentration of chlorine i.e., 0.2
            to 0.4 parts per million (ppm) is used ’ for sterilization of water
            to make it fit for drinking purposes. (C) Saving the Environment:
            The rapid industrialisation all over the world has resulted in lot
            of pollution. Poisonous gases and chemicals are being constantly
            released in the atmosphere. They are polluting environment at an
            alarming rate. Scientists are working day and night to develop
            substitutes which may cause lower pollution. For example, CNG
            (Compressed Natural Gas), a substitute of petrol, is very effective
            in checking pollution caused by automobiles. (D) Application in
            Industry: Chemistry has played an important role in developing many
            industrially ^ manufactured fertilizers, alkalis, acids, salts,
            dyes, polymers, drugs, soaps, detergents, metal alloys and other
            inorganic and organic chemicals including new materials contribute
            in a big way to the national economy. • Matter Anything which has
            mass and occupies space is called matter. For example, book, pencil,
            water, air are composed of matter as we know that they have mass and
            they occupy space. • Classification of Matter There are two ways of
            classifying the matter: (A) Physical classification (B) Chemical
            classification (A) Physical Classification: Matter can exist in
            three physical states: 1. Solids 2. Liquids 3. Gases 1. Solids: The
            particles are held very close to each other in an orderly fashion
            and there is not much freedom of movement. Characteristics of
            solids: Solids have definite volume and definite shape. 2. Liquids:
            In liquids, the particles are close to each other but can move
            around. Characteristics of liquids: Liquids have definite volume but
            not definite shape. 3. Gases: In gases, the particles are far apart
            as compared to those present in solid or liquid states. Their
            movement is easy and fast. Characteristics of Gases: Gases have
            neither definite volume nor definite shape. They completely occupy
            the container in which they are placed. (B) Chemical Classification:
            Based upon the composition, matter can be divided into two main
            types: 1. Pure Substances 2. Mixtures. 1. Pure substances: A pure
            substance may be defined as a single substance (or matter) which
            cannot be separated by simple physical methods. Pure substances can
            be further classified as (i) Elements (ii) Compounds (i) Elements:
            An element consists of only one type of particles. These particles
            may be atoms or molecules. For example, sodium, copper, silver,
            hydrogen, oxygen etc. are some examples of elements. They all
            contain atoms of one type. However, atoms of different elements are
            different in nature. Some elements such as sodium . or copper
            contain single atoms held together as their constituent particles
            whereas in some others two or more atoms combine to give molecules
            of the element. Thus, hydrogen, nitrogen and oxygen gases consist of
            molecules in which two atoms combine to give the respective
            molecules of the element. (ii) Compounds: It may be defined as a
            pure substance containing two or more elements combined together in
            a fixed proportion by weight and can be decomposed into these
            elements by suitable chemical methods. Moreover, the properties of a
            compound are altogether different from the constituting elements.
            The compounds have been classified into two types. These are: (i)
            Inorganic Compounds: These are compounds which are obtained from
            non-living sources such as rocks and minerals. A few examples are:
            Common salt, marble, gypsum, washing soda etc. (ii) Organic
            Compounds are the compounds which are present in plants and animals.
            All the organic compounds have been found to contain carbon as their
            essential constituent. For example, carbohydrates, proteins, oils,
            fats etc. 2. Mixtures: The combination of two or more elements or
            compounds which are not chemically combined together and may also be
            present in any proportion, is called mixture. A few examples of
            mixtures are: milk, sea water, petrol, lime water, paint glass,
            cement, wood etc. Types of mixtures: Mixtures are of two types: (i)
            Homogeneous mixtures: A mixture is said to be homogeneous if it has
            a uniform composition throughout and there are no visible boundaries
            of separation between the constituents. For example: A mixture of
            sugar solution in water has the same sugar water composition
            throughout and all portions have the same sweetness. (ii)
            Heterogeneous mixtures: A mixture is said to be heterogeneous if it
            does not have uniform composition throughout and has visible
            boundaries of separation between the various constituents. The
            different constituents of a heterogeneous mixture can be seen even
            with naked eye. For example: When iron filings and sulphur powder
            are mixed together, the mixture formed is heterogeneous. It has
            greyish-yellow appearance and the two constituents, iron and
            sulphur, can be easily identified with naked eye. • Differences
            between Compounds and Mixtures Compounds 1. In a compound, two or
            more elements are combined chemically. 2. In a compound, the
            elements are present in the fixed ratio by mass. This ratio cannot
            change. 3. CompoUnds are always homogeneous i.e., they havethe same
            composition throughout. 4 In a compound, constituents cannot be
            separated by physical methods 5. In a compound, the constituents
            lose their identities i.e., i compound does not show the
            characteristics of the constituting elements. Mixtures 1. In a
            mixture, or more elements or compounds are simply mixed and not
            combined chemically. 2. In a mixture the constituents are not
            present in fixed ratio. It can vary 3. Mixtures may be either
            homogeneous or heterogeneous in nature. 4. Constituents of mixtures
            can be separated by physical methods. 5, In a mixture, the
            constituents do not lose their identities i.e., a mixture shows the
            characteristics of all the constituents . We have discussed the
            physical and chemical classification of matter.
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
