/** Hooks */
import React, { FormEvent, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { useHistory } from 'react-router';


/** Components */
import Header from '../../components/Header';
import Input from '../../components/Input';

/** Styled-Components */
import * as S from './styles';

/** Images */
import registerLandingImage from '../../assets/icons/registerLandingImage.svg';

/** Services */
import api from '../../services/api';

const Register: React.FC = () => {

    const history = useHistory();
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [about, setAbout] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height, width} = useWindowSize();

    const Register = async (event: FormEvent) => {
        
        event.preventDefault();
        let FormComplete = true;
        let prop, data;
        data = {first_name, last_name, email, about, username, password, photo};
        for (prop in data) {
            console.log(prop, data[prop])
            if (data[prop] === "") {
                FormComplete = false;
                alert('É necessário preencher todos os campos!');
                break;}}
        if (FormComplete) {
            const response = await api.post('/register', data);
            if (response) {
                alert('Cadastro realizado com sucesso!\nBem vindo :)')
                history.push('/');
            }
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