import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ContainerApp } from './style';
import { Header } from './src/components/Header';
import { Home } from './src/screens/Home';
import axios from 'axios';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({

    Roboto_500Medium,
    Roboto_700Bold

  });





  if (!fontsLoaded && fontError) {
    return null;
  }

  const buscarCEP = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      throw error;
    }
  }
    
  return (
    <ContainerApp>
      <StatusBar backgroundColor={'transparent'} translucent={true}
        barStyle={'default'}
      />

      <Header />

      <Home />
    </ContainerApp>
  );
}


