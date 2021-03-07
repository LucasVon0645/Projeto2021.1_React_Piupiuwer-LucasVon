import React, { useState } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

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
            </FeedContent>
        </FeedPageContainer>
        </>

    );}

export default Feed