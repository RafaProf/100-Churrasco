import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect  } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import { Button } from '@rneui/base';
import { Icon  } from "@rneui/themed";
import * as NavigationBar from 'expo-navigation-bar';

export function Cardapio({navigation, route}) {

return(
    <View style={{ flex: 1,  backgroundColor:'#ddd', justifyContent: 'center' }}>

    <StatusBar backgroundColor="transparent" style="light" animated={true} translucent={true}/>

    <ImageBackground source={require('../src/image/star.gif')} resizeMode="cover" style={styles.image}>



    <View style={styles.modalView}>


    <ScrollView contentContainerStyle={styles.scrollView}>      

{/*Item 1 do cardápio */}
    <Text style={{color:'white', fontSize:25, marginBottom:20, marginTop:30, backgroundColor:'black'}}>
           {'      '} Churrasco Completo {'        '}
        </Text>
        <Text style={{color:'black', backgroundColor:'white', borderColor:'orange', borderWidth:1,
           fontSize:16, marginBottom:20, marginTop:0, textAlign:'center'}}
          >Acompanha Arroz Branco, Farofa Caseira, Vinagrete e Maionese Gourmet</Text>
          <Image 
        resizeMode='contain'
        source={require('../src/image/capa7.jpg')}  
        style={{width: 300, height:300, opacity:1, marginBottom: 30, marginTop:10 }} 
        />

{/*Item 2 do cardápio */}
<Text style={{color:'white', fontSize:25, marginBottom:20, marginTop:30, backgroundColor:'black'}}>
           {'      '} Feijoada Completa {'        '}
        </Text>
        <Text style={{color:'black', backgroundColor:'white', borderColor:'orange', borderWidth:1,
           fontSize:16, marginBottom:20, marginTop:0, textAlign:'center'}}
          >Acompanha Arroz Branco, Farofa Caseira, Vinagrete e Couve Gourmet</Text>
          <Image 
        resizeMode='contain'
        source={require('../src/image/capa3.jpg')}  
        style={{width: 300, height:300, opacity:1, marginBottom: 30, marginTop:10 }} 
        />

{/*Item 3 do cardápio */}
<Text style={{color:'white', fontSize:25, marginBottom:20, marginTop:30, backgroundColor:'black'}}>
           {'      '} Caldo de Macaxeira {'        '}
        </Text>
        <Text style={{color:'black', backgroundColor:'white', borderColor:'orange', borderWidth:1,
           fontSize:16, marginBottom:20, marginTop:0, textAlign:'center'}}
          >Acompanha Arroz Branco, Farofa Caseira e Vinagrete. O caldo leva calabresa, queijo coalho, bacon e outros itens.</Text>
          <Image 
        resizeMode='contain'
        source={require('../src/image/capa22.jpg')}  
        style={{width: 300, height:300, opacity:1, marginBottom: 20, marginTop:10 }} 
        />
    
{/*Item 4 do cardápio */}
<Text style={{color:'white', fontSize:25, marginBottom:20, marginTop:30, backgroundColor:'black'}}>
           {''} Calabresa | Batata | Pastel {'  '}
        </Text>
        <Text style={{color:'black', backgroundColor:'white', borderColor:'orange', borderWidth:1,
           fontSize:16, marginBottom:20, marginTop:0, textAlign:'center'}}
          >Um mix de frituras saindo em forma de petisco para Happyhour's e afins</Text>
          <Image 
        resizeMode='contain'
        source={require('../src/image/capa17.jpg')}  
        style={{width: 300, height:300, opacity:1, marginBottom: 30, marginTop:10 }} 
        />
    </ScrollView>


    </View>



    </ImageBackground>
    </View>
);

}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: "center"
    },
    modalView: {
      position: 'relative',
      width: '90%',
      height:600,
      backgroundColor: 'grey',
      opacity: 0.9,
      alignSelf:'center',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#e3770b',
      backgroundColor: 'white',
      padding:10,
    },
    scrollView: {
      alignItems:'center'
    },

  })