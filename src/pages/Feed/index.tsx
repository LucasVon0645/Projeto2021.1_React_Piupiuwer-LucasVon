import React, { useEffect, useState, useContext } from 'react';
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
    const [nameOfTheUser, setNameOfTheUser] = useState("");
    const {user, token} = userData;

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    
    if (user) setNameOfTheUser(user.first_name + " " + user.last_name);

    const getAllPius = () => {
        api.get('/pius', config).then(console.log)
    };

    console.log(user);

    const ToogleMenu = () => {
        setMenuMobileVisible(!menuMobileVisible);
        if (menuWidth === 0) {
            setMenuWidth(700);}
        else {
            setMenuWidth(0);}
    }

    getAllPius();

    return (
        <>
        <Header toogleMenu={ToogleMenu} completeHeader={true}/>
        <FeedPageContainer>
            <Menu width={menuWidth} nameOfTheUser={nameOfTheUser} imageLink={user ? user.photo : ""}/>
            <FeedContent>
                <FeedHeader>Feed</FeedHeader>
                <PublishPiu />
            </FeedContent>
        </FeedPageContainer>
        </>

    );}

export default Feed