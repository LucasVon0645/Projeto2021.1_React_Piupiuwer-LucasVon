import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';

import useWindownSize from '../../hooks/useWindowSize'

import Logo from '../../assets/icons/logo.svg'
import SearchIcon from '../../assets/icons/magnifier.svg'
import LogOutIcon from '../../assets/icons/logout2.svg'


interface HeaderProps {
    toogleMenu?: () => void;
    completeHeader: boolean;
}

const Header: React.FC<HeaderProps> = ({toogleMenu,completeHeader}) => {

    const {width} = useWindownSize()

   return (

       <S.HeaderContainer completeHeader={completeHeader}>
           <S.InteractionContainer>
               {width < 700 && completeHeader ? <S.MenuButton onClick={toogleMenu}>☰</S.MenuButton> : <img src={Logo} alt="logo"/>}
                <S.LogoText>Piupiuwer</S.LogoText>
           </S.InteractionContainer>
           {completeHeader &&
           <S.LogOutSearchContainer>
                <S.SearchBar>
                    <S.SearchContainer>
                        <S.SearchInput placeholder='Pesquisar'/>
                        <img src={SearchIcon} alt='Search'></img>
                    </S.SearchContainer>
                </S.SearchBar>
                <S.LogOutContainer>
                    <Link to="/">
                        <img src={LogOutIcon} alt="Sair"></img>
                        <p>Sair</p>
                    </Link>
                </S.LogOutContainer>
            </S.LogOutSearchContainer>}
       </S.HeaderContainer>
   );}

export default Header