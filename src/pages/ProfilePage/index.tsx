import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import PostPiu from '../../components/PostPiu';
import { AuthContext } from '../../hooks/AuthProvider';
import * as S from './styles'
import * as Interfaces from '../../interfaces/index';
import { useLocation } from 'react-router';
import api from '../../services/api';


import NoneUserImage from '../../assets/icons/user_none.svg'
import FollowinfIcon from '../../assets/icons/followers.svg'
import { Link } from 'react-router-dom';


const Profile: React.FC = () => {


    const {userData, updateUser} = useContext(AuthContext);

    const [menuMobileVisible, setMenuMobileVisible] = useState(false);
    const [menuWidth, setMenuWidth] = useState(0);
    const [arrayOfPius, setArrayOfPius] = useState<Interfaces.Piu[] | []>([]);
    const [userOfThePage, setUserOfThePage] = useState<Interfaces.User | null>(null);

    const {user: userLogged, token} = userData;

    const location: any = useLocation();
    const username = location.search.replace('?', '') as string;
    console.log('renderizou a página');

    const getUserOfThePage = useCallback(async () => {
        const response = await api.get('/users?username='+username, {headers: { Authorization: `Bearer ${token}` }});
        const data: Interfaces.User[] = response.data;
        setUserOfThePage(data[0])
    }, [token, username]);

    useEffect(() => {
        console.log('getUserOfThePage');
        getUserOfThePage();
    }, [getUserOfThePage]);

    const ArrayIDFavoritePius = useMemo(() => {
        console.log('ArrayIDFavoritePius')
        if (userOfThePage){
            let source = userOfThePage;
            if (userOfThePage.id === userLogged.id) source = userLogged;
            return source.favorites.map((element) => {
                return element.id;})}
        else return []}, [userOfThePage, userLogged]);


    const getFavoritePius = useCallback(() => {

        api.get('/pius', {headers: { Authorization: `Bearer ${token}` }}).then(response => {

            const data: Interfaces.Piu[] = response.data;

            const FavoritePiusArray = data.filter((piu) => {

                    if (ArrayIDFavoritePius.includes(piu.id))
                        return true;
                    else 
                        return false;
                })

            setArrayOfPius(FavoritePiusArray);
            
            
            })
        

    }, [ArrayIDFavoritePius, token])


    useEffect(() => {
        if(userOfThePage)
            console.log('getFavorites');
            getFavoritePius();
    }, [getFavoritePius, userOfThePage]);


    const ToogleMenu = () => {
        setMenuMobileVisible(!menuMobileVisible);
        if (menuWidth === 0) {
            setMenuWidth(700);}
        else {
            setMenuWidth(0);}
    }

    const handleFollow  = async () => {
        if (userOfThePage){
            const response = await api.post('/follow', {followed_id: userOfThePage.id}, {headers: { Authorization: `Bearer ${token}` }});
            updateUser();
            console.log(response);}

    }

    const verifyIfIsFollowing = () => {
        if (userOfThePage){
            let following = false;
            userLogged.following.forEach((element) => {
                if (element.id === userOfThePage.id) {
                    following = true;
                }
            }) 

            return following;}
    }

    const ReturnTheFollowingElement = () => {
        if (verifyIfIsFollowing())
            return <S.FollowingDiv><img src={FollowinfIcon} alt = 'following' /><p>Seguindo</p></S.FollowingDiv>

        return <S.FollowButton onClick={handleFollow}>Seguir</S.FollowButton>
    }


    const handleCreateFavoritePius = () => {
        
        return arrayOfPius.map((piu: any) => {
            let config = false;
            if (piu.user.id === userLogged.id) return (<PostPiu myPost={true} piuInformation={piu} key={piu.id}/>)
            return (<PostPiu myPost={config} piuInformation={piu} key={piu.id}/>)
        })
    };

    const handleCreateFollowersList = () => {
        if (userOfThePage)
            return userOfThePage.followers.map((user: any) => {
                return (<Link key={user.id} to={{pathname: '/Profile', search: user.username }}><S.FollowerItemContainer><S.ProfileImageFollowerContainer><img src={user.photo} alt="follower"/></S.ProfileImageFollowerContainer><p>{user.first_name + ' ' + user.last_name}</p></S.FollowerItemContainer></Link>)
            })
    };


    




   return (
    <> 
        <Header completeHeader={true} toogleMenu={ToogleMenu} />
      
        <S.ProfilePageContainer>
            <Menu width={menuWidth} />
            {userOfThePage &&
            <S.ProfileContent>
                <S.ProfileHeader>{userOfThePage.id === userLogged.id ? "Meu Perfil" : "Perfil"}</S.ProfileHeader>
                <S.PerfilCard>
                    <S.ProfileInformation>
                        <S.PhotoContainer><img src={userOfThePage.photo ? userOfThePage.photo : NoneUserImage} alt="user"/></S.PhotoContainer>
                        <S.ProfileMainInfo>
                                <h3>{userOfThePage.first_name + " " + userOfThePage.last_name}</h3>
                                <S.UsernameAndFollowContainer>
                                    <p>{'@'+userOfThePage.username}</p>
                                    {userOfThePage.id !== userLogged.id && ReturnTheFollowingElement()}
                                </S.UsernameAndFollowContainer>
                        </S.ProfileMainInfo>
                    </S.ProfileInformation>
                    <S.Description>{userOfThePage.about}</S.Description>
                </S.PerfilCard>
                <S.FavoritePiusTitle>{'Pius Favoritos (' + ArrayIDFavoritePius.length + ')'}</S.FavoritePiusTitle>
                {handleCreateFavoritePius()}
                <S.FollowersTitle id={"followers"}>{'Seguidores (' + userOfThePage.followers.length + ')'}</S.FollowersTitle>
                <S.FollowersListContainer>
                    {handleCreateFollowersList()}
                </S.FollowersListContainer>
            </S.ProfileContent>}
        </S.ProfilePageContainer>
    </>

   );}

export default Profile