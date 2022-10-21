import React from 'react';
import {Button, Text, View} from 'react-native';
import Screen from '../Components/Theme/Screen';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';

const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <Screen style={tw`flex flex-row items-center justify-center`}>
      <View>
        <Text>MapScreen</Text>
        <Button
          title="back"
          onPress={() => navigation.navigate('HomeScreen' as never)}
        />
      </View>
    </Screen>
  );
};

export default MapScreen;
