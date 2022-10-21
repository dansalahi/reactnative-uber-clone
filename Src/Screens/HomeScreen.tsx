/* eslint-disable react-native/no-inline-styles */
import {Image, Text, TouchableOpacity, View, Animated} from 'react-native';
import React from 'react';
import Screen from '../Components/Theme/Screen';
import tw from 'twrnc';
import {Images} from '../Assets';

import Ant from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const listData = [
  {
    id: 1,
    title: 'Get a ride',
    image: Images.DriverLogo,
    screen: 'MapScreen',
  },
  {
    id: 2,
    title: 'Find a Food',
    image: Images.FoodLogo,
    screen: 'FoodScreen',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <View style={tw`flex flex-row items-center justify-center`}>
        <Animated.FlatList
          keyExtractor={item => item.id.toString()}
          horizontal
          contentContainerStyle={tw`items-center justify-center`}
          data={listData}
          style={tw`flex flex-col`}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.screen as never)}
              style={tw`flex w-40 px-2 py-4 m-2 bg-gray-200 rounded shadow`}>
              <View style={tw`flex flex-col items-center justify-center`}>
                <Image
                  style={{width: 120, height: 120, resizeMode: 'contain'}}
                  source={item.image}
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Ant name="right" color={'#3b5998'} size={18} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </Screen>
  );
};

export default HomeScreen;
