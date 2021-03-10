import styled from 'styled-components';

interface MenuContainerProps {
    width: number;
}

export const MenuContainer = styled.div<MenuContainerProps>`
    width: ${props => props.width}px;
    background-color: var(--blue2);
    transition: 0.5s;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
    position: sticky;
    top: 10rem;
    height: calc(100vh - 9rem);
    

    @media (min-width: 700px) {
        width: 384px;
        z-index: 0;
    }
`

export const ProfileMenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 200px;
    margin-left: 24px;
    margin-top: 16px;
    height: 96px;

    @media (min-width: 700px) {
        height: 136px;
        width: 320px;
    }

`

export const ProfileImageMenu = styled.div`
    height: 80px;
    width: 80px;
    background-color: #BBB;
    border-radius: 40px;
    position: relative;
    overflow: hidden;

    img {
        height: 80px;
        width: auto;
        margin-right: -25%;
    }

    @media (min-width: 700px) {
        height: 100px;
        width: 100px;
        border-radius: 50px;

        img {
            height: 100px;
            margin-right: -25%;}
    }

`

export const ProfileInfoMenu = styled.div`
    height: 100%;
    align-self: flex-end;
    margin-left: 12px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
`

export const ProfileNameLinkMenu = styled.h2`
    font-size: 2rem;
    font-weight:700;
    letter-spacing: -0.01em;
    font-style: normal;
    color: #FFF;
    margin-top: 1rem;
    margin-bottom: 2rem;
`
export const ProfileLinkMenu = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    color: #FFF;
    text-decoration: underline;
`

export const MenuItemsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-left: 3rem;
    height: 40rem;
    max-height: 300px;
    @media (min-width: 700px) {
        
    }
`

export const MenuItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
    width: 160px;
    margin-bottom: 12px;

    img {
        height: 48px;
        width: auto;
        margin-right: 16px;
    }
`

export const MenuItemText = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    font-style: normal;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    overflow: hidden;
    
`

