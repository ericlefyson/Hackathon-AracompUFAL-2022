import styled from 'styled-components/native'

interface themeProp {
    theme: any
}

export const Container = styled.View<themeProp>`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.colors.bg}
`

export const InputsColumn = styled.View`
    flex:1;
    width:100%;
`


