import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './Navigation';
import {AppStackNavigation} from './AppStack';

export const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStackNavigation />
    </NavigationContainer>
  );
};
