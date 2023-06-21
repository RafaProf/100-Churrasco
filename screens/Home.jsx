
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect  } from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import { Button } from '@rneui/base';
import { Icon  } from "@rneui/themed";
import * as NavigationBar from 'expo-navigation-bar';
import { version } from '../package.json';
//import Toast from 'react-native-toast-message';

//MAIN
export default function App({navigation}) {
  //console.log(navigation)
  
  //Declaração de variáveis
  const [count, setCount] = useState(0);
  const [textButtonHit, setText] = useState("Whatsapp");
  const [visible, setVisible] = useState(true);

const toggleOverlay = () => {
  setVisible(!visible);
};


  //Barra do android - botões
  NavigationBar.setVisibilityAsync('visible');
  NavigationBar.setBackgroundColorAsync('#000000');
  NavigationBar.setPositionAsync('absolute');

  //Pós - Ciclo de vida
  useEffect(() => {
    title = `Você clicou ${count} vezes`;
  }, [count]);// Apenas re-execute o efeito quando o count mudar

    // 4. Use um efeito para atualizar o título
    useEffect(function updateTitle() {
      title = "test" + ' ' + count;
    });



    
  //Retorno principal
  return (


    
    <><View style={styles.container2}>


      
      <Image 
      resizeMode='contain'
        source={require('../src/image/logos/logo-hd.png')}  
        style={{width: 220, height:220 }} 
    />
      <StatusBar style="auto" />
      <Text color="rgb(73, 143, 255)"> Churrasco App - {version}</Text>
     
    </View>
    


  
    
    <View style={styles.container}>

        <Text style={styles.subtitle}>100% Churrasco</Text>

      </View>
      
      
      <View style={styles.container3}>

      <Image 
        source={require('../src/image/open2.gif')}  
        style={{width: 200, height:150,  }} 
    />

      <Text style={styles.textoPadrao}>Buffet e Eventos{"\n"}</Text>   
      

      <Button type="solid" color= "#e3770b" titleStyle={{ color: '#fff', marginHorizontal: 2 }}
      onPress={() => Linking.openURL('https://wa.me/5584994783521?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento')}
      buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      }}>

        {textButtonHit}{" "}

        <Icon 
        name='whatsapp'
        type='font-awesome'
        color='#fff' />
      </Button>  

      <Button type="solid" color= "#e3770b" titleStyle={{ color: '#fff', marginHorizontal: 2 }}
      onPress={() => navigation.navigate('Inicial', {
        itemId: 86,
        otherParam: {name: "John", age: 30, city: "New York"}, //Enviando dados pra proxima tela
      })}
      buttonStyle={{ backgroundColor: '#e3770b' }}
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      }}>
        
        Bem Vindo{" "}
        <Icon name="home" color="white" />
        
      </Button>



      </View>
      
      </>

      

  );
}


//Linhas de style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3770b',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  container2: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4
  },
  container3: {
    flex: 6,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    marginTop: 1,
    
  },

  button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#e3770b'
    },

  title:{
    fontSize:28,
  },
  subtitle:{
    fontSize:23,
    alignItems: 'center',
    color: '#fff',
    alignSelf: 'auto',
    paddingTop: 0,
    fontWeight:'bold'
  },
  textoPadrao:{
    fontSize:18,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 4,
  },
  overlayStyle:{
   backgroundColor:'transparent',
   justifyContent:'center',
   alignItems:'center',
   alignSelf:'center',
   alignContent:'center',
   
  },
});