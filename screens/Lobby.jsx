import * as React from 'react';
import {View, Image, Text, StyleSheet, ImageBackground, BackHandler, Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'expo-status-bar';
import { Button, Divider, Overlay} from '@rneui/base';
import { useState, useEffect } from 'react';
import moment from "moment";



export function Lobby({navigation, route}){


    return(
        <View style={{ flex: 1,  backgroundColor:'#ddd', justifyContent: 'center' }}>

        <StatusBar backgroundColor="transparent" style="light" animated={true} translucent={true}/>

        <ImageBackground source={require('../src/image/star.gif')} resizeMode="cover" style={styles.image}>
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
  })