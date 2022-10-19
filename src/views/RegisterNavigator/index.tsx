import React, {useState} from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native'
import { Button } from '../../components'
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Fumi, } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Checkbox from '@mui/material/Checkbox';
import imageURL from '../../../assets/logo.png'
import * as S from './style'
import Toast from 'react-native-toast-message';

const urlWebhook = 'https://eodsposkoo87q1x.m.pipedream.net'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export const RegisterPointScreen = () => {
    const [localName, setLocalName] = useState('')
    const [cep, setCep] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [type, setType] = useState('')
    const window = useWindowDimensions()

    const request = () => {
        const body = {
            localName: localName,
            cep: cep,
            street: street,
            number: number,
            type: type
    
        }
        if (localName === '' || cep === ''|| street === '' || number === '' || type === '') {
            Toast.show({
                type: 'error',
                text1: 'Campo em branco',
                text2: 'Preencha todos os campos para enviar, obrigado! 👋'
              });
        } else {
            fetch('https://eodsposkoo87q1x.m.pipedream.net', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              }).then((res) => {
                const isSuccess = res.status === 200 ? true : false
                showToast(isSuccess)
              }
              );
            setLocalName('')
            setCep('')
            setStreet('')
            setNumber('')
            setType('')
            
        }

    }

    const showToast = (success: boolean) => {

        if (success){
            Toast.show({
                type: 'success',
                text1: 'Localização Enviada',
                text2: 'Sua sugestão de localização foi enviada, obrigado! 👋'
              });
        }else{
            Toast.show({
                type: 'error',
                text1: 'Localização não enviada',
                text2: 'Não conseguimos enviar sua sugestão'
              });
        }
      }
      

    return (
        <View style = {{flex:1,paddingHorizontal: 20, height:window.height, justifyContent:'center'}}>
        <S.LogoContainer>
            <S.Logo source={imageURL} />
        </S.LogoContainer>
        <S.Form>
        <View>
        <Fumi
            onChangeText={(text) => { setLocalName(text) }}
            value = {localName}
            style={styles.container}
            label={'Nome do estabelecimento'}
            inputStyle={styles.input}
            iconClass={Ionicons}
            iconName={'md-home-sharp'}
            iconColor={'#2EE3AA'}
            iconSize={20}
        />
        <Fumi
            keyboardType='numeric'
            onChangeText={(text) => { setCep(text) }}
            value = {cep}
            style={styles.container}
            inputStyle={styles.input}
            label={'CEP'}
            // this is used as active and passive border color
            iconClass={Ionicons}
            iconName={'location'}
            iconColor={'#2EE3AA'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
        />
        <Fumi
            onChangeText={(text) => { setStreet(text) }}
            value = {street}
            style={styles.container}
            inputStyle={styles.input}
            label={'Rua'}
            // this is used as active and passive border color
            iconClass={FontAwesomeIcon}
            iconName={'road'}
            iconColor={'#2EE3AA'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
        />
        <Fumi
            keyboardType='numeric'
            onChangeText={(text) => { setNumber(text) }}
            value = {number}
            style={styles.container}
            inputStyle={styles.input}
            label={'Número'}
            // this is used as active and passive border color
            iconClass={Ionicons}
            iconName={'md-location'}
            iconColor={'#2EE3AA'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
        />
        <Fumi
            onChangeText={(text) => { setType(text) }}
            value = {type}
            style={styles.container}
            inputStyle={styles.input}
            label={'Tipo de material'}
            // this is used as active and passive border color
            iconClass={FontAwesomeIcon}
            iconName={'recycle'}
            iconColor={'#2EE3AA'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
        /></View>

        <S.ButtonContainer>
        <Button onPress={request}/>
            </S.ButtonContainer>
        </S.Form>
            <Toast />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
     
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:10,
      borderColor: '#A5F1D9',
      borderWidth: 1,
      borderRadius: 10
    },
    input: {
        marginBottom: -15,
        alignSelf:'flex-start',
        color: '#232323'
    },

});