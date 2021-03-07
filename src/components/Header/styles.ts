import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 10rem;
    width: 100%;
    background-color: var(--blue1);
`

export const InteractionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 5rem;
    margin-left: 2rem;
    height: 100%;

    img {
        height: 80px;
        width: auto;
        margin: 0 8px;
    }
`

export const MenuButton = styled.button`
    height: 4.8rem;
    width: 4.8rem;
    color: #FFF;
    background-color: var(--blue1);
    border: none;
    font-size: 3rem;
`

export const LogoText = styled.h1`
    font-size: 3rem;
    color: #FFF;
    font-weight: 800;
    font-style: normal;
    letter-spacing: -0.02em;
    margin-left: 1rem;

`