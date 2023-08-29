import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect  } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button, Overlay } from '@rneui/base';
import { Icon  } from "@rneui/themed";
import DatePicker, {getFormatedDate }  from 'react-native-modern-datepicker';
import moment from 'moment';

import { CardAgendamento } from '../components/CardAgendamento';
import api from '../services/api';


  //Importante para o tratamento de dia / hora
  let datahora = new Date().toLocaleDateString('pt-BR', {timeZone: 'UTC'});

 // console.log(datahora.toLocaleTimeString('pt-BR', {timeZone: 'UTC'}));
//console.log(datahora);


export function Agendamentos({navigation, route}) {

const base = [
  {
    "id": 2,
    "nome": "Amanda",
    "email": "Amandarrosa4567@gmail.com",
    "telefone": "(84)99674-2564",
    "endereco": "Rua Maria Eutália Dantas da Silva, 01.",
    "senha": "$2a$10$j8G.USZ6d9d0J8tugqLj0unnvloHyIzq5hCmzlvLlolqewA5cyh9O"
  },
  {
    "id": 14,
    "nome": "Rafael 2",
    "email": "rafaraider22@gmail.com",
    "telefone": "849999999999",
    "endereco": "Rua tal tal ",
    "senha": "$2a$10$lKfxmzKcwMmTtRZPB65Rx./RWY9OkwVNsxERBnZ8pwJdahWyn3/2C"
  }]

    const [dataGeral, seteDATA] = useState([]);
    const [dataGeralCardapio, setDataCardapio] = useState([]);
    const [dataGeralServico, setDataServico] = useState([]);
    const [dataGeralUsuario, setDataUsuario] = useState(base);
    const [visibleCadastro, setVisibleCadastro] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    //Visibilidade do modal formulario cadastro
    const toggleOverlayCadastro = () => {
            setVisibleCadastro(!visibleCadastro);
        };
  
console.log(moment().format('YYYY-MM-DD'));

  
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
            console.log(dataGeralUsuario);
          })
        }
         
      obterCardapio();
      obterServico();
      obterUsuario();
      obterAgenda();

  
    }, [])
  

   return(
        <View style={{ flex: 1,  backgroundColor:'#000', justifyContent: 'center' }}>

    <StatusBar backgroundColor="transparent" style="light" animated={true} translucent={true}/>


  <View style={{alignItems:'center', paddingTop:70}}>
    <Text style={{color:'white', margin:30, paddingTop:60}}>
      Aqui estão todas as datas agendadas até o momento. Também é possível agendar um evento.
    </Text>

    <Button type="solid" color= "#e3770b" titleStyle={{ color: '#fff', marginHorizontal: 2 }}
     onPress={() => {toggleOverlayCadastro() }}
      buttonStyle={{ backgroundColor: '#e3770b' }}
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      }}>
        
        Agendar{" "}
        <Icon name="home" color="white" />
        
      </Button>

  </View>

    <View style={styles.modalView}>

    <FlatList
      data={dataGeral}
      keyExtractor = {item => item.id}
      renderItem ={({item}) => (<CardAgendamento data={item}
        linkFoto= {`${api.getUri()}files/uploads/${item.link_foto}`} //{(`http://intellissis2.ddns.net/${LimparPost2(item.Usuario)}.jpeg`)}
        cardapio = {dataGeralCardapio}
        servico = {dataGeralServico}
        //usuario = {dataGeralUsuario}

        
        /> )}
      />
        
    </View>

    
        
      {/*OVERLAY DE CADASTRO*/}
      <Overlay isVisible={visibleCadastro} onBackdropPress={toggleOverlayCadastro} 
      overlayStyle={{width:350, alignItems:'center', borderColor:'orange', borderWidth:1}}
      >
      
      <Text style={styles.formulario}>
        Preencha os campos com os dados solicitados
      </Text>

          <Text style={{color:"#fff9", fontSize:11, marginTop:10}}>Nos preocupamos com sua privacidade de dados, 
            eles não serão divulgados</Text>
      
            <DatePicker
            options={{
              backgroundColor: '#090C08',
              textHeaderColor: '#FFA25B',
              textDefaultColor: '#F6E7C1',
              selectedTextColor: '#fff',
              mainColor: '#F4722B',
              textSecondaryColor: '#D6C7A1',
              borderColor: 'rgba(122, 146, 165, 0.1)',
              isGregorian: true,
              
            }}
            current={moment().format('YYYY-MM-DD')}
            minimumDate= {moment().format('YYYY-MM-DD')}
            maximumDate="2220-07-25"
            selected={getFormatedDate(new Date(), 'DD/MM/YYYY')}
            mode= 'datepicker'
            minuteInterval={20}
            style={{ borderRadius: 10 }}
           // selected={getFormatedDate(new Date(), 'jYYYY/jMM/jDD')}

      onSelectedChange={date => setSelectedDate(date)}
    />


            
      <Button
        icon={
          <Icon
            name="login"
            type="entypo"
            color="white"
            size={25}
            iconStyle={{ marginRight: 10 }}
          />
        }
        title="Agendar Evento"
        buttonStyle={{ backgroundColor: '#e3770b', margin:9 }}
        onPress={() => {Cadastrar(dataGeralCardapio,dataGeralServico, dataGeralUsuario, x, navigation, toggleOverlayCadastro() ); toggleOverlayCadastro }}
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
        title="Desistir"
        buttonStyle={{ backgroundColor: '#e377', marginTop:10 }}
        onPress={toggleOverlayCadastro}
      />
    </Overlay>


</View>



    )
}


async function Cadastrar(cardapio, servico, usuario, x, navigation, y) {
  
  //const [isLoading, setIsLoading] = useState(false);
  const AlterarLoad = () => { //Altera o load...
    setIsLoading(!isLoading);
  }


  const dados = {
    email : email_,
    nome : nome_,
    telefone : telefone_,
    endereco : endereco_,
    senha : senha_
  }

  console.log(dados);

try {

  await api
    .post('auth/sign-up', (dados))
    .then((response) => { 
      console.log(response.status);
      textoDoAlerta = response.data.message;        //Message vinda da api


      //Sucesso
      if (response.status == 200 || 201)
      {

       // setIsLoading(false);
        inputSenha.current.clear();
        inputUsuario.current.clear();
        inputUsuario.current.focus();
        
        email_ = 'padrao' 
        nome_ = 'padrao'
        telefone_ = 'padrao'
        endereco_  = 'padrao'
        senha_ = 'padrao'


        Alert.alert(
          "Sucesso",
          textoDoAlerta + "\nAgora faça login no sistema",
          [
            {
              text: "Cancelar",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => navigation.navigate('Login',  {
              UserFly: usuarioCadastro,
              otherParam: 'Testando',           
            }) }
          ]
        ); 
      }

      //existente login
      else if (response.status == 401)
      {
          Alert.alert(
          "Falha",
          textoDoAlerta,
          [
            {
              text: "Cancelar",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () =>  navigation.navigate('Login',  {
              UserFly: user,
              token: token,
              otherParam: 'Testando',
            }) }
          ]
        ); 

      }

      else{
        Alert.alert('Falhou',"O cadastro não foi possível.\n Confira os dados");
        //setIsLoading(false);
        inputSenha.current.clear();
        inputUsuario.current.clear();
        inputUsuario.current.focus();
        console.log(response.message);
        
        email_ = 'padrao' 
        nome_ = 'padrao'
        telefone_ = 'padrao'
        endereco_  = 'padrao'
        senha_ = 'padrao'

        
      }
    })
    

    //Erro post axios
    .catch(error => {
      console.log('Error', error);
      
      Alert.alert('Falhou',error.message);
      //setIsLoading(false);
      inputSenha.current.clear();
      inputUsuario.current.clear();
      inputUsuario.current.focus();
    });

  }catch(err) {
    // TODO
    // adicionar tratamento da exceção
    console.error(err);
}


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
    formulario:{
      fontSize:16,
      color: 'white',
    },
    scrollView: {
      alignItems:'center'
    },

  })