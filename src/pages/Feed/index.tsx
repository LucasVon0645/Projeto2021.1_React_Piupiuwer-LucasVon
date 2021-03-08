import React, { useState } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import PublishPiu from '../../components/PublishPiu';


import useWindownSize from '../../hooks/useWindowSize'
import {FeedPageContainer, FeedContent, FeedHeader} from './styles'

const Feed: React.FC = () => {

    const [menuMobileVisible, setMenuMobileVisible] = useState(false);
    const [menuWidth, setMenuWidth] = useState(0);



    const ToogleMenu = () => {
        setMenuMobileVisible(!menuMobileVisible);
        if (menuWidth === 0) {
            setMenuWidth(280);}
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
            </FeedContent>
        </FeedPageContainer>
        </>

    );}

export default Feed