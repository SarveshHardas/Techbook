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

export default class Animal extends Component {
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

        <Text style={styles.header}>Animal Kingdom</Text>

        <ScrollView>
          <Text style={styles.textM}>
            Millions of species of animals have been described and it becomes
            more necessary to classify them to assign a systematic position.
            Animals are classified on the basis of arrangement of cells, body
            symmetry, nature of coelom, pattern of digestive, circulatory and
            reproductive system. Incomplete digestive system has one opening but
            complete digestive system has two opening- mouth and anus. Open
            circulatory system- blood is pumped out of heart and cells and
            tissue are directly bathed in it. Closed circulatory system- blood
            is circulated through arteries, veins and capillaries. The animals
            in which cells are arranged in two embryonic layer, external
            ectoderm and internal endoderm are called diploblastic. Eg. Porifera
            and Cnidaria. The animals in which developing embryo has a third
            germinal layer, mesoderm besides ectoderm and endoderm are called
            triploblastic. Eg. Platyhelminthes, Chordates. The body cavity which
            is lined by mesoderm is called coelom. Animals possessing coelom are
            called coelomate (Annelida, Chordates, Mollusca). In some animals
            cavity is not lined by mesoderm but scattered as pouches in between
            ectoderm and endoderm, are called pseudo-coelomates (Aschelminthes).
            The animals in which body cavity is absent are called acoelomate
            (Platyhelminthes). In some animals, body is externally and
            internally divided into segments with serial repetition as in
            earthworm, called metameric segmentation. CLASSIFICATION OF ANIMALS
            Phylum Porifera- Members of this phylum are commonly known as
            sponges. Mostly marine, asymmetrical and have cellular level of
            organization. They have water transport or canal system. Water
            enters through minute pores, Ostia into central cavity Spongocoel,
            from where it goes out through Osculum. Nutrition, respiration and
            excretion is performed by pathway of water transport system.
            Skeleton made up of spicules or spongin fibres. Egg and sperms are
            produced by same organism (hermaphrodite). Asexual reproduction by
            fragmentation and sexual reproduction by gametes formation.
            Fertilisation internal and development is indirect. Example– Sycon,
            Spongilla. Phylum Cnidaria ( Coelenterate)- They are aquatic, mostly
            marine, sessile, free swimming, radially symmetrical animals. They
            exhibit tissue level of organization, diploblastic, coelomate with
            single opening. They show two types of body called polyp and medusa.
            Polyp is sessile, fixed, and cylindrical, without gonads. Example:
            Hydra, Adamsia. Medusa is free swimming, umbrella like having gonads
            like Aurelia and Jelly fish. Some cnidarians exhibits both forms
            (Obelia). Polyp produce medusa asexually and medusa produce polyp
            sexually. Phylum Ctenophora- Commonly known as the Comb Jellies or
            Sea Walnuts. Exclusively marine, diploblastic, radially symmetrical,
            with tissue level of organization. Body bears eight ciliated comb
            plates which help in locomotion. Bioluminescence (to emit light) is
            present in Ctenophores. Are Hermaphrodite, fertilisation is
            external, development indirect. Example- Ctenoplana, Pleurobranchia.
            Phylum Platyhelminthes (The Flat worms) Dorso-ventrally flattened
            body, bilaterally symmetrical, triploblastic, acoelomate with organs
            levels of organization. Hooks and sucker are present in parasitic
            forms. Flame cells help in osmoregulation and excretion.
            Fertilisation is internal, development is indirect. They are
            hermaphrodite. Example- Taenia, Planaria, Fasciola. Phylum
            Aschelminthes (The Round Worm) They may be free-living, aquatic,
            terrestrial or parasitic in plants or animals. Bilaterally
            symmetrical, triploblastic, pseudo coelomate. Alimentary canal is
            complete with well-developed muscular pharynx. They are Dioecious.
            Females are longer than male. Example- Ascaris (round worm),
            Wucheriria(filarial worm), Ancyclostoma. Phylum Annelida Aquatic or
            terrestrial, bilaterally symmetrical, segmented with organ system
            level of organization. Aquatic Annelids like Nereis possesses
            lateral appendages parapodia, for swimming. Nephridia help in
            osmoregulation and excretion. Neural system consists of paired
            ganglia connected by lateral nerves to a double ventral nerve cord.
            Dioecious (Nereis) or monocious (earthworm, leech) Example-
            Pheretima (earthworm), Hirunidaria (Blood sucking leech). Phylum
            Arthropoda Largest phylum of animals which includes insects. They
            have organ system of organization. They are triploblastic,
            coelomate, bilaterally symmetrical with chitinous exoskeleton. Body
            consists of head, thorax and abdomen, jointed appendages (jointed
            feet). Respiratory organs are gills, book lungs or tracheal system
            with open circulatory system. Excretion through malpighian tubules,
            sense organs antenna or eyes. Fertilisation internal, mostly
            oviparous. Example- Economically important – Apis (honey bee),
            Bombyx (silk worm). Vectors – Anopheles, Ades, Culex (mosquito).
            Living fossils – Limulus (king crab) Phylum Mollusca Terrestrial or
            aquatic, organ level of organization, bilaterally symmetrical,
            triploblastic and coelomate. Body divided into head, muscular foot
            and visceral hump. Unsegmented and covered with calcareous shell.
            Feather like gills are present between hump and mantle. Mouth
            contains file like rasping organ for feeding called radula. Example-
            Pila, Octopus. Phylum Echinodermata (The Spiny Skinned Animals)
            Endoskeleton of calcareous ossicles, marine with organ system of
            organization. Triploblastic, coelomate, presence of water vascular
            system help in locomotion, capture of food and respiration. Sexes
            are separate, fertilisation is external and development is indirect.
            Example- Asterias (Star fish), Cucumaria (Sea cucumber), Antedon
            (Sea lily). Phylum Hemichordata Worm-like marine animals with organ
            system of organization, bilaterally symmetrical, triploblastic and
            coelomate animals. Body is cylindrical, composed of anterior
            proboscis, a collar and a long trunk. Open circulatory system,
            respiration by gills, excretory organ is proboscis glands. Sexes are
            separate, fertilisation external, indirect development. Example-
            Balanoglossus, Saccoglossus. Phylum Chordates Presence of notochord,
            have dorsal hollow nerve chord and paired pharyngeal gill slits.
            Bilaterally symmetrical, triploblastic, coelomate with organs system
            levels of organization. Closed circulatory system, ventral heart,
            post-anal tail is present. In Urochordata, notochord is present only
            in larval tail. In Cephalochordate it extends from head to tail and
            persists throughout the life. Vertebrata possesses notochord in
            embryonic period which is replaced by vertebral column in the
            adults. Sub-phylum Vertebrata is further divided into two division
            Agnatha( lacks jaw) and Gnathostomata ( bears jaw). Gnathostomata is
            further divided into two super class- Pisces( bears fins) and
            Tetrapoda (bears limbs). Class Cyclostomata (Circular mouthed
            fishes)– They are ectoparasites on some fishes. They have sucking
            and circular mouth without jaws. Body devoid of scales, gill slits
            for respiration, cranium and vertebral column is cartilaginous.
            Circulation is closed type. They are marine but migrate to fresh
            water for spawning and die after few days. Larva return to seas
            after metamorphosis. Example– Petromyzon (Lamprey), Maxine (Hag
            fish). Class Chondrichthyes (The Cartilaginous Fish) They are
            marine, streamlined body, have cartilaginous endoskeleton, cold
            blooded, tough skin with minute placoid scales. Gill slits are
            separate without operculum. They have powerful jaw and are
            predators. Air bladder is absent, hence to avoid sinking swims
            constantly. Heart is two chambered, cold blooded (Poikilothermous).
            Sexes separate. Males have pelvic fins which bear claspers. Internal
            fertilisation, many are viviparous. Electric organ is present in
            Torpedo and Poison sting in Trygon Example- Scoliodon (Dog fish),
            Carcharodron (great white shark). Class Ostechthyes (The body fish)
            Marine and fresh water both have bony endoskeleton. Streamlined body
            with four pair of gills covered by operculum. Skin is covered with
            scales, air bladder is present, and heart is two chambered, cold
            blooded. Sexes are separate, fertilisation external, oviparous and
            development direct. Example Marine- Hippocampus (Sea horse),
            Exocoetus (Flying fish). Fresh water- Labeo (Rohu), Catla ,Clarias
            (Magur).
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
