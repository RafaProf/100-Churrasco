import React from 'react';
import Toast, { BaseToast, ErrorToast, InfoToast } from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



//Importação das screens
import home from './screens/Home';
import inicial from './screens/Inicial';

//Configuração dos Toast's
const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'purple' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
        fontWeight: '400'
      }}
      text2Style={{
        fontSize: 14,
        fontWeight: '400'
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17
      }}
      text2Style={{
        fontSize: 15
      }}
    />
  ),
  info: (props) =>(
    <InfoToast
      {...props}
      text1Style={{
        fontSize: 17
      }}
      text2Style={{
        fontSize: 15
      }}
    />
  ),
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
  tomatoToast: ({ text1, props }) => (
    <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  )
};


//Função principal
export default function App() {

  const Stack = createNativeStackNavigator();

  //retorno principal
  return (

    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Aber'
      
      screenOptions={{
        title: 'Login',
        headerStyle: {
          backgroundColor: '#e3770b',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      
      >
        <Stack.Screen name="Home" component={home}
          options={{ title: 'Home',  headerShown: false, headerTransparent: true}}
         />
         <Stack.Screen name="Inicial" component={inicial} initialParams={{ itemId: 42 }}
          options={{ title: 'Início', headerShown: false, }}
        />
          

      </Stack.Navigator>
      
      </NavigationContainer>

      <Toast config={toastConfig} />
      </>


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
