import React from 'react';
import { Icon } from '@rneui/themed';


//Testar
export const theme = ({
    lightColors: {
      primary: '#e7e7e8',
    },
    darkColors: {
      primary: '#000000',
    },
    mainColor:{
        primary: '#e3770b',
        cardsProd: 'rgba(23, 3, 39, 0.97)',
        menuProd: 'rgba(134, 65, 244, 1)',
        graficoMain: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        graficoFundo: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    },
    fundoTextoSide:{
      primary: 'rgba(245, 144, 21, 0.92)'
    },
    bordaTextoSide:{
      primary: 'rgba(253, 139, 0, 0.75)'
    },
    bordaImgMain:{
      primary: 'rgba(255, 255, 255, 0.90)'
    },
    imagemArredondada:{
      image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "rgba(253, 139, 0, 0.75)",
        
      }
    }
  });




//ÍCONES *Lembrar de exportar as funções para acesso*
export  function IconeLock (){
    return(({ focused, color, size }) => <Icon color={color} size={size} name={focused ? 'lock' : 'lock'} />)
  }

  export  function IconeHome (){
    return(({ focused, color, size }) => <Icon color={color} type={'ionicon'} size={size} name={focused ? 'easel-sharp' : 'easel-sharp'} />)
  }

  export  function IconeCardapio (){
    return(({ focused, color, size }) => <Icon color={color} type='ionicon' size={size} name={focused ? 'fast-food' : 'fast-food'} />)
  }

  export  function IconeContact (){
    return(({ focused, color, size }) => <Icon color={color} size={size} type='font-awesome' name={focused ? 'instagram' : 'instagram'} />)
  }

  export  function IconeService (){
    return(({ focused, color, size }) => <Icon color={color} type='ionicon' size={size} name={focused ? 'body' : 'body'} />)
  }

  export  function IconeAgenda (){
    return(({ focused, color, size }) => <Icon color={color} type='ionicon' size={size} name={focused ? 'ios-calendar-sharp' : 'ios-calendar-sharp'} />)
  }

  export  function IconeLogin (){
    return(({ focused, color, size }) => <Icon color={color} type='entypo' size={size} name={focused ? 'location' : 'location'} />)
  }

  export  function IconeFeedback (){
    return(({ focused, color, size }) => <Icon color={color} type='materialicons' size={size} name={focused ? 'stars' : 'stars'} />)
  }