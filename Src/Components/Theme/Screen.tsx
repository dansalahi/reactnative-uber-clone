import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

interface ScreenProps {
  children: React.ReactNode;
  style?: any;
  gap?: boolean;
}

const Screen: React.FC<ScreenProps> = ({children, style, gap = true}) => {
  return (
    <SafeAreaView style={[styles.screen, gap ? styles.gap : {}, style]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gap: {
    paddingHorizontal: 10,
  },
});

export default Screen;
