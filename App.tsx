import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/theme';
import Routes from './src/Routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
   <ThemeProvider theme={theme}>
      <NavigationContainer>
      <Routes/>
    </NavigationContainer>
   </ThemeProvider>
  )
}

export default App;