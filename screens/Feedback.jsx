import React, {useState} from 'react'; 
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Alert} from 'react-native'; 
import { Input, Icon } from '@rneui/themed';
import api from '../services/api';
import { color } from 'react-native-reanimated';

import Loader from '../components/Loader';

export function Feedback({navigation, route}){

    const [defaultRating, setDefaultRating] = useState(2); 
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]); 
    const [comentario, setComentario] = useState("vazio"); 
    const [isLoading, setIsLoading] = useState(false);


    let textoDoAlerta = "";

    const AlterarLoad = () => { //Altera o load...
        setIsLoading(!isLoading);
      }

    //REFERENCIAMENTO MUITO IMPORTANTE PRA CONTROLE
    const inputComentario = React.createRef(); 

    //Receber dados do login e envia [pra api]
    async function EnviarFeedback(estrelas, opiniao, navigation) {
  
        const feed = {
            texto : opiniao,
            estrelas : estrelas
          }

  try {
  
    await api
      .post('feedback', (feed))
      .then((response) => { 
        console.log(response.status);
        
        //Sucesso
        if (response.status == 200 || 201)
        {
  
          setIsLoading(false);
          
          opiniao = '' // Garantindo valores padrao no proximo
          
          textoDoAlerta = response.data.message;        //Message vinda da api
  
  
          Alert.alert(
            "Obrigado",
            textoDoAlerta,
            [
              {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => navigation.navigate('Cardapio',  {
                //token: token,
                otherParam: 'Testando',
              }) }
            ]
          ); 
        }
  
        else{
          Alert.alert('Falhou',"Você está logado?.\n Verifique");
          setIsLoading(false);
         
          console.log(response.message);
          const feed = {
            texto : opiniao,
            estrelas : estrelas
          }
        }
      })
      
  
      //Erro post axios
      .catch(error => {
        console.log('Error', error);
        
        Alert.alert('Falhou',error.message);
        setIsLoading(false);
        
      });
  
    }catch(err) {
      // TODO
      // adicionar tratamento da exceção
      console.error(err);
  }
  
  }

    //Elemento das estrelas
    const RatingBar = () => { 
        return ( 
          <View style={styles.ratingBarStyle}> 
            {maxRating.map((item, key) => { 
              return ( 
                <TouchableOpacity 
                  activeOpacity={0.7} 
                  key={item} 
                  onPress={() => setDefaultRating(item)}> 
                  <Image 
                    style={styles.starImageStyle} 
                    source={ 
                      item <= defaultRating 
                        ? require('../assets/star_filled.png') 
                        : require('../assets/star_corner.png') 
                    } 
                  /> 
                </TouchableOpacity> 
              ); 
            })} 
          </View> 
        ); 
      }; 

      
      return ( 
        <SafeAreaView style={styles.container}>
             
          <View style={styles.container}> 

          <KeyboardAvoidingView contentContainerStyle={styles.box} behavior="position" enabled>
            <Text style={styles.textStyle}> 
              Classifique a sua experiência com a nossa empresa. Seu feedback é muito importante para nós.
            </Text> 
            
            <RatingBar /> 
            <Text style={styles.textStyle}> 
              {defaultRating} / {Math.max.apply(null, maxRating)} 
            </Text> 

            
            <Input style={{padding:5, marginTop:35, color:'white'}}
            ref={inputComentario}
            placeholder="Comente aqui"
            leftIcon={{ type: 'font-awesome', name: 'comment' , color:'white'}}
            onChangeText={value => (setComentario(value))}
            />
      </KeyboardAvoidingView>

            {/*isLoading && <ActivityIndicator size="large" color="#e3770b" />*/}
            <Loader isLoading={isLoading} />

            <TouchableOpacity 
              activeOpacity={0.7} 
              style={styles.buttonStyle} 
              onPress={() => {EnviarFeedback(defaultRating,comentario,navigation); AlterarLoad(); inputComentario.current.clear();}}> 
              <Text style={styles.buttonTextStyle}> 
                Enviar Feedback 
              </Text> 
            </TouchableOpacity> 


          </View> 
        </SafeAreaView> 
      ); 
    }; 
    
    const styles = StyleSheet.create({ 
      container: { 
        flex: 1, 
        backgroundColor: 'black', 
        padding: 10, 
        justifyContent: 'center', 
        textAlign: 'center', 
      }, 
      textStyle: { 
        textAlign: 'center', 
        fontSize: 23, 
        color: '#fff', 
        marginTop: 15, 
      }, 
      buttonStyle: { 
        justifyContent: 'center', 
        flexDirection: 'row', 
        marginTop: 30, 
        padding: 15, 
        backgroundColor: '#e3770b', 
      }, 
      buttonTextStyle: { 
        color: '#fff', 
        textAlign: 'center', 
      }, 
      ratingBarStyle: { 
        justifyContent: 'center', 
        flexDirection: 'row', 
        marginTop: 30, 
      }, 
      starImageStyle: { 
        width: 40, 
        height: 40, 
        resizeMode: 'cover', 
      }, 
    });
