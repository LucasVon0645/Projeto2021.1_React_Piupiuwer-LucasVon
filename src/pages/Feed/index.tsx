import React, { useEffect, useState, useContext, useMemo, useCallback } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import PostPiu from '../../components/PostPiu';
import PublishPiu from '../../components/PublishPiu';

import * as Interfaces from '../../interfaces/index'

import {AuthContext} from '../../hooks/AuthProvider';


import {FeedPageContainer, FeedContent, FeedHeader} from './styles'
import api from '../../services/api';

const Feed: React.FC = () => {


    const {userData} = useContext(AuthContext)
    const [menuMobileVisible, setMenuMobileVisible] = useState(false);
    const [menuWidth, setMenuWidth] = useState(0);
    const [arrayOfPius, setArrayOfPius] = useState([] as JSX.Element[]);
    const {user, token} = userData;
    let nameOfTheUser = "";

    if (user) {
        nameOfTheUser = user.first_name + " " + user.last_name;
    }

    const handleCreateAllPius = (PiusData: Interfaces.Piu[]) => {
        return PiusData.map( (piu) => {
            return (
                <PostPiu myPost={false} text={piu.text} key={piu.id}
                name={piu.user.first_name + " " + piu.user.last_name}
                userName={piu.user.username}
                photo={piu.user.photo}/>
            )
        })
    }

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        const getAllPius = () => {
            api.get('/pius', config)
            .then(({data}) => {
                setArrayOfPius(handleCreateAllPius(data));
                }).catch(() => alert('Erro na requisição de Pius'));
        };

        getAllPius();

    }, [token]);



    const ToogleMenu = () => {
        setMenuMobileVisible(!menuMobileVisible);
        if (menuWidth === 0) {
            setMenuWidth(700);}
        else {
            setMenuWidth(0);}
    }



    return (
        <>
        <Header toogleMenu={ToogleMenu} completeHeader={true}/>
        <FeedPageContainer>
            <Menu width={menuWidth} nameOfTheUser={nameOfTheUser} imageLink={user ? user.photo : ""}/>
            <FeedContent>
                <FeedHeader>Feed</FeedHeader>
                <PublishPiu />
                {arrayOfPius}
            </FeedContent>
        </FeedPageContainer>
        </>

    );}

export default Feed