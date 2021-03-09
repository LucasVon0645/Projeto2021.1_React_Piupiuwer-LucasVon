import React, { useState } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import PostPiu from '../../components/PostPiu';
import PublishPiu from '../../components/PublishPiu';


import {FeedPageContainer, FeedContent, FeedHeader} from './styles'

const Feed: React.FC = () => {

    const [menuMobileVisible, setMenuMobileVisible] = useState(false);
    const [menuWidth, setMenuWidth] = useState(0);



    const ToogleMenu = () => {
        setMenuMobileVisible(!menuMobileVisible);
        if (menuWidth === 0) {
            setMenuWidth(700);}
        else {
            setMenuWidth(0);}
    }

    return (
        <>
        <Header toogleMenu={ToogleMenu}/>
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