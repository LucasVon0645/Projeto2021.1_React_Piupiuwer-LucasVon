/** Hooks */
import React, { FormEvent, useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth'

/** Styled-Components */
import * as S from './styles'

/** Images */
import NoneUserImage from '../../assets/icons/user_none.svg';
import BirdIcon from '../../assets/icons/passaro-cantando-com-notas-musicais.svg';
import CleanIcon from '../../assets/icons/clean.svg';

/** Services */
import api from '../../services/api';

const PublishPiu: React.FC = () => {

   const TextAreaElement = useRef<HTMLTextAreaElement>(null);

   const {userData} = useAuth();
   const {user, token} = userData;
   const [numberOfChars, setNumberOfChars] = useState(0);
   const [emptyPost, setEmptyPost] = useState(false);
   const [message, setMessage] = useState("");
   
   const showNumberOfChars = (event: FormEvent) => {
    
    const target = event.target as HTMLTextAreaElement;
    setNumberOfChars(target.value.length);
    if (target.value.length > 0) setEmptyPost(false);
    
   }

    const handleCleanTextArea = (event: FormEvent) => {
        event.preventDefault();

        if (TextAreaElement.current) {
            TextAreaElement.current.value = '';
            setEmptyPost(false);
            setNumberOfChars(0);}
   }

    
    const PostMyPiu = async (text: string) => {

        const response = await api.post('/pius', {text}, {headers: { Authorization: `Bearer ${token}` }})
        console.log(response);

    }

    const handlePublishPiu = async (event: FormEvent) => {
        event.preventDefault();
        if (numberOfChars > 0) {
            if (numberOfChars < 141) {
                await PostMyPiu(message);
                window.location.reload()}}
        else setEmptyPost(true);
   }
   
   return (

       <S.PublishPiuContainer>
           <form>
               <S.LabelPublish>
                   <p>Publicar um novo Piu</p>
                   <img src={BirdIcon} alt="Piu"></img>
                </S.LabelPublish>
                <S.PublishField>
                    <S.PhotoPublishContainer><img src={user.photo ? user.photo : NoneUserImage} alt="user" /></S.PhotoPublishContainer>
                    <S.PostWriteContainer>
                        <S.PostWriteTextArea ref={TextAreaElement} placeholder="Digite um novo Piu" onInput={(event) => showNumberOfChars(event)} 
                        numberOfChars={numberOfChars} onChange={(event) => setMessage(event.target.value)}></S.PostWriteTextArea>
                        {numberOfChars > 140 && 
                            <S.SpanErrorMessage>O limite máximo de <br />caracteres é 140</S.SpanErrorMessage>}
                        {emptyPost && 
                            <S.SpanErrorMessage>Posts vazios não <br /> são permitidos</S.SpanErrorMessage>}
                    </S.PostWriteContainer>
                </S.PublishField>
                <S.InteractionBlockPublish>
                    <S.Counter numberOfChars={numberOfChars}>{numberOfChars + '/140'}</S.Counter>
                    <S.PublishButton type='submit' onClick={handlePublishPiu}>PUBLICAR</S.PublishButton>
                    <S.CleanButton onClick={handleCleanTextArea}><img src={CleanIcon} alt="clean"/>LIMPAR</S.CleanButton>
                </S.InteractionBlockPublish>
           </form>
       </S.PublishPiuContainer>

   );}

export default PublishPiu;