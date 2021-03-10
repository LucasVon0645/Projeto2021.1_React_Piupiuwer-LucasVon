import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import PostPiu from '../../components/PostPiu';
import { AuthContext } from '../../hooks/AuthProvider';
import * as S from './styles'
import * as Interfaces from '../../interfaces/index';
import { useLocation } from 'react-router';
import api from '../../services/api';

import FollowinfIcon from '../../assets/icons/followers.svg'


const Profile: React.FC = () => {


    const {userData, updateUser} = useContext(AuthContext);
    const [menuMobileVisible, setMenuMobileVisible] = useState(false);
    const [menuWidth, setMenuWidth] = useState(0);
    const [arrayOfPius, setArrayOfPius] = useState([] as JSX.Element[]);

    const {user: userLogged, token} = userData;

    const location: any = useLocation();
    const user = location.state.referrer;


    const ToogleMenu = () => {
        setMenuMobileVisible(!menuMobileVisible);
        if (menuWidth === 0) {
            setMenuWidth(700);}
        else {
            setMenuWidth(0);}
    }

    const handleFollow  = async () => {
        const response = await api.post('/follow', {followed_id: user.id}, {headers: { Authorization: `Bearer ${token}` }});
        updateUser();
        console.log(response);

    }

    const verifyIfIsFollowing = () => {
        let following = false;
        userLogged.following.forEach((element) => {
            if (element.id === user.id) {
                following = true;
            }
        }) 

        return following;
    }

    const ReturnTheFollowingElement = () => {
        if (verifyIfIsFollowing())
            return <S.FollowingDiv><img src={FollowinfIcon} alt = 'following' /><p>Seguindo</p></S.FollowingDiv>

        return <S.FollowButton onClick={handleFollow}>Seguir</S.FollowButton>
    }


    useEffect(() => {

        const handleCreateFavoritePius = (PiusData: Interfaces.Piu[]) => {
            return PiusData.map( (piu) => {
                let config = false;
                if (piu.user.id === user.id) config = true;
                return (
                    <PostPiu myPost={config} piuInformation={piu} key={piu.id}/>
                )
            })
        }

        const getAllFavoritePius = () => {
            const listOfFavoritePius = user.favorites;
            console.log(listOfFavoritePius)
            setArrayOfPius(handleCreateFavoritePius(listOfFavoritePius));
        };

        /* getAllFavoritePius(); */

    }, [token, user.username, user.id, user.favorites]);

   return (

       <>
        <Header completeHeader={true} toogleMenu={ToogleMenu} />
        <S.ProfilePageContainer>
            <Menu width={menuWidth} />
            <S.ProfileContent>
                <S.ProfileHeader>{user.id === userLogged.id ? "Meu Perfil" : "Perfil"}</S.ProfileHeader>
                <S.PerfilCard>
                    <S.ProfileInformation>
                        <S.PhotoContainer><img src={user.photo} alt="user"/></S.PhotoContainer>
                        <S.ProfileMainInfo>
                                <h3>{user.first_name + " " + user.last_name}</h3>
                                <S.UsernameAndFollowContainer>
                                    <p>{'@'+user.username}</p>
                                    {user.id !== userLogged.id && ReturnTheFollowingElement()}
                                </S.UsernameAndFollowContainer>
                        </S.ProfileMainInfo>
                    </S.ProfileInformation>
                    <S.Description>{user.about}</S.Description>
                </S.PerfilCard>
                <S.FavoritePiusTitle>Pius Favoritos</S.FavoritePiusTitle>
                {arrayOfPius}
            </S.ProfileContent>
        </S.ProfilePageContainer>
       </>

   );}

export default Profile