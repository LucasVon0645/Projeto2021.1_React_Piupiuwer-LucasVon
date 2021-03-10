import React, { useContext } from 'react';
import {MenuContainer, ProfileMenuContainer, ProfileImageMenu, 
ProfileInfoMenu, ProfileNameLinkMenu, ProfileLinkMenu, MenuItemsContainer,
MenuItem, MenuItemText} from './styles'

import HomeIcon from './../../assets/icons/botao-home.svg';
import LogOutIcon from './../../assets/icons/logout.svg';
import FriendsIcon from './../../assets/icons/amigos.svg';
import PasswordIcon from './../../assets/icons/padlock.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../hooks/AuthProvider';

interface MenuProps {
    width: number;
}

const Menu: React.FC<MenuProps> = ({width}) => {

    const {userData, logout} = useContext(AuthContext);
    const {user} = userData;

   return (
    <MenuContainer width={width}>

        <ProfileMenuContainer>
            <ProfileImageMenu><img src={user.photo} alt="user"/></ProfileImageMenu>
            <ProfileInfoMenu>
                <ProfileNameLinkMenu>{user.first_name + " " + user.last_name}</ProfileNameLinkMenu>
                <Link to={{pathname: '/Profile', state: {referrer: user}}}><ProfileLinkMenu>Ir para o Perfil</ProfileLinkMenu></Link>
            </ProfileInfoMenu>
        </ProfileMenuContainer>

        <MenuItemsContainer>
            
            <Link to={'/feed'}>
                <MenuItem>
                    <img src={HomeIcon} alt="Feed"></img>
                    <MenuItemText>Feed</MenuItemText>
                </MenuItem>
            </Link>

            <Link to="/" onClick={logout}>
                <MenuItem style={{marginLeft: '0.5rem'}}>
                    <img src={LogOutIcon} alt="Sair"></img>
                    <MenuItemText>Sair</MenuItemText>
                </MenuItem>
            </Link>

            <MenuItem>
                <img src={FriendsIcon} alt="amigos"></img>
                <MenuItemText>Amigos</MenuItemText>
            </MenuItem>

            <MenuItem>
                <img src={PasswordIcon} alt="senha"></img>
                <MenuItemText>Alterar senha</MenuItemText>
            </MenuItem>

        </MenuItemsContainer>
        

    </MenuContainer>

   );}

export default Menu