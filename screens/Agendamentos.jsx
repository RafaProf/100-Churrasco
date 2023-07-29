import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect  } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, FlatList } from 'react-native';
import { Button } from '@rneui/base';
import { Icon  } from "@rneui/themed";
import * as NavigationBar from 'expo-navigation-bar';

import { CardAgendamento } from '../components/CardAgendamento';
import api from '../services/api';


export function Agendamentos({navigation, route}) {

    const [dataGeral, seteDATA] = useState([]);
    const [dataGeralCardapio, setDataCardapio] = useState([]);
    const [dataGeralServico, setDataServico] = useState([]);
    const [dataGeralUsuario, setDataUsuario] = useState([]);
  
  //Efeito pra atualizar 
    useEffect(() =>{
  
      const obterAgenda = async ()=>{
        await api
        .get("agendamento").then( (response) => {
        console.log("chegou os agendamentos"); 
  
        seteDATA(response.data.data) //Definindo o array de DATA Json

      })
      .catch(function (error) {
        console.error(error);
      })
      }

      const obterCardapio = async ()=>{
        await api
        .get("cardapio").then( (response) => {
        console.log("chegou o cardapio"); 
  
        setDataCardapio(response.data.data) //Definindo o array de DATA Json
      })
      .catch(function (error) {
        console.error(error);
      })
      }

      const obterServico = async ()=>{
        await api
        .get("servico").then( (response) => {
        console.log("chegou o servico"); 
  
        setDataServico(response.data.data) //Definindo o array de DATA Json

      })
      .catch(function (error) {
        console.error(error);
      })
      }

      const obterUsuario = async ()=>{
        await api
        .get("user").then( (response) => {
        console.log("chegou os usuarios"); 
  
        setDataUsuario(response.data.data) //Definindo o array de DATA Json
        console.log(dataGeralUsuario[0].nome);
      })
      .catch(function (error) {
        console.error(error);
      })
      }
  
      obterAgenda();
      obterCardapio();
      obterServico();
      obterUsuario();
  
    }, [])
  

   return(
        <View style={{ flex: 1,  backgroundColor:'#000', justifyContent: 'center' }}>

    <StatusBar backgroundColor="transparent" style="light" animated={true} translucent={true}/>




    <View style={styles.modalView}>

    <FlatList
      data={dataGeral}
      keyExtractor = {item => item.id}
      renderItem ={({item}) => (<CardAgendamento data={item}
        linkFoto= {`${api.getUri()}files/uploads/${item.link_foto}`} //{(`http://intellissis2.ddns.net/${LimparPost2(item.Usuario)}.jpeg`)}
        cardapio = {dataGeralCardapio}
        servico = {dataGeralServico}
        usuario = {dataGeralUsuario}

        
        /> )}
      />

        
    </View>




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