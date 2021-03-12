import styled from 'styled-components';

interface HeaderContainerProps {
    completeHeader: boolean;
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    width: 100%;
    background-color: var(--blue1);
    ${props => {
        if(props.completeHeader)
            return "position: fixed;top: 0;z-index: 1;"
        else
            return "";
    }}

    z-index: 2;
`

export const InteractionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
    margin-left: 1rem;
    height: 100%;

    img {
        height: 64%;
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

export const SearchBar = styled.div`
    width: 172px;
    height: 100%;
    background-color: var(--blue4);
    border-radius: 22px;
    margin-left: 16px;
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;


    @media (min-width: 450px) {
        width: 280px;
    }

    @media (min-width: 550px) {
        width: 300px;
    }

    @media (min-width: 900px) {
        width: 400px;
    }

    @media (min-width: 1050px) {
        width: 500px;
    }
`

export const SearchContainer = styled.div`
    height: 50%;
    width: 88%;
    position: relative;
    display: inline-block;

    img {
        position: absolute;
        top: 25%;
        right: 5%;
        height: 50%;
        width: auto;

    }

`

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    background-color: var(--input-background);
    border: 1px solid #444;
    border-radius: 16px;
    outline: none;
    padding-left: 5%;
    font-size: 1.5rem;

    @media (min-width: 700px) {
        font-size: 1.8rem;
    }


`

export const LogOutSearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 70%;

`

export const LogOutContainer = styled.div`
    display: none;

    @media (min-width: 900px) {
        width: 200px;
    }

    @media (min-width: 600px) {
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--blue4);
        border-radius: 16px;
        margin-right: 5%;
        height: 100%;
        cursor: pointer;

    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p {
        font-size: 2.5rem;
        font-weight: 700;   
    }

    img {
        width: auto;
        height: 36px;
        margin-right: 8px;
    }
`
