import * as React from 'react';
import {View, Image, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
//import Toast from 'react-native-toast-message';
import { StatusBar } from 'expo-status-bar';


//Tela inicial assim que passa o 'bem vindo'
export function Lobby({navigation, route}){


    return(
        <View style={{ flex: 1,  backgroundColor:'#ddd', justifyContent: 'center' }}>

        <StatusBar backgroundColor="transparent" style="light" animated={true} translucent={true}/>

        <ImageBackground source={require('../src/image/star.gif')} resizeMode="cover" style={styles.image}>


        
        <View style={styles.modalView}>

          <Text style={{color:'#e3770b', backgroundColor:'white', borderColor:'orange', borderWidth:2,
           fontSize:20, marginBottom:20, marginTop:30}}
          >{' '}Mais de 20 anos no mercado</Text>

        <ScrollView contentContainerStyle={styles.scrollView}>

        <Image 
        resizeMode='contain'
        source={require('../src/image/capa.jpg')}  
        style={{width: 300, height:300, opacity:1, marginBottom: 40 }} 
        />

        <Text style={{color:'white', fontSize:16}}>
            {'      '}Focando sempre um atendimento de excelência e serviços e cardápios de qualidade, a Empresa
            Buffet 100% Churrasco tem se consolidado no mercado como umas das referências em serviços
            de churrasco e buffet. Com uma gestão empenhada, nossos serviços abrangem toda gama alimentícia
            do evento e seus periféricos para que tudo ocorra com o melhor desempenho possível.
        </Text>

        <Image 
        resizeMode='contain'
        source={require('../src/image/capa6.jpg')}  
        style={{width: 300, height:300, opacity:1, marginBottom: 20, marginTop:20 }} 
        />

        <Text style={{color:'white', fontSize:16}}>
            {'      '}Com uma culinária apurada, seus diretores montaram cardápios para todos os gostos
            atendendo os mais diversos paladares.
        </Text>

        <Image 
        resizeMode='contain'
        source={require('../src/image/capa4.jpg')}  
        style={{width: 300, height:300, opacity:1, marginBottom: 20, marginTop:20 }} 
        />
        <Image 
        resizeMode='contain'
        source={require('../src/image/capa3.jpg')}  
        style={{width: 300, height:300, opacity:1, marginBottom: 20, marginTop:20 }} 
        />
        <Image 
        resizeMode='contain'
        source={require('../src/image/capa5.jpg')}  
        style={{width: 300, height:300, opacity:1, marginBottom: 20, marginTop:20 }} 
        />
        <Image 
        resizeMode='contain'
        source={require('../src/image/capa2.jpg')}  
        style={{width: 300, height:300, opacity:1, marginBottom: 20, marginTop:20 }} 
        />

        <Text style={{color:'white', fontSize:16, textAlign:'center'}}>
          Entre em contato conosco, vai ser um prazer conversarmos. Desde já, agradecemos.
        </Text>

        <Image 
        resizeMode='contain'
        source={require('../src/image/logos/logo-hd.png')}  
        style={{width: 200, height:200, opacity:1, marginBottom: 20, marginTop:20 }} 
        />

          </ScrollView>
        </View>



        </ImageBackground>
            
            </View>

    )
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
      opacity: 0.8,
      alignSelf:'center',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#e3770b',
      padding:10,
    },
    scrollView: {
      alignItems:'center'
    },

  })