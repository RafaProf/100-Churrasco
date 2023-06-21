import * as React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet, Button, ImageBackground} from 'react-native';
import 'react-native-gesture-handler';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import Toast, { BaseToast, ErrorToast, InfoToast } from 'react-native-toast-message'

//Importação dos métodos de ação
import * as MyTheme from '../components/MyTheme';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import { Lobby } from './Lobby';

//Config Toast
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
        fontSize: 16,
        fontWeight: '400'
      }}
      text2Style={{
        fontSize: 13,
        fontWeight: '600'
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

//Constantes 
const Stack = createNativeStackNavigator ();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
 
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.pnng',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
                <Text style={{color:'white'}}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

//Chamada de screen's
function AgendaScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Lobby}
        options={{
          headerShown: false,
          headerLeft: () => (
            <NavigationDrawerStructure 
              navigationProps={navigation}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function CardapioStack({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export default function Inicial({route, navigation}, props) {

   //Cuidando da barra de navegação - android
   NavigationBar.setVisibilityAsync('hidden');
   NavigationBar.setBehaviorAsync('inset-swipe');


  return(
    
<>

      
<Drawer.Navigator 
initialRouteName="Home"
detachInactiveScreens={true}

screenOptions={{
  drawerActiveTintColor: '#e3770b',
  //itemStyle: {marginVertical: 5},
  itemStyle: {
    height: 52,
    opacity:0.8,               
    backgroundColor: 'transparent'      },
  drawerStyle: {
   //backgroundColor: '#c6cbef',
    width: 215,
  },
}}
drawerContent={(props) => <CustomSidebarMenu  {...props}
linkFoto={(`http://intellissis2.ddns.net/${route.params.UserFly}.jpeg`)} />}>

  <Drawer.Screen //Tela principal - nav
    name="Home"

    options={{drawerLabel: 'Sobre', drawerIcon: MyTheme.IconeHome(), 
    headerShown: true, headerTransparent: true,
    headerStyle:{}, headerTintColor:'#fff', headerTitleAlign:'center',  headerTitle:'Sobre a Empresa',
    headerTitleStyle:{fontWeight: 'normal'} }}
    initialParams={{ meusParametros: route.params }} //IMPORTANTE
    component={Lobby} 
  />

<Drawer.Screen //Tela Cardapio - nav
    name="Cardapio"

    options={{drawerLabel: 'Cardápio', drawerIcon: MyTheme.IconeCardapio(), 
    headerShown: true, headerTransparent: true,
    headerStyle:{}, headerTintColor:'#fff', headerTitleAlign:'center',  headerTitle:'Cardápio',
    headerTitleStyle:{fontWeight: 'normal'} }}
    initialParams={{ meusParametros: route.params }} //IMPORTANTE
    component={CardapioStack} 
  />

<Drawer.Screen //Tela Serviços - nav
    name="Servicos"

    options={{drawerLabel: 'Serviços', drawerIcon: MyTheme.IconeService(), 
    headerShown: true, headerTransparent: true,
    headerStyle:{}, headerTintColor:'#fff', headerTitleAlign:'center',  headerTitle:'Serviços',
    headerTitleStyle:{fontWeight: 'normal'} }}
    initialParams={{ meusParametros: route.params }} //IMPORTANTE
    component={CardapioStack} 
  />

<Drawer.Screen //Tela Agendamento - nav
    name="Agendamento"

    options={{drawerLabel: 'Agendamento', drawerIcon: MyTheme.IconeAgenda(), 
    headerShown: true, headerTransparent: true,
    headerStyle:{}, headerTintColor:'#fff', headerTitleAlign:'center',  headerTitle:'Agendamento',
    headerTitleStyle:{fontWeight: 'normal'} }}
    initialParams={{ meusParametros: route.params }} //IMPORTANTE
    component={AgendaScreenStack} 
  />

<Drawer.Screen //Tela Login - nav
    name="Login"

    options={{drawerLabel: 'Login Adm', drawerIcon: MyTheme.IconeLock(), 
    headerShown: true, headerTransparent: true,
    headerStyle:{}, headerTintColor:'#fff', headerTitleAlign:'center',  headerTitle:'BackOffice',
    headerTitleStyle:{fontWeight: 'normal'} }}
    initialParams={{ meusParametros: route.params }} //IMPORTANTE
    component={CardapioStack} 
  />

</Drawer.Navigator>
<Toast config={toastConfig}/>
</>


  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center"
  },
})