import React, { InputHTMLAttributes } from 'react';
import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({...rest}) => {

   return (
    
    <S.InputContainer {...rest} >

    </S.InputContainer>

   );}

export default Input