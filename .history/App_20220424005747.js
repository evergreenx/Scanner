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
  View,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  Button,
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
      <Box flex={1} bgColor={'blue.800'} py={5}>
        {/* <Image source={ReceiptsIcon} /> */}

        <Onboarding
          showSkip={false}
          showNext={false}
          showDone={false}
          pages={[
            {
              backgroundColor: 'blue',
              image: <Image source={require('./assets/Receipts.png')} />,

              subtitle: '',

              title: 'Say goodbye to paper receipts',
            },

            {
              backgroundColor: 'blue',
              image: <Image source={require('./assets/Chart.png')} />,
              subtitle: '',
              title: 'Monitor your daily spending ',
            },

            {
              backgroundColor: 'blue',
              image: <Image source={require('./assets/Location.png')} />,
              subtitle: '',
              title: 'Easily access your receipts anywhere ',
            },
          ]}
        />

        <View>
          <Button bg={'white'} block rounded={'xl'}>
            <Text color={'#404CCF'} fontSize="xl">
              Get Started
            </Text>
          </Button>

          <Button bg="#404CCF" borderColor={'#fff'} block mt={5} rounded={'xl'}>
            <Text fontSize="xl">Login</Text>
          </Button>
        </View>
      </Box>
    </NativeBaseProvider>
  );
};
export default App;
