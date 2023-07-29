import * as React from 'react';
import {View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';
import * as MyTheme from '../components/MyTheme';
import { Button, Icon, Card, Overlay } from '@rneui/base';
import { useState, useEffect } from 'react';

export function CardAgendamento (props){ //Recebo o style pela propriedade 


const [visible, setVisible] = useState(false); 

//Visibilidade da foto
const toggleOverlay = () => {
    setVisible(!visible);
  };


  useEffect(() => {
  
  }, []) 


  //Importante para o tratamento de dia / hora
  let datahora = new Date(props.data.data)
  let soData = datahora.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
  let soHora = datahora.toLocaleTimeString('pt-BR', {timeZone: 'UTC'})

  console.log(datahora.toLocaleTimeString('pt-BR', {timeZone: 'UTC'}));

  //console.log(props.usuario);

return(
    <Card containerStyle = {{backgroundColor:'rgba(192, 175, 46, 0.8)', borderRadius:25, borderWidth:2, marginLeft:5, marginRight:5}}>
      <View style={{flex:1, justifyContent:'center', backgroundColor:'transparent'}}>
      
      <View style={{flexDirection:'row', alignItems:'center', marginBottom:5}}> 

      <TouchableHighlight /* onPress={() => toggleOverlay()}Foto clicável*/>
      { <Image 
                   source={require('../src/image/calendario.jpg')}
                   //source={{uri: 'https://www.hub2b.com.br/blog/wp-content/uploads/2020/01/calendario-post-midias.jpg'}} //props.linkFoto
                  style={styles.sideMenuProfileIcon}
                  resizeMode='cover'
                  
                  
     /> }
        </TouchableHighlight>

        {/*Titulo do Card */}
        <Text style={{color: 'white', margin:10, fontWeight:'bold', fontSize:13}}>

        { soData} {'\n'} {soHora} {'h'}
        </Text>

      </View>
      
        {/*INFORMAÇÕES DO CARD SERVIÇOS */}
        <Text style={{color: 'white'}}>
        ▶ Serviço: {'  '}{props.servico[props.data.id_servico].nome} 
        </Text>
        <Text style={{color: 'white'}}>
        ▶ Cardápio: {'  '}{props.cardapio[props.data.id_cardapio].nome} 
        </Text>
        <Text style={{color: 'white'}}>
        ▶ Usuário: {'  '}{props.usuario[props.data.id_usuario].nome} 
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