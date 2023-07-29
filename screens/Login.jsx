import * as React from 'react';
import {View, Text, StyleSheet, Alert, StatusBar } from 'react-native';
import * as yup from 'yup';
import * as MyTheme from '../components/MyTheme';
import { Button, Icon, Card, Overlay , Input} from '@rneui/base';
import { useState, useEffect } from 'react';

import Loader from '../components/Loader';
import api from '../services/api';


//REFERENCIAMENTO MUITO IMPORTANTE PRA CONTROLE
const inputSenha = React.createRef(); 
const inputUsuario = React.createRef();

const inputCadUsuario = React.createRef();
const inputCadNome = React.createRef();
const inputCadSenha = React.createRef();
const inputCadEndereco = React.createRef();
const inputCadTelefone = React.createRef();

//YUP esquema
let schema = yup.object().shape({
  nome: yup.string().required(),
  endereco: yup.string().required(),
  email: yup.string().email().required(),
  tefone: yup.number().required().positive().integer(),
  website: yup.string().url(),
 // createdOn: date().default(() => new Date()),
});

//Padrao do login
export var usuario = 'rafa';
export var senha = '123456';

//Padrão do post
export var usuarioCadastro = 'rafa@gmail.com';
export var nomeCadastro = 'rafa';
export var senhaCadastro = '123456';
export var telefoneCadastro = '(84)99999-9999'
export var enderecoCadastro = 'Rua X, Nº xx'

export function Login({navigation, route}) {


    const [isLoading, setIsLoading] = useState(false);
    const [passwordVisible, SetPasswordVisible] = useState(true);
    const [visibleCadastro, setVisibleCadastro] = useState(false); 
    const [token, setToken] = useState("");

    let textoDoAlerta = "   "

    const AlterarLoad = () => { //Altera o load...
    setIsLoading(!isLoading);
  }

        //Constante de mostrar a senha <Icones> olinho
    const eye = (vdd) => {
        return(
        vdd?
        
        <Icon
    name='eye'
    type='entypo'
    size={24}
    color='white'
    onPress={() => {SetPasswordVisible(!passwordVisible)}}
    />
    :     <Icon
    name='eye-with-line'
    type='entypo'
    size={24}
    color='white'
    onPress={() => {SetPasswordVisible(!passwordVisible)}}
    />
        )
    }

    
    //Visibilidade do modal formulario cadastro
    const toggleOverlayCadastro = () => {
        setVisibleCadastro(!visibleCadastro);
    };



    //Receber dados do login e envia [pra api]
async function EnviarLogin(user, pass, navigation) {
  
  const Login = {
    email : user,
    senha : pass
  }

{console.log(Login);}
console.log(api.getUri());


//Login
try {

  await api
    .post('auth/sign-in', (Login))
    .then((response) => { 
      console.log(response.status);
      
      //Sucesso
      if (response.status == 200)
      {

        setIsLoading(false);
        inputSenha.current.clear();
        inputUsuario.current.clear();
        inputUsuario.current.focus();
        
        usuario = 'padrao' // Garantindo valores padrao no proximo login
        senha = 'padrao'

        
        setToken( response.data.data.token); //Recuperando token
        textoDoAlerta = response.data.message;        //Message vinda da api
        console.log( 'TOKEN GERAL: ' + token); //Observando token - n ta funcionado legAL


        Alert.alert(
          "Sucesso",
          textoDoAlerta,
          [
            {
              text: "Cancelar",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => navigation.navigate('Cardapio',  {
              UserFly: user,
              token: token,
              otherParam: 'Testando',
            }) }
          ]
        ); 
      }

      else{
        Alert.alert('Falhou',"O login não foi possível.\n Confira os dados");
        setIsLoading(false);
        inputSenha.current.clear();
        inputUsuario.current.clear();
        inputUsuario.current.focus();
        console.log(response.message);
        const Login = {
          email : user,
          senha : pass
        }
      }
    })
    

    //Erro post axios
    .catch(error => {
      console.log('Error', error);
      
      Alert.alert('Falhou',error.message);
      setIsLoading(false);
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

useEffect(() => {
  setToken(token);
  console.log(token);
}, []);


    
    return(
        <View style={{ flex: 1,  backgroundColor:'#000', justifyContent: 'center', alignItems:'center' }}>
        <StatusBar backgroundColor="transparent" style="light" animated={true} translucent={true}/>

        <Text style={{textAlign:'center', marginBottom:30, color:'#fff9', fontSize:19}}>
            Entre com o seu usuário e senha para logar no sistema
        </Text>

        <Input
            placeholder= {'Usuário '} //Lembrar das chaves para concat
            ref={inputUsuario} 
            clearTextOnFocus={true}
            selectTextOnFocus={true}
            placeholderTextColor="#fff9" 
            errorStyle={{ color: 'orange' }}
            errorMessage='Use um usuário válido'
            style={{color: '#fff'}}
            onChangeText={value => (usuario = value)}
            //rightIcon={<Icon name="close" size={20}/>}
            leftIcon={
                <Icon
                name='account-box'
                size={24}
                color='orange'
                />
            }

            />

        <Input placeholder="Senha"
        ref={inputSenha} 
        secureTextEntry={passwordVisible} 
        clearTextOnFocus={true}
        selectTextOnFocus={true}
        placeholderTextColor="#fff9" 
        style={{color: '#fff'}}
        onChangeText={value => (senha = value)}   
        rightIcon={eye(passwordVisible)}
        leftIcon={
            <Icon
            name='lock'
            size={24}
            color='orange'
            />}/>


    {/*isLoading && <ActivityIndicator size="large" color="#e3770b" />*/}
    <Loader isLoading={isLoading} />


    <Button type="solid" color= "#e3770b" titleStyle={{ color: '#fff', marginHorizontal: 2 }}
      onPress={() => {EnviarLogin(usuario, senha, navigation); AlterarLoad(); inputSenha.current.clear(); inputUsuario.current.clear();}} //Altera o load gif da tela e limpa senha, faz login
      buttonStyle={{ backgroundColor: '#e3770b' }}
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      }}>

        Logar{" "}

        <Icon name="home" color="white" />
      </Button> 


     

      {/*Apatir daqui - CRIAR CONTA*/}
      <Text style={{textAlign:'center', marginTop:30, color:'#fff9', fontSize:19}}>
            Não tem um acesso? Cadastre-se
        </Text>

        <Button type="solid" color= "#e3770b" titleStyle={{ color: '#fff', marginHorizontal: 2 }}
      onPress={() => {toggleOverlayCadastro() }}
      buttonStyle={{ backgroundColor: isLoading ? "#20272F" : "#120577" }}
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
        paddingBottom:60,
      }}>

        Criar Conta{" "}

        <Icon 
        name='like2'
        type='antdesign'
        color='#fff' />
      </Button>




      {/*OVERLAY DE CADASTRO*/}
      <Overlay isVisible={visibleCadastro} onBackdropPress={toggleOverlayCadastro} 
      overlayStyle={{width:350, alignItems:'center', borderColor:'orange', borderWidth:1}}
      >
      
      <Text style={styles.formulario}>
        Preencha os campos com os dados solicitados
      </Text>

      <Input
            placeholder= {'Email '} //Lembrar das chaves para concat
            ref={inputCadUsuario} 
            keyboardType='email-address'
            autoComplete='email'
            clearTextOnFocus={true}
            selectTextOnFocus={true}
            placeholderTextColor="#fff9" 
            errorStyle={{ color: 'orange' }}
            errorMessage='Esse será seu usuário, preencha com atenção'
            style={{color: '#fff'}}
            onChangeText={value => (usuarioCadastro = value)}
            //rightIcon={<Icon name="close" size={20}/>}
            leftIcon={
                <Icon
                name='mail'
                size={24}
                color='orange'
                />
            }

            />


    <Input
            placeholder= {'Nome '} //Lembrar das chaves para concat
            ref={inputCadNome} 
            clearTextOnFocus={true}
            selectTextOnFocus={true}
            placeholderTextColor="#fff9" 
            errorStyle={{ color: 'orange' }}
            errorMessage='Nome completo, preencha com atenção'
            style={{color: '#fff'}}
            onChangeText={value => (nomeCadastro = value)}
            //rightIcon={<Icon name="close" size={20}/>}
            leftIcon={
                <Icon
                name='account-box'
                size={24}
                color='orange'
                />
            }

            />

<Input
            placeholder= {'Telefone '} //Lembrar das chaves para concat
            ref={inputCadTelefone} 
            clearTextOnFocus={true}
            selectTextOnFocus={true}
            keyboardType='phone-pad'
            maxLength={14}
            placeholderTextColor="#fff9" 
            errorStyle={{ color: 'orange' }}
            errorMessage='(xx)xxxxx-xxxx'
            style={{color: '#fff'}}
            onChangeText={value => (telefoneCadastro = value)}
            //rightIcon={<Icon name="close" size={20}/>}
            leftIcon={
                <Icon
                name='phone'
                color='orange'
                />
            }

            />

<Input
            placeholder= {'Endereço '} //Lembrar das chaves para concat
            ref={inputCadEndereco}  
            clearTextOnFocus={true}
            selectTextOnFocus={true}
            placeholderTextColor="#fff9" 
            errorStyle={{ color: 'orange' }}
            errorMessage='Rua xxx, Nº xx, Natal - RN'
            style={{color: '#fff'}}
            onChangeText={value => (enderecoCadastro = value)}
            //rightIcon={<Icon name="close" size={20}/>}
            leftIcon={
                <Icon
                type='entypo'
                name='address'
                color='orange'
                />
            }

            />

    <Input placeholder="Senha"
        ref={inputCadSenha} 
        secureTextEntry={passwordVisible} 
        clearTextOnFocus={true}
        selectTextOnFocus={true}
        placeholderTextColor="#fff9" 
        style={{color: '#fff'}}
        errorMessage='Mínimo 6 - Máximo 10 | Obrigatório: Letra maiúscula, minúscula, caractere especial e número'
        onChangeText={value => (senhaCadastro = value)}   
        rightIcon={eye(passwordVisible)}
        leftIcon={
            <Icon
            name='lock'
            size={24}
            color='orange'
            />}/>

            <Text style={{color:"#fff9", fontSize:11, marginTop:10}}>Nos preocupamos com sua privacidade de dados, 
            eles não serão divulgados</Text>
            
            
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
        title="Cadastrar"
        buttonStyle={{ backgroundColor: '#120577', margin:9 }}
        onPress={() => {Cadastrar(usuarioCadastro, nomeCadastro, telefoneCadastro, enderecoCadastro, senhaCadastro, navigation, toggleOverlayCadastro() ); toggleOverlayCadastro }}
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





      {/*RETORNAR*/}
      <Button type="solid" color= "#e3770b" titleStyle={{ color: '#fff', marginHorizontal: 2 }}
      onPress={() => {navigation.navigate('Home') }}
      buttonStyle={{ backgroundColor: isLoading ? "#225577" : "#20272F", }}
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      }}>

        Retornar{" "}

        <Icon 
        name='back'
        type='antdesign'
        color='#fff' />
      </Button>  
  

        </View>
    )
}

async function Cadastrar(email_, nome_, telefone_, endereco_, senha_, navigation) {
  
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

//Styles
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#000000',
      
    },
    input2: {
        height: 40,
        margin: 12,
        color: '#000000',
        padding: 10,
        backgroundColor: '#fff',
      },
      formulario:{
        fontSize:16,
        color: 'white',
      },
      container3: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#e3770b',
        marginTop: 1,
        
      },
      subtitle:{
        fontSize:23,
        alignItems: 'center',
        color: 'orange',
        alignSelf: 'auto',
        paddingTop: 0,
        fontWeight:'bold'
      },
      image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center"
      },
      cancel: {
        color: 'red'
      }
  });