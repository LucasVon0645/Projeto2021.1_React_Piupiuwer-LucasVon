import React from 'react';
import {MenuContainer, ProfileMenuContainer, ProfileImageMenu, 
ProfileInfoMenu, ProfileNameLinkMenu, ProfileLinkMenu, MenuItemsContainer,
MenuItem, MenuItemText} from './styles'

import HomeIcon from './../../assets/icons/botao-home.svg';
import LogOutIcon from './../../assets/icons/logout.svg';
import FriendsIcon from './../../assets/icons/amigos.svg';
import PasswordIcon from './../../assets/icons/padlock.svg'

interface MenuProps {
    width: number;
}

const Menu: React.FC<MenuProps> = ({width}) => {

   return (
    <MenuContainer width={width}>

        <ProfileMenuContainer>
            <ProfileImageMenu />
            <ProfileInfoMenu>
                <ProfileNameLinkMenu>Lucas Von</ProfileNameLinkMenu>
                <ProfileLinkMenu>Ir para o Perfil</ProfileLinkMenu>
            </ProfileInfoMenu>
        </ProfileMenuContainer>

        <MenuItemsContainer>

            <MenuItem>
                <img src={HomeIcon} alt="Feed"></img>
                <MenuItemText>Feed</MenuItemText>
            </MenuItem>

            <MenuItem style={{marginLeft: '1rem'}}>
                <img src={LogOutIcon} alt="Sair"></img>
                <MenuItemText>Sair</MenuItemText>
            </MenuItem>

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