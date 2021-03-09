import React, { useEffect, useState, useContext } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import PostPiu from '../../components/PostPiu';
import PublishPiu from '../../components/PublishPiu';

import * as Interfaces from '../../interfaces/index'

import {TokenUserContext} from '../../hooks/TokenUserContextProvider';


import {FeedPageContainer, FeedContent, FeedHeader} from './styles'

const Feed: React.FC = () => {


    const TokenAndUser = useContext(TokenUserContext)
    const [menuMobileVisible, setMenuMobileVisible] = useState(false);
    const [menuWidth, setMenuWidth] = useState(0);
    const [userOnline, setUserOnline] = useState(TokenAndUser.user);

    console.log(userOnline);

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
            <Menu width={menuWidth}/>
            <FeedContent>
                <FeedHeader>Feed</FeedHeader>
                <PublishPiu />
                <PostPiu myPost={true}/>
                <PostPiu myPost={true}/>
                <PostPiu myPost={true}/>
                <PostPiu myPost={true}/>
            </FeedContent>
        </FeedPageContainer>
        </>

    );}

export default Feed