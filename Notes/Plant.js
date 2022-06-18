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

export default class Plant extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            this.props.navigation.navigate('Biology_Notes');
          }}>
          <Image
            style={styles.backButtonImage}
            source={require('../assets/backButton.png')}
          />
        </TouchableOpacity>

        <Text style={styles.header}>Plant Kingdom</Text>

        <ScrollView>
          <Text style={styles.textM}>
            Eukaryotic, multicellular, chlorophyll containing and having cell
            wall, are grouped under the kingdom Plantae. It is popularly known
            as plant kingdom. Phylogenetic system of classification based on
            evolutionary relationship is presently used for classifying plants.
            Numerical Taxonomy use computer by assigning code for each character
            and analyzing the features. Cytotaxonomy is based on cytological
            information like chromosome number, structure and behaviour.
            Chemotaxonomy uses chemical constituents of plants to resolve the
            confusion. Algae: These include the simplest plants which possess
            undifferentiated or thallus like forms, reproductive organs single
            celled called gametangia. It includes only Algae. Characteristic of
            Algae Plant body is thallus, which may be unicellular, colonial,
            filamentous or parenchymatous. Usually aquatic but a few are also
            found in moist terrestrial habitats like tree trunks, wet rocks,
            moist soil, etc. Vascular tissues and mechanical tissues are absent.
            Reproduction is vegetative by fragmentation, asexual by spore
            formation (zoospores) and sexual reproduction by fusion of two
            gametes which may be Isogamous (Spirogyra), Anisogamous
            (Chlamydomonous) or Oogamous (Volvox). Life cycle is various-
            haplontic, diplontic or diplohaplontic. Economic importance- A
            number of brown algae ( Laminaria, Sargassum) are used as food in
            some countries. Fucus and Laminaria are rich source of Iodine.
            Laminaria and Ascophyllum have antibiotic properties. Alginic acid
            is obtained from Fucus and Sargassum, which is used as emulsions.
            Bryophytes – They are non-vascular mosses and liverworts that grow
            in moist shady region. They are called amphibians of plants kingdom
            because these plants live on soil but dependent on water for sexual
            reproduction. Characteristic features- Live in damp and shady
            habitats, found to grow during rainy season on damp soil, rocks,
            walls, etc. The dominant phase or plant body is free living
            gametophyte. Roots are absent but contain rhizoids Vegetative
            reproduction is by fragmentation, tubers, gemmae, buds etc. sex
            organs are multicellular and jacketed. The male sex organ is called
            antheridium. They produce biflagellate antherozoids. The female sex
            organ called archegonium is flask-shaped and produces a single egg.
            Sporophyte is dependent on gametophyte for nourishment. Bryophytes
            Hepaticopsida (Liverworts) The plant body of a liverwort is
            thalloid, e.g., Marchantia. The thallus is dorsiventral and closely
            appressed to the substrate. Asexual reproduction in liverworts takes
            place by fragmentation, or by the formation of specialised
            structures called gemmae. Gemmae are green, multicellular, asexual
            buds, which develops in small receptacles called gemma cups. The
            gemmae becomes detached from the parent body and germinate to form
            new individuals During sexual reproduction, male and female sex
            organs are produced either on the same or on different thalli. The
            sporophyte is differentiated into a foot, seta and capsule. Spores
            produced within the capsule germinate to form free-living
            gametophytes. Bryopsida (Mosses) The gametophyte of mosses consists
            of two stages- the first stage is protonema stage, which develops
            directly from spores. It is creeping, green and frequently
            filamentous. The second stage is the leafy stage, which develops
            from secondary protonema as lateral bud having upright, slender axes
            bearing spirally arranged leaves. Vegetative reproduction is by the
            fragmentation and budding in secondary protonema. In sexual
            reproduction, the sex organs antheridia and archegonia are produced
            at the apex of the leafy shoots. Sporophytes in mosses are more
            developed and consist of foot, seta and capsule. Common examples are
            Funaria, Polytrichum, Sphagnum etc.Pteridophytes They are seedless
            vascular plants that have sporophytic plant body and inconspicuous
            gametophyte. Sporophytic plant body is differentiated into true
            stem, roots and leaves. Vascular tissue are present but vessels are
            absent from xylem and companion cells and sieve tube are absent.
            Sporophytes bear sporangia that are subtend by leaf like appendages
            called sporophylls. In some plants (Selaginella) compact structure
            called strobili or cone is formed. Sporangia produce spores by
            meiosis in spore mother cells. Spores germinate to produce
            multicellular thalloid, prothallus. Gametophyte bears male and
            female sex organ called antheridia and archegonia. Water is required
            for fertilisation of male and female gametes. Most of Pteridophytes
            produce spores of similar kind (homosporous) but in Selginella and
            Salvinia, spores are of two kinds (heterosporous) larger called
            megaspore that produce female gametophyte and smaller microspore
            that produce male gametes. Gymnosperms: Gymnosperms are those plants
            in which the ovules are not enclosed inside the ovary wall and
            remain exposed before and after fertilisation. They are perennial
            and woody, forming either bushes or trees. Some are very large
            (Sequoia sempervirens) and others are very small (Zamia pygmia).
            Stem may be unbranched(Cycas) or branched(Pinus). Root is taproot.
            Leaves may be simple or compound. They are heterosporous, produce
            haploid microspore and megaspore in male and female Strobili
            respectively. Male and female gametophytes do not have independent
            free-living existence. Pollination occurs through air and zygote
            develops into embryo and ovules into seeds. These seeds are naked.
            Example- Pines, Cycus, Cedrus, Ginkgo, etc. Angiosperms Pollen grain
            and ovules are developed in specialized structure called flower.
            Seeds are enclosed inside the fruits. Size varies from almost
            microscopic Wolfia (0.1cm)to tall tree Eucalyptus (more than 100m
            The male sex organs in a flower is the stamen. It contains pollen
            grain. The female sex organs in a flower is the pistil or the
            carpel. Pistil consists of an ovary enclosing one or many ovules.
            Within ovules are present highly reduced female gametophytes termed
            embryo-sacs. Each embryo-sac has a three-celled egg apparatus – one
            egg cell and two synergids, three antipodal cells and two polar
            nuclei. The polar nuclei eventually fuse to produce a diploid
            secondary nucleus. Angiosperms are further classified into:
            Monocotyledons Dicotyledons Double fertilisation- Each pollen grain
            produce two male gametes. One gametes fuse with egg to form embryo.
            This is called Syngamy. Other gametes fuse with two polar nuclei to
            form endosperm, triple fusion. Since fertilisation takes place
            twice, it is called double fertilisation. Alternation of generation
            Different plant groups complete their life cycles in different
            patterns. Angiosperms complete their life cycle in two phases- a
            diploid sporophytes and haploid gametophyte. The two follows each
            other. This phenomenon is called alternation of generation.
            Haplontic- Saprophytic generation is represented by only the
            one-celled zygote. Meiosis in zygote results into haploid spores to
            form gametophytes, which is the dominant vegetative phase. Example-
            Volvox, Spirogyra etc. Diplontic- Diploid sporophytes is dominant,
            independent, photosynthetic plants. The gametophyte is represented
            by single to few celled. All seed bearing plants fall under this
            category. Haplo-diplontic- Both phases are multicellular and
            intermediate condition is present. It is present in Bryophytes and
            Pteridophytes.
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
