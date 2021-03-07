import React from 'react';
import { HeaderContainer, InteractionContainer, MenuButton, LogoText } from './styles'

import useWindownSize from '../../hooks/useWindowSize'

import Logo from '../../assets/icons/logo.svg'

interface HeaderProps {
    toogleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({toogleMenu}) => {

    const {width} = useWindownSize()

   return (

       <HeaderContainer>
           <InteractionContainer>
               {width < 700 ? <MenuButton onClick={toogleMenu}>☰</MenuButton> : <img src={Logo} alt="logo"/>}
                <LogoText>Piupiuwer</LogoText>
           </InteractionContainer>
       </HeaderContainer>
   );}

export default Header