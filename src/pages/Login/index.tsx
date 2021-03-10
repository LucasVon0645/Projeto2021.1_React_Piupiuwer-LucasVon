import React, { FormEvent, useContext, useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import * as S from './styles'

import GoogleIcon from '../../assets/icons/google-plus.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'
import PinterestIcon from '../../assets/icons/pinterest.svg'
import FriendshipIcon from '../../assets/icons/amizade.svg'
import TalkIcon from '../../assets/icons/conversando.svg'

import LandingImage from '../../assets/images/LandingImage.svg';

import {AuthContext} from '../../hooks/AuthProvider'
import { useHistory } from 'react-router';


const Login: React.FC = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const {login} = useContext(AuthContext);
   const history = useHistory();

   const handleLogin = async (event: FormEvent) => {
      event.preventDefault();
      const result = await login({email, password});
      if (result === 1) history.push('/feed');
      else alert('Erro no Login');
   }


   return (

      <>
        <Header completeHeader={false}></Header>
        <S.LoginContent>
           <S.LandingContent>
            <S.Title>Bem vindo! <br/> Venha se conectar com a galera!</S.Title>
            <img src={LandingImage} alt="Piupiuwer"></img>
            <S.MainGainsContainer>
               <S.GainContainer>
                  <img src={FriendshipIcon} alt="Amizade"/>
                  <p>Acompanhe seus amigos</p>
               </S.GainContainer>
               <S.GainContainer>
                  <img src={TalkIcon} alt="Amizade"/>
                  <p>Troque ideias e se divirte!</p>
               </S.GainContainer>
            </S.MainGainsContainer>
           </S.LandingContent>
           <S.LoginCard>
              <S.LoginCardTitle>Piupiuwer</S.LoginCardTitle>
              <S.LoginForm onSubmit={handleLogin}>
                     <Input placeholder="Email ou nome de usuário" type="text" autoComplete="off" 
                     autoCorrect="off" autoCapitalize="off" spellCheck="false"
                     onChange={(email) => setEmail(email.target.value)}/>
                     <Input placeholder="Senha" type="password" onChange={(password) => setPassword(password.target.value)}/>
                     <S.ForgotPasswordText>Esqueceu a senha?</S.ForgotPasswordText>
                     <S.ButtonLogin type="submit">entrar</S.ButtonLogin>
                     <S.AnotherAcountText>Utilizar outra conta</S.AnotherAcountText>
                     <S.AnotherAccountLinksContainer>
                        <img src={GoogleIcon} alt="google"/>
                        <img src={FacebookIcon} alt="facebook"/>
                        <img src={PinterestIcon} alt="pinterest"/>
                     </S.AnotherAccountLinksContainer>
              </S.LoginForm>
              <S.SignInForm>
                 <S.SignInLabel htmlFor="SignIn">É novo por aqui? Cadastre-se!</S.SignInLabel>
                 <S.ButtonSignIn id="SignIn">cadastrar</S.ButtonSignIn>
              </S.SignInForm>
           </S.LoginCard>
        </S.LoginContent>
      </>

   );}

export default Login