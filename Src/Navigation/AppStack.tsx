import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import MapScreen from '../Screens/MapScreen';
//

export const AppStack = createNativeStackNavigator();
export const AppStackNavigation = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="HomeScreen" component={HomeScreen} />
      <AppStack.Screen name="MapScreen" component={MapScreen} />
    </AppStack.Navigator>
  );
};
