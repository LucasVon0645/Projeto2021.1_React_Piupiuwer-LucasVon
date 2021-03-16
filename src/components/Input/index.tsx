import React, { InputHTMLAttributes } from 'react';

/** Styled-Components */
import * as S from './styles'

/** Interface */
type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({...rest}) => {

   return (
    
    <S.InputContainer {...rest} >

    </S.InputContainer>

   );}

export default Input