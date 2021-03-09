import React from 'react';
import * as S from './styles'

import useWindownSize from '../../hooks/useWindowSize'

import Logo from '../../assets/icons/logo.svg'
import SearchIcon from '../../assets/icons/magnifier.svg'
import LogOutIcon from '../../assets/icons/logout2.svg'

interface HeaderProps {
    toogleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({toogleMenu}) => {

    const {width} = useWindownSize()

   return (

       <S.HeaderContainer>
           <S.InteractionContainer>
               {width < 700 ? <S.MenuButton onClick={toogleMenu}>☰</S.MenuButton> : <img src={Logo} alt="logo"/>}
                <S.LogoText>Piupiuwer</S.LogoText>
           </S.InteractionContainer>
           <S.LogOutSearchContainer>
                <S.SearchBar>
                    <S.SearchContainer>
                        <S.SearchInput placeholder='Pesquisar'/>
                        <img src={SearchIcon} alt='Search'></img>
                    </S.SearchContainer>
                </S.SearchBar>
                <S.LogOutContainer>
                    <img src={LogOutIcon} alt="Sair"></img>
                    <p>Sair</p>
                </S.LogOutContainer>
            </S.LogOutSearchContainer>
       </S.HeaderContainer>
   );}

export default Header