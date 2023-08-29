import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect  } from 'react';
import { StyleSheet, View, ImageBackground, FlatList } from 'react-native';

import { CardServicos } from '../components/CardServicos';
import api from '../services/api';
import Loader from '../components/Loader';

export function Cardapio({navigation, route}) {

  const [dataGeral, seteDATA] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Efeito pra atualizar 
    useEffect(() =>{
  
      const obterCardapio = async ()=>{
        await api
        .get("cardapio").then( (response) => {
        console.log("chegou o cardápio"); 
  
        seteDATA(response.data.data) //Definindo o array de DATA Json
        setIsLoading(false);
        console.log(dataGeral[0]);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.error(error);
      })
      }
  
      obterCardapio();
  
    }, [])
  
  
  
      return(
          <View style={{ flex: 1,  backgroundColor:'#ddd', justifyContent: 'center' }}>
  
      <StatusBar backgroundColor="transparent" style="light" animated={true} translucent={true}/>
  
      <ImageBackground source={require('../src/image/star.gif')} resizeMode="cover" style={styles.image}>
  
        {/*isLoading && <ActivityIndicator size="large" color="#e3770b" />*/}
        <Loader isLoading={isLoading} />
  
      <View style={styles.modalView}>
  
      <FlatList
        data={dataGeral}
        keyExtractor = {item => item.id}
        renderItem ={({item}) => (<CardServicos data={item}
          linkFoto= {`${api.getUri()}files/uploads/${item.link_foto}`} //{(`http://intellissis2.ddns.net/${LimparPost2(item.Usuario)}.jpeg`)}
          ranks = 'RAFAEL'//test
          nome = {item.title} 
          descricao = {item.descricao}
          duracao = 'A combinar' //{item.duracao}
          valor = {item.valor_base}
  
          
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
        width: '100%',
        height:600,
        backgroundColor: 'grey',
        opacity: 0.9,
        alignSelf:'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#e3770b',
        backgroundColor: 'transparent',
        padding:7,
        paddingEnd:0,
      },
      scrollView: {
        alignItems:'center'
      },
  
    })
    