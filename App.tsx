import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './Src/Store/Store';
import HideKeyboard from './Src/Utils/HideKeyboard';
import HomeScreen from './Src/Screens/HomeScreen';
import tw from 'twrnc';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaProvider style={tw`bg-white h-full`}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <HideKeyboard>
          <HomeScreen />
        </HideKeyboard>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
