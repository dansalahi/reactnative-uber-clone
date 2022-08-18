import {Text, View} from 'react-native';
import React from 'react';
import Screen from '../Components/Theme/Screen';
import tw from 'twrnc';

const HomeScreen = () => {
  return (
    <Screen>
      <View>
        <Text style={tw`text-blue-500 p-10 m-10`}>HomeScreen</Text>
      </View>
    </Screen>
  );
};

export default HomeScreen;
