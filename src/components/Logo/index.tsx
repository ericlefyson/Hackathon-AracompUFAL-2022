import React from 'react-native'
import * as S from './style'
import imageURL from '../../../assets/logo.png'

export const Logo = () => {
    return (
        <S.LogoContainer>
            <S.Logo source={imageURL}/>
        </S.LogoContainer>
    )
}