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


    useEffect(() => {

        console.log("oi")

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        const handleCreateAllPius = (PiusData: Interfaces.Piu[]) => {
            return PiusData.map( (piu) => {
                let config = false;
                if (piu.user.id === user.id) config = true;
                return (
                    <PostPiu myPost={config} piuInformation={piu}/>
                )
            })
        }

        const getAllPius = async () => {
            try {
                const {data} = await api.get('/pius', config)
                setArrayOfPius(handleCreateAllPius(data));}
            catch {
                alert('Erro na requisição de Pius');}
        };

        getAllPius();

    }, [token, user]);
 

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