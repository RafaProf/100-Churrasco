import React from 'react';
import { Text, View } from 'react-native';



export function Realizar_Agendamento({navigation, route}) {




    
    return(
        <View  style={{alignItems:'center', justifyContent:'center', paddingTop:100, backgroundColor:'#000', flex:1}}>
            <Text style={{color:'white'}}>
                Escolha a data e horário do seu evento:
            </Text>
        </View>
    )
}