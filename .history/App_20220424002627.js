/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Image} from 'react-native';
import {SvgUri} from 'react-native-svg';
import ReceiptsIcon from './assets/Receipts.svg';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
} from 'native-base';
import NativeBaseIcon from './src/components/NativeBaseIcon';

// Color Switch Component
function ToggleDarkMode() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
const App = () => {
  return (
    <NativeBaseProvider>
      <Box flex={1}>
        {/* <Image source={ReceiptsIcon} /> */}
        <ReceiptsIcon />
        <Onboarding
          showSkip={false} 
      showNext={false}
          pages={[
            {
              backgroundColor: '#ddd',
              image: <Image source={require('./assets/Receipts.svg')} />,

              subtitle: '',

              title: 'Say goodbye to paper receipts',
            },

            {
              backgroundColor: '#fff',
              image: (
                <Image source={ReceiptsIcon} style={{width: 50, height: 50}} />
              ),
              subtitle: '',
              title: 'Monitor your daily spending ',
            },

            {
              backgroundColor: '#fff',
              image: (
                <Image
                  source={require('./assets/Receipts.svg')}
                  style={{width: 100, height: 100}}
                />
              ),
              subtitle: '',
              title: 'Easily access your receipts anywhere ',
            },
          ]}
        />
      </Box>
    </NativeBaseProvider>
  );
};
export default App;
