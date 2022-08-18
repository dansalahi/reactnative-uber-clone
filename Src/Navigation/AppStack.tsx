import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
//

export const AppStack = createNativeStackNavigator();
export const AppStackNavigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="HomeScreen" component={HomeScreen} />
    </AppStack.Navigator>
  );
};
