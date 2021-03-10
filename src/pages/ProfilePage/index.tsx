import React, { useContext, useState } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { AuthContext } from '../../hooks/AuthProvider';
import * as S from './styles'

const Profile: React.FC = () => {


    const {userData} = useContext(AuthContext)
    const [menuMobileVisible, setMenuMobileVisible] = useState(false);
    const [menuWidth, setMenuWidth] = useState(0);

    const {user} = userData;

    let nameOfTheUser = "";

    if (user) {
        nameOfTheUser = user.first_name + " " + user.last_name;
    }

    const ToogleMenu = () => {
        setMenuMobileVisible(!menuMobileVisible);
        if (menuWidth === 0) {
            setMenuWidth(700);}
        else {
            setMenuWidth(0);}
    }


   return (

       <>
        <Header completeHeader={true} toogleMenu={ToogleMenu} />
        <S.ProfilePageContainer>
            <Menu width={menuWidth} nameOfTheUser={nameOfTheUser} imageLink={user ? user.photo : ""} />
            <S.ProfileContent>
                <S.ProfileHeader>Meu Perfil</S.ProfileHeader>
                <S.PerfilCard>
                    <S.ProfileInformation>
                        <S.PhotoContainer><img src={user.photo} alt="user"/></S.PhotoContainer>
                        <S.ProfileMainInfo>
                                <h3>{user.first_name + " " + user.last_name}</h3>
                                <S.UsernameAndFollowContainer>
                                    <p>{'@'+user.username}</p>
                                    <S.FollowButton>Seguir</S.FollowButton>
                                </S.UsernameAndFollowContainer>
                        </S.ProfileMainInfo>
                    </S.ProfileInformation>
                    <S.Description>{user.about}</S.Description>
                </S.PerfilCard>
                <S.FavoritePiusTitle>Pius Favoritos</S.FavoritePiusTitle>
            </S.ProfileContent>
        </S.ProfilePageContainer>
       </>

   );}

export default Profile