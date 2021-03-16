/** Hooks */
import React, { FormEvent, useCallback, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useWindowSize from '../../hooks/useWindowSize';
import { useHistory } from 'react-router';

/** Components */
import Header from '../../components/Header';
import Input from '../../components/Input';

/** Styled-components */
import * as S from './styles'

/** Images */
import GoogleIcon from '../../assets/icons/google-plus.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'
import PinterestIcon from '../../assets/icons/pinterest.svg'
import FriendshipIcon from '../../assets/icons/amizade.svg'
import TalkIcon from '../../assets/icons/conversando.svg'
import LandingImage from '../../assets/images/LandingImage.svg';




const Login: React.FC = () => {

   const [email, setEmail] = useState("");
   const [loginFailed, setLoginFailed] = useState(false);
   const [password, setPassword] = useState("");
   const history = useHistory();
   const {login} = useAuth();

   const handleLogin = useCallback(async (event: FormEvent) => {
      event.preventDefault();
      const result = await login({email, password});
      if (result === 1) console.log('oi');
      else setLoginFailed(true);
   }, [email, password, login]);

   const {height} = useWindowSize();

   const goToRegisterPage = (event: FormEvent) => {
         event.preventDefault();
         history.push('/register');
   }


   return (

      <>
        <Header completeHeader={false}></Header>
        <S.LoginContent>
           <S.LandingContent>
            {height >= 700 && <S.Title>Bem vindo! <br/> Venha se conectar com a galera!</S.Title>}
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
                     <S.CredentialsContainer>
                        <S.ForgotPasswordText>Esqueceu a senha?</S.ForgotPasswordText>
                        {loginFailed && <S.CredentialsWarningSpan>* Senha ou email incorreto</S.CredentialsWarningSpan>}
                     </S.CredentialsContainer>
                     <S.ButtonLogin type="submit">entrar</S.ButtonLogin>
                     <S.AnotherAcountText>Utilizar outra conta</S.AnotherAcountText>
                     <S.AnotherAccountLinksContainer>
                        <img src={GoogleIcon} alt="google"/>
                        <img src={FacebookIcon} alt="facebook"/>
                        <img src={PinterestIcon} alt="pinterest"/>
                     </S.AnotherAccountLinksContainer>
              </S.LoginForm>
              <S.SignInForm onSubmit={goToRegisterPage}>
                 <S.SignInLabel htmlFor="SignIn">É novo por aqui? Cadastre-se!</S.SignInLabel>
                 <S.ButtonSignIn id="SignIn">cadastrar</S.ButtonSignIn>
              </S.SignInForm>
           </S.LoginCard>
        </S.LoginContent>
      </>

   );}

export default Login