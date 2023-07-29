import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect  } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, FlatList } from 'react-native';
import { Button } from '@rneui/base';
import { Icon  } from "@rneui/themed";
import * as NavigationBar from 'expo-navigation-bar';

import { CardAgendamento } from '../components/CardAgendamento';
import api from '../services/api';


export function Realizar_Agendamento({navigation, route}) {




    
    return(
        <View  style={{alignItems:'center', justifyContent:'center', paddingTop:100, backgroundColor:'#000', flex:1}}>
            <Text style={{color:'white'}}>
                Escolha a data e horário do seu evento:
            </Text>
        </View>
    )
}