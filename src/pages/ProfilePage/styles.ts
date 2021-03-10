import { useCallback } from "react";
import styled from "styled-components";



export const ProfilePageContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10rem;
`

export const ProfileContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
    transition: margin-left .5s;
    overflow-x: hidden;

    @media (min-width: 700px) {
        padding-top: 24px;
    }

`

export const ProfileHeader = styled.h2`
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: 0em;
    color: var(--blue1);
    text-decoration: underline;
    margin-left: 5vw;
    width: 300px;
`

export const PerfilCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90vw;
    background-color: var(--blue4);
    padding: 16px;
    border-radius: 16px;
    margin-top: 8px;
    margin-left: 5vw;

    @media (min-width: 700px) {
        padding: 32px;
        width: 60vw;
    }

`

export const ProfileInformation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        font-size: 1.5rem;
        font-weight: normal;
        color: #444;
        font-style: normal;
    }

    
`

export const PhotoContainer = styled.div`
    height: 112px;
    width: 112px;
    border-radius: 32px;
    position: relative;
    overflow: hidden;
    margin-right: 16px;

    img {
        height: 112px;
        width: auto;
        position: absolute;
        margin-right: -25%;
    }

`


export const ProfileMainInfo = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;


    h3 {
        font-size: 3.4rem;
        font-weight: normal;
        color: #444;
        font-style: normal;
    }

`

export const Description = styled.p`


    font-size: 1.5rem;
    font-weight: normal;
    color: #444;
    font-style: normal;
    margin-top: 16px;
    text-align: justify;
`

export const UsernameAndFollowContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
    justify-content: space-between;
    width: 100%;

    p {
        font-size: 1.5rem;
        font-weight: normal;
        color: #444;
        font-style: normal;
    }
`

export const FollowButton = styled.button`
    background-color: var(--blue2);
    border-radius: 8px;
    color: #FFF;
    padding: 8px 16px;
    font-size: 1.5rem;
    cursor: pointer;
    outline: none;
    border: none;
    box-shadow: 0 0.15vw #999;


    :active {
        box-shadow: 0 0.2vw #666;
        transform: translateY(0.16vw);
        background-color:#05023a;
    }

`

export const FavoritePiusTitle = styled.h3`
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin-top: 16px;
    width: 90vw;
    margin-left: 5vw;
`


