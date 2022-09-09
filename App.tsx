import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './Src/Store/Store';
import HideKeyboard from './Src/Utils/HideKeyboard';
import tw from 'twrnc';
import {RootNavigation} from './Src/Navigation/Root';
import 'react-native-gesture-handler';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaProvider style={tw`bg-white h-full`}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <HideKeyboard>
          <RootNavigation />
        </HideKeyboard>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
