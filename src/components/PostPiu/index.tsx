import React, { useState } from 'react';
import * as S from './styles'

import EditIcon from '../../assets/icons/editar.svg'
import TrashIcon from '../../assets/icons/trash.svg'
import LikeIcon from '../../assets/icons/like.svg'
import HighlightIcon from '../../assets/icons/highlight.svg'
import HighlightedIcon from '../../assets/icons/star_highlighted.svg'

interface PostPiuProps {
    myPost: boolean,
    name: string,
    userName: string,
    text: string,
    photo: string
}

const PostPiu: React.FC<PostPiuProps> = ({myPost, name, userName, text, photo}) => {

    const [highlighted, setHightlighted] = useState(false);

    function ToogleHighlight () {
        setHightlighted(!highlighted)
    }

    return (
    
    <S.PostContainer>
        <S.ProfileInfoContainer>
            <S.ProfileImageContainerPost><img src={photo} alt="user"/></S.ProfileImageContainerPost>
            <S.PostInformation>
                <S.NameUser>{name}</S.NameUser>
                <S.UserMoreInformation>{'@' + userName}</S.UserMoreInformation>
            </S.PostInformation>
        </S.ProfileInfoContainer>
        <S.PostContent>
            {text}
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
                    <p>0</p>
                    <img src={LikeIcon} alt="like"/>
                </S.LikesContainer>
                <img src={highlighted ? HighlightedIcon : HighlightIcon} alt={"Highlight"} onClick={ToogleHighlight}></img>
            </S.LikeHighlightContainer>
        </S.PostInteractionContainer>
    </S.PostContainer>
       

   );}

export default PostPiu