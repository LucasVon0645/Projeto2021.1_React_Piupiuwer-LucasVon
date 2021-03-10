import React, { useState } from 'react';
import * as S from './styles'

import EditIcon from '../../assets/icons/editar.svg'
import TrashIcon from '../../assets/icons/trash.svg'
import LikeIcon from '../../assets/icons/like.svg'
import HighlightIcon from '../../assets/icons/highlight.svg'
import HighlightedIcon from '../../assets/icons/star_highlighted.svg'
import { Piu } from '../../interfaces';

interface PostPiuProps {
    myPost: boolean;
    piuInformation: Piu;
}

const PostPiu: React.FC<PostPiuProps> = ({myPost, piuInformation}) => {

    const [highlighted, setHightlighted] = useState(false);

    const name = piuInformation.user.first_name + " " + piuInformation.user.last_name

    function ToogleHighlight () {
        setHightlighted(!highlighted)
    }

    return (
    
    <S.PostContainer>
        <S.ProfileInfoContainer>
            <S.ProfileImageContainerPost><img src={piuInformation.user.photo} alt="user"/></S.ProfileImageContainerPost>
            <S.PostInformation>
                <S.NameUser>{name}</S.NameUser>
                <S.UserMoreInformation>{'@' + piuInformation.user.username}</S.UserMoreInformation>
            </S.PostInformation>
        </S.ProfileInfoContainer>
        <S.PostContent>
            {piuInformation.text}
        </S.PostContent>
        <S.PostInteractionContainer myPost={myPost}>
            {myPost &&
                <S.EditDeleteContainer>
                <img src={EditIcon} alt="Edit" />
                <span>Salvar</span>
                <img src={TrashIcon} alt="Delete"/>
            </S.EditDeleteContainer>}
            <S.LikeHighlightContainer>
                <S.LikesContainer>
                    <p>{piuInformation.likes.length}</p>
                    <img src={LikeIcon} alt="like"/>
                </S.LikesContainer>
                <img src={highlighted ? HighlightedIcon : HighlightIcon} alt={"Highlight"} onClick={ToogleHighlight}></img>
            </S.LikeHighlightContainer>
        </S.PostInteractionContainer>
    </S.PostContainer>
       

   );}

export default PostPiu