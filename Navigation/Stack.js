import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './Tab';

import Maths from '../Screen/MathsBook';
import Physics from '../Screen/PhysicsBook';
import Chem from '../Screen/ChemBook';
import Bio from '../Screen/BioBook';

import MathsNotes from '../Screen/MathsNotes';
import PhysicsNotes from '../Screen/PhysicsNotes';
import ChemNotes from '../Screen/ChemNotes';
import BioNotes from '../Screen/BioNotes';

import Sets from '../Notes/Sets';
import Angle from '../Notes/Angle';
import Kinematics from '../Notes/Kinematics';
import Laws from '../Notes/Laws';
import Basic_concept from '../Notes/Basic_concept';
import Structure from '../Notes/Structure';
import Plant from '../Notes/Plant';
import Animal from '../Notes/Animal';

import RDSharma from '../book/RDSharma';
import SChand from '../book/SChand';
import Arihant from '../book/Arihant';
import Oxford from '../book/Oxford';

const Stack = createStackNavigator();

export default class StackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={TabNavigator} />

        <Stack.Screen name="Mathematics" component={Maths} />
        <Stack.Screen name="Physics" component={Physics} />
        <Stack.Screen name="Chemistry" component={Chem} />
        <Stack.Screen name="Biology" component={Bio} />

        <Stack.Screen name="Mathematics_Notes" component={MathsNotes} />
        <Stack.Screen name="Physics_Notes" component={PhysicsNotes} />
        <Stack.Screen name="Chemistry_Notes" component={ChemNotes} />
        <Stack.Screen name="Biology_Notes" component={BioNotes} />

        <Stack.Screen name="Sets" component={Sets} />
        <Stack.Screen name="Angle" component={Angle} />
        <Stack.Screen name="Kinematics" component={Kinematics} />
        <Stack.Screen name="Laws" component={Laws} />
        <Stack.Screen name="Basic_concept" component={Basic_concept} />
        <Stack.Screen name="Structure" component={Structure} />
        <Stack.Screen name="Plant" component={Plant} />
        <Stack.Screen name="Animal" component={Animal} />

        <Stack.Screen name="RDSharma" component={RDSharma} />
        <Stack.Screen name="SChand" component={SChand} />
        <Stack.Screen name="Arihant" component={Arihant} />
        <Stack.Screen name="Oxford" component={Oxford} />
      </Stack.Navigator>
    );
  }
}
