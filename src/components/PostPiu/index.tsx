import React, { useCallback, useContext, useRef, useState } from 'react';
import * as S from './styles'

import NoneUserImage from '../../assets/icons/user_none.svg'
import EditIcon from '../../assets/icons/editar.svg'
import SaveIcon from '../../assets/icons/salvar.svg'
import TrashIcon from '../../assets/icons/trash.svg'
import LikeIcon from '../../assets/icons/like.svg'
import LikedIcon from '../../assets/icons/liked.svg'
import HighlightIcon from '../../assets/icons/highlight.svg'
import HighlightedIcon from '../../assets/icons/star_highlighted.svg'
import { Piu } from '../../interfaces';
import { AuthContext } from '../../hooks/AuthProvider';
import api from '../../services/api';
import { Link } from 'react-router-dom';

interface PostPiuProps {
    myPost: boolean;
    piuInformation: Piu;
}

const PostPiu: React.FC<PostPiuProps> = ({myPost, piuInformation}) => {

    const [editableModeOn, setEditableModeOn] = useState(false);

    console.log('Renderizou Piu');

    const name = piuInformation.user.first_name + " " + piuInformation.user.last_name;
    const username = piuInformation.user.username;

    const {userData, updateUser} = useContext(AuthContext)
    const {token} = userData;

    const piu_id = piuInformation.id;

    const CheckIfLikedOn = useCallback(() => {
        let result = false;
        piuInformation.likes.forEach((element) => {
            if (element.user.id === userData.user.id){
                result = true;
            }   
        })

        return result;
    }, [piuInformation, userData.user.id]);

    const [liked, setLiked] = useState(CheckIfLikedOn())
    const NumberOfLikes = useRef(piuInformation.likes.length)


    const handleLikePiu = useCallback(async () => {

        const response = await api.post('/pius/like', {piu_id}, {headers: { Authorization: `Bearer ${token}` }});
        console.log(response);
        console.log(response);
        if (liked)
            NumberOfLikes.current -= 1;
        else
            NumberOfLikes.current += 1;

        setLiked(!liked);
    },[piu_id, token, liked]);


    const CheckIfFavoriteOn = useCallback(() => {
        let result = false;
        userData.user.favorites.forEach((element) => {
            if (element.id === piuInformation.id){
                result = true;
            }   
        })

        return result;
    }, [piuInformation, userData.user.favorites])


    const handleFavoritePiu = useCallback(async () => {
        console.log("renderiou handleCheck");
        if (!CheckIfFavoriteOn()) {

            console.log(token);
            console.log(piu_id);
            await api.post('/pius/favorite', {piu_id}, {headers: { Authorization: `Bearer ${token}` }});
            console.log("favoritou");
        }

        else {

            console.log("desfavoritou");
            await api.post('/pius/unfavorite', {piu_id}, {headers: { Authorization: `Bearer ${token}` }});
        }
        updateUser();
    }, [CheckIfFavoriteOn, piu_id, token, updateUser])



    const getTimeOfThePiu = () => {
        const date = new Date(piuInformation.updated_at);
        const day = String(date.getDate());
        const month = String(date.getMonth());
        const year = String(date.getFullYear());
        let hour = String(date.getHours());
        let min = String(date.getMinutes());
        if (hour.length === 1) hour = '0' + hour;
        if (min.length === 1) min = '0' + min; 

        return day + "/" + month + "/" + year + " " + hour + "h" + min + "min";
    }


    const handleDeletePiu = useCallback(async () => {
        const response = await api.delete('/pius',  {headers: { Authorization: `Bearer ${token}` }, data: {piu_id}});
        console.log(response);
        window.location.reload();
    }, [piu_id, token]);

    return (
    
        <S.PostContainer>
            <S.ProfileInfoContainer>
                <S.ProfileImageContainerPost><img src={piuInformation.user.photo ? piuInformation.user.photo : NoneUserImage} alt="user"/></S.ProfileImageContainerPost>
                <S.PostInformation>
                    <Link to={{pathname: '/Profile', search: piuInformation.user.username}}><S.NameUser>{name}</S.NameUser></Link>
                    <S.UserMoreInformation>{'@' + username + " - " + getTimeOfThePiu()}</S.UserMoreInformation>
                </S.PostInformation>
            </S.ProfileInfoContainer>
            <S.PostContent>
                {piuInformation.text}
            </S.PostContent>
            <S.PostInteractionContainer myPost={myPost}>
                {myPost &&
                    <S.EditDeleteContainer>
                    <img src={editableModeOn ? SaveIcon : EditIcon} alt="Edit" onClick={() => setEditableModeOn(!editableModeOn)}/>
                    {editableModeOn && <span>Salvar</span>}
                    <img src={TrashIcon} alt="Delete" onClick={() => handleDeletePiu()}/>
                </S.EditDeleteContainer>}
                <S.LikeHighlightContainer>
                    <S.LikesContainer>
                        <p>{NumberOfLikes.current}</p>
                        <img src={liked ? LikedIcon : LikeIcon} alt="like" onClick={() => handleLikePiu()}/>
                    </S.LikesContainer>
                    <img src={CheckIfFavoriteOn() ? HighlightedIcon : HighlightIcon} alt={"Highlight"} onClick={() => handleFavoritePiu()}></img>
                </S.LikeHighlightContainer>
            </S.PostInteractionContainer>
        </S.PostContainer>
       
   );}

export default PostPiu