import React, { useEffect, useState, useContext, useCallback} from 'react';
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
    const [arrayOfPius, setArrayOfPius] = useState([]);
    const {user, token} = userData;

    console.log(user);

    const handleCreateAllPius = (PiusData: Interfaces.Piu[]) => {
        return PiusData.map( (piu) => {
            let config = false;
            if (piu.user.id === user.id) config = true;
            return (
                <PostPiu myPost={config} piuInformation={piu} key={piu.id}/>
            )
        })
    }


    useEffect(() => {

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }


        const getAllPius = async () => {
            try {
                const {data} = await api.get('/pius', config);
                console.log(data);
                setArrayOfPius(data);}
            catch {
                alert('Erro na requisição de Pius');}
        };


        getAllPius();

    }, [token, user.id]);
 

    const ToogleMenu = useCallback(() => {
        setMenuMobileVisible(!menuMobileVisible);
        if (menuWidth === 0) {
            setMenuWidth(700);}
        else {
            setMenuWidth(0);}
    }, [menuMobileVisible, menuWidth]);




    return (
        <>
        <Header toogleMenu={ToogleMenu} completeHeader={true}/>
        <FeedPageContainer>
            <Menu width={menuWidth} />
            <FeedContent>
                <FeedHeader>Feed</FeedHeader>
                <PublishPiu />
                {handleCreateAllPius(arrayOfPius)}
            </FeedContent>
        </FeedPageContainer>
        </>

    );}

export default Feed