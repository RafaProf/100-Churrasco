import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect  } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, FlatList } from 'react-native';
import { Button } from '@rneui/base';
import { Icon  } from "@rneui/themed";
import * as NavigationBar from 'expo-navigation-bar';

import { CardServicos } from '../components/CardServicos';

//test
const DATA = [
    {
      id: '0',
      title: 'Serviço de Garçom',
      linkFoto: 'https://lh3.googleusercontent.com/pw/AIL4fc9NyghzDUT0JvVTBCcmtnFmq_3sWt5uCXdbMK-KF0WCa8-RQoWYxN8bfPnb6pweq6f0JzIxl3uXwCTqAOHyYPzoe_tQXnzPbkCyMZTq8fSEC9N7seTvbXN-QXSddmxnMQ_vBC1iJelfIZSo5fudZniTFhlcrf07_UsrZ5ka-_gIYtgeoF_y7uh6GaQsg-gqwCDN2d8mo-7oJZ6nWLPhRZ2ECO5i-0B0QXU912ULaLSRlxuP2p0Y8owRhr6SV7pYikht2dz5Ads4Cz4KcVsksB3PA_mpgXRixastL4PFMDGZB8SNiCnwLkqyDMh9TSsL_3ABMzsHG8sYAcbyAan2hMxZQbeFBHgA2rJHpmFXxItQFFG3dFecyPSmiAGWstq5LK8oweFZIyaDHK-6u8skdfqS2kWUcuvIjVpl2nl_xRe8lpyrgWwztLdpoX6PPj1ow-oVfNZSCVVQWRN81xO2HdSPhltb3dDZ7qLFYrUOqG6aa8E2Fpgi3IZznz1IamG6FbazBC_uJH90ogD35QoRHOcOGccDFK8z2R9JumXjMyZvRQGogiehha3HButgjboNHmUEPZN8ULGQQpZCtzCPSNrg78yTtld0_Nhu3sZQvhqP3ykxjHL4GQ3-0sYNC1bD4Wh7pZqRdrFL7oHHJuHtaEbrTqcEgqtDzll9MbQRUbAj_XJR-eeAoO56zGL_nJd5Ompj19Lj-M8aaOfZbT8JJBlVFkiVupcSlcJX3fybzyXpGwNQAOGRL_--5veDz26X4Wb97_PaD9L7RhrEHGds9xCPj6NbvwtMehuBZ_kFiMpsCTVjz6G_cJUXwh-awqHfrqA9oGhu8JUkzojAzl7WauAnkPqUJW20zyfN2oQqsJ2B2dWSmXpOnK1Cxq7DujJtTd79BVUtmkCrwsqMJDJOGQ=w426-h568-s-no?authuser=0',
      descricao: 'Garçons para servir você e seus convidos trazendo maior comodidade para seu evento. Cada garçom comporta 30 pessoas em eventos normais', 
      duracao: '4 Horas',
      valorBase: 'R$120,00 por Garçom',
    },
    {
      id: '1',
      title: 'Serviço de Churrasqueiro',
      linkFoto: 'https://lh3.googleusercontent.com/pw/AIL4fc8YkFsIZVVh8bvVOy0y5Pr-LaGdNsNKSjirgq5dnTyOX__dIgs6dUjSUJwH004Nn03AOCOLfJoOrRJ25IZMPmbDQg6vzuOwIRyYdFi2xe826Z4ASDHTKiXTf1QHYg6LESOSIDXmGezY_mpz-9OwA2KmIg=w425-h567-s-no?authuser=0',
      descricao: 'Churrasqueiros profissionais para que vocÊ não se preocupe em preparar e assar o churrasco podendo aproveitar o seu evento sem se preocuparar com o calor da churrasqueira', 
      duracao: '4 Horas',
      valorBase: 'R$250,00 - Um churrasqueiro',

    },
    {
      id: '3',
      title: 'Serviço de Garçom',
      linkFoto: 'https://lh3.googleusercontent.com/pw/AIL4fc_Iz7kbMIv1VNaET_iKLL03NbgHrLevilkCTF3gGAQxZDKeYzEbJFpQt72pK_Rm3t4eLE868wQTwI8yHb4vd2_xOlTEWmFP48hXSJD8poWgXbqHgX_vfuapbP2dwOFIx7KACOXH7-y3OHX9nlz9WaZDXw=w756-h567-s-no?authuser=0',
      descricao: 'Garçons para servir você e seus convidos trazendo maior comodidade para seu evento. Cada garçom comporta 30 pessoas em eventos normais', 
      duracao: '4 Horas',
      valorBase: 'R$120,00 por Garçom',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d71',
        title: 'Serviço de Cutelaria',
        linkFoto: 'https://lh3.googleusercontent.com/pw/AIL4fc_Iz7kbMIv1VNaET_iKLL03NbgHrLevilkCTF3gGAQxZDKeYzEbJFpQt72pK_Rm3t4eLE868wQTwI8yHb4vd2_xOlTEWmFP48hXSJD8poWgXbqHgX_vfuapbP2dwOFIx7KACOXH7-y3OHX9nlz9WaZDXw=w756-h567-s-no?authuser=0',
        descricao: 'Richauds / Pratos / Talheres e afins', 
        duracao: '4 Horas',
        valorBase: 'R$250,00',
      },
      {
        id: '5',
        title: 'Serviço de Coquetéis',
        linkFoto: 'https://lh3.googleusercontent.com/pw/AIL4fc_Iz7kbMIv1VNaET_iKLL03NbgHrLevilkCTF3gGAQxZDKeYzEbJFpQt72pK_Rm3t4eLE868wQTwI8yHb4vd2_xOlTEWmFP48hXSJD8poWgXbqHgX_vfuapbP2dwOFIx7KACOXH7-y3OHX9nlz9WaZDXw=w756-h567-s-no?authuser=0',
        descricao: 'Deixe seu evento mais gostoso com uma diversidade de drinks especiais', 
        duracao: '4 Horas',
        valorBase: 'R$250,00 pacote de frutas simples',
      },
      {
        id: '6',
        title: 'Serviço de Banda',
        linkFoto: 'https://lh3.googleusercontent.com/pw/AIL4fc_Iz7kbMIv1VNaET_iKLL03NbgHrLevilkCTF3gGAQxZDKeYzEbJFpQt72pK_Rm3t4eLE868wQTwI8yHb4vd2_xOlTEWmFP48hXSJD8poWgXbqHgX_vfuapbP2dwOFIx7KACOXH7-y3OHX9nlz9WaZDXw=w756-h567-s-no?authuser=0',
        descricao: 'Com um cast de alto nível, trabalhamos com as bandas: \n\nH2A - Mônica Jucá - Ricardo Vianna (ex Cinzeiro de Motel) - Lucas Allef - Brendow Caju - Marvin Nascimento - Hugo Alves - Thiago Nobre ', 
        duracao: '3 Horas',
        valorBase: 'R$1000 Banda Completa R$700,00 Trio, R$500 Dupla, R$300 Voz e violão - Todos com som e iluminação incluso',
      },
  ];

export function Servicos({navigation, route}) {

    return(
        <View style={{ flex: 1,  backgroundColor:'#ddd', justifyContent: 'center' }}>

    <StatusBar backgroundColor="transparent" style="light" animated={true} translucent={true}/>

    <ImageBackground source={require('../src/image/star.gif')} resizeMode="cover" style={styles.image}>



    <View style={styles.modalView}>

    <FlatList
      data={DATA}
      keyExtractor = {item => item.id}
      renderItem ={({item}) => (<CardServicos data={item}
        linkFoto= {(item.linkFoto)} //{(`http://intellissis2.ddns.net/${LimparPost2(item.Usuario)}.jpeg`)}
        ranks = 'RAFAEL'//test
        nome = {item.title}
        descricao = {item.descricao}
        duracao = {item.duracao}
        valor = {item.valorBase}

        
        /> )}
      />

        
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
      opacity: 0.9,
      alignSelf:'center',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#e3770b',
      backgroundColor: 'transparent',
      padding:10,
    },
    scrollView: {
      alignItems:'center'
    },

  })