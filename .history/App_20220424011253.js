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
  const onBoardingTitleStyle = {
    fontSize: 38,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  };
  return (
    <NativeBaseProvider>
      <Box bgColor={'blue.800'}>
        {/* <Image source={ReceiptsIcon} /> */}

        <Box px={5} flex={1}>
         

          <View>
            <Button bg={'white'} py={3} block rounded={'xl'}>
              <Text color={'#404CCF'} fontSize="xl">
                Get Started
              </Text>
            </Button>

            <Button py={3} borderColor={'#fff'} block mt={5} rounded={'xl'}>
              <Text color="#fff" fontSize="xl">
                Login
              </Text>
            </Button>
          </View>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};
export default App;
