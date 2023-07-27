import * as React from 'react';
import {View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';
import * as MyTheme from '../components/MyTheme';
import { Button, Icon, Card, Overlay } from '@rneui/base';
import { useState, useEffect } from 'react';

export function CardServicos(props){ //Recebo o style pela propriedade 


const [imagemPerfil, setImagemPerfil] = useState(require('../src/image/avatar/img_avatar2.png')); //imagem base
const [visible, setVisible] = useState(false); 

//Visibilidade da foto
const toggleOverlay = () => {
    setVisible(!visible);
  };



  useEffect(() => {
  
  }, []) 

console.log( props.data.link_foto);
return(
    <Card containerStyle = {{backgroundColor:'rgba(23, 3, 39, 0.97)', borderRadius:25, borderWidth:2, marginLeft:5, marginRight:5}}>
      <View style={{flex:1, justifyContent:'center', backgroundColor:'transparent'}}>
      
      <View style={{flexDirection:'row', alignItems:'center', marginBottom:5}}> 

      <TouchableHighlight onPress={() => toggleOverlay()}/*Foto clicável*/>
      { <Image 
                  //source={(imagemPerfil)}
                   source={{uri: props.data.link_foto}}
                  style={styles.sideMenuProfileIcon}
                  resizeMode='cover'
                  
                  
     /> }
        </TouchableHighlight>

        {/*Titulo do Card */}
        <Text style={{color: 'white', margin:10, fontWeight:'bold', fontSize:13}}>

        {props.data.nome}
        </Text>

      </View>
      
        {/*INFORMAÇÕES DO CARD SERVIÇOS */}
        <Text style={{color: 'white'}}>
        ▶ Descrição: {'  '}{props.data.descricao} {'\n'}
        </Text>
        <Text style={{color: 'white'}}>
        ▶ Duração: {'  '}{'A combinar'}{'\n'} {/*{props.data.duracao}  */}
        </Text>
        <Text style={{color: 'white'}}>
        ▶ Valor Base: {'  '}{props.data.valor_base} {'\n'}
        </Text>
    

      </View>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} //Modal da foto
      //overlayStyle={{width:300}}
      >
      <Image 
                  //source={(imagemPerfil)}
                   source={{uri: props.linkFoto}}
                  style={styles.imagemModal}
                  resizeMode='cover'
                                  
     />
      <Button
        icon={
          <Icon
            name="close"
            type="font-awesome"
            color="white"
            size={25}
            iconStyle={{ marginRight: 10 }}
          />
        }
        title="Fechar"
        buttonStyle={{ backgroundColor: '#e3770b' }}
        onPress={toggleOverlay}
      />
    </Overlay>

    </Card>  
    
    
        
)
  
}

const tema= MyTheme;


const styles = StyleSheet.create({

    sideMenuProfileIcon: {
        //resizeMode: 'center',
        width: 90,
        height: 90,
        borderRadius: 100 / 2,
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: tema.theme.bordaImgMain.primary,
        //resizeMode: 'center' ,
        //backgroundColor:'blue',Defina flexDirection: 'row', e flexWrap: 'wrap'
        
      },

      imagemModal: {
        //resizeMode: 'center' ,
        width: 450,
        height: 450,
        borderRadius: 100 / 2,
        alignSelf: 'center',
        borderWidth: 0,
        borderColor: tema.theme.bordaImgMain.primary,
        //resizeMode: 'contain',
        //backgroundColor:'blue',Defina flexDirection: 'row', e flexWrap: 'wrap'
        
      },
})