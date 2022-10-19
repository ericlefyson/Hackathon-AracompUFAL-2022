import React, { useState } from "react";
import { Text } from '../Text'
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as S from './style'

interface ButtonProps {
    onPress: any
}
export const Button = (props:ButtonProps) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <S.ButtonContainer>
                <Text color="white">Enviar Notificação</Text>
            </S.ButtonContainer>
        </TouchableOpacity>
    )
}