// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/
 
import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, StyleSheet, Image, Linking, Text} from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { Icon, Divider  } from '@rneui/themed';


//Importações dos métodos de ação
import * as MyTheme from './MyTheme';





const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';


  //const tempo
  const [myTime, setTime] = useState(new Date().toLocaleTimeString());
  

  useEffect(() => {
    
    //Horário
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000);

  })

  

  return (
    <SafeAreaView style={{flex: 1}}>
      
      <View style={styles.caixaPerfil} >
        {/*Top Large Image */}
        <Image
        source={require('../src/image/logos/logo-hd.png')}        
        style={styles.sideMenuProfileIcon}
        />

        <View style={styles.caixaPerfilTexto}>
        <Text style={styles.nomePerfil }> 
          Menu Geral {/*props.state.routes[0].params.meusParametros.UserFly */}
        </Text>
        </View>
      </View>
      

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

        <Divider width={2} marginBottom={10} marginTop={10} />

        <DrawerItem
          label="Instagram"
          onPress={() => {Linking.openURL('https://instagram.com/100churrasco')}}
          //onPress={() => props.navigation.navigate('Login')}
          icon= {MyTheme.IconeContact()}
        />
        
        <View style={styles.customItem}>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
          <Text
            onPress={() => {
              Linking.openURL('https://playstore.com/');
            }}>
            {"        "}Nos Avalie
          </Text>
          
        </View>
      </DrawerContentScrollView>

      <Icon style={{paddingBottom:0}}
        name='time'
        type='ionicon'
        color='#e3770b'
        />
       <Text style={{alignSelf:'center', marginBottom:5}}>
        Horário: {myTime}
        </Text> 
      <Divider width={2} marginBottom={10} />


      
      <Text
        style={{
          fontSize: 12,
          textAlign: 'center',
          color: 'grey',
          marginBottom: 20
        }}> 
        By 100% Churrasco Dev.
      </Text>
    </SafeAreaView>
  );
};



//Meu tema
const tema= MyTheme;

  const styles = StyleSheet.create({

  //Imagem Perfil da barra lateral
  sideMenuProfileIcon: {
    marginTop: 45,
    resizeMode: 'center',
    width: 150,
    height: 150,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    borderWidth: 0,
    borderColor: tema.theme.bordaImgMain.primary,
    resizeMode: 'cover',
    //backgroundColor:'blue',Defina flexDirection: 'row', e flexWrap: 'wrap'
    
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  caixaPerfil: { //Estilo da caixa superior navegação, "onde fica a foto"
    height: 235,
    width:215,
    backgroundColor: '#000000',
  },
  caixaPerfilTexto: { //Estilo da caixa index-menu navegação, "onde fica a o texto Menu"
    marginTop: 25,
    height: 36,
    width:215,
    backgroundColor: tema.theme.mainColor.primary,
    
  },
  nomePerfil:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    shadowColor: 'orange',
    paddingEnd: 5,
    backgroundColor: tema.theme.fundoTextoSide.primary,
    alignSelf: 'center',
    //padding: 3,
    margin: 7,
    borderWidth: 2,
    borderRadius:7,
    borderEndWidth: 100,
    borderColor: tema.theme.bordaTextoSide.primary,
    textAlign:'center',
    elevation:3,

  }
});
 
export default CustomSidebarMenu;


function IconeLock (){
  return(({ focused, color, size }) => <Icon color={color} size={size} name={focused ? 'lock' : 'lock'} />)
}




//setTimeout(() => {console.log( "3 sec.")}, 2000); acabar tempo