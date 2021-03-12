import React, { FormEvent, useCallback, useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import useWindowSize from '../../hooks/useWindowSize';

import * as S from './styles';

import registerLandingImage from '../../assets/icons/registerLandingImage.svg';
import api from '../../services/api';

const Register: React.FC = () => {

    const {height, width} = useWindowSize();

    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [about, setAbout] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Register = async (event: FormEvent) => {
        
        event.preventDefault();
        let FormComplete = true;
        let prop, data;
        if (photo !== '')
            data = {first_name, last_name, email, about, username, password, photo};
        else 
            data = {first_name, last_name, email, about, username, password};
        for (prop in data) {
            if (prop === '')
                FormComplete = false;}
        if (FormComplete) {
            const response = await api.post('/register', data);
            console.log(response);
        }
    }



   return (

       <>
            <Header completeHeader={false}></Header>
            <S.RegisterContent>
                <S.RegisterCard>
                    <S.RegisterCardTitle>Cadastro</S.RegisterCardTitle>
                    <S.RegisterForm onSubmit={Register}>

                        <S.RegisterSubtitle>Informações pessoais</S.RegisterSubtitle>
                        <Input placeholder="Nome" type="text" autoComplete="off" 
                        autoCorrect="off" autoCapitalize="off" spellCheck="false"
                        onChange={(event) => setFirst_name(event.target.value)}/>
                        <Input placeholder="Sobrenome" type="text" autoComplete="off" 
                        autoCorrect="off" autoCapitalize="off" spellCheck="false"
                        onChange={(event) => setLast_name(event.target.value)}/>
                        <Input placeholder="Email" type="text" autoComplete="off" 
                        autoCorrect="off" autoCapitalize="off" spellCheck="false"
                        onChange={(event) => setEmail(event.target.value)}/>
                        <Input placeholder="Link para foto" type="text" autoComplete="off" 
                        autoCorrect="off" autoCapitalize="off" spellCheck="false"
                        onChange={(event) => setPhoto(event.target.value)}/>
                        <S.AboutUserTextArea placeholder={'Sobre mim...'}
                        onChange={(event) => setAbout(event.target.value)}/>
                        <S.RegisterSubtitle>Dados do Usuário</S.RegisterSubtitle>
                        <Input placeholder="Nome de usuário" type="text" autoComplete="off" 
                        autoCorrect="off" autoCapitalize="off" spellCheck="false"
                        onChange={(event) => setUsername(event.target.value)}/>
                        <Input placeholder="Senha" type="password" 
                        onChange={(event) => setPassword(event.target.value)}/>
                        <S.ButtonSignIn id="SignIn">cadastrar</S.ButtonSignIn>
                        
                    </S.RegisterForm>
                </S.RegisterCard>

                <S.LandingContent>
                    {height >= 500 && width >= 700 && <S.Title>Precisamos te conhecer primeiro!<br/>Prometo que não vai demorar.</S.Title>}
                    <img src={registerLandingImage} alt="Piupiuwer"></img>
                </S.LandingContent>
            </S.RegisterContent>
       </>

   );}

export default Register