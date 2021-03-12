import styled from 'styled-components';


export const RegisterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        display: none;
    }

    @media (min-width: 900px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-evenly;
        min-height: 550px;

        img {
        margin-top: 16px;
        width: 600px;
        height: auto;
        display: flex;}
    }



    @media (min-width: 1500px) {
        align-items: center;
        img {
        width: 800px;
        margin-top: 1vh;}
    }

    @media (min-height: 920px) {
        height: calc(100vh - 10rem);
    }


`

export const Title = styled.h2`
    font-style: normal;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    font-size: 2.5rem;
    margin-top: 32px;
    margin-bottom: 32px;

    @media (min-width: 700px) {
        font-size: 3rem;

    }

    @media (min-width: 1500px) {
        font-size: 3.5rem;
        margin-bottom: 16px;
    }


`

export const RegisterCard = styled.div`
    width: 90%;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 416px;
    margin-top: 16px;
    margin-bottom: 16px;

    @media (min-width: 700px) {
        font-size: 1rem;

    }

    @media (min-height: 800px) {
        margin-top: 0;
        margin-border-bottom: 0;
    }


`

export const RegisterCardTitle = styled.h3`
    font-style: normal;
    font-weight: 800;
    font-size: 4rem;
    letter-spacing: -0.02em;
    margin-top: 16px;

    @media (min-width: 1500px) {
        margin-top: 32px;
        margin-bottom: 32px;
        font-size: 4.2rem;
    }
`

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RegisterSubtitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -0.01em;
    width: 300px;
    margin-top: 16px;
    margin-bottom: 16px;

    @media (min-width: 700px) {
        width: 344px;

    }

    @media (min-width: 1500px) {
        margin-top: 8px;
    }
`

export const AboutUserTextArea = styled.textarea`
    color: #444;
    border-radius: 8px;
    font-size: 2rem;
    min-height: 128px;
    width: 300px;
    padding: 10px;
    background-color: var(--input-background);
    overflow-x: hidden;
    border: none;
    resize: none;

    @media (min-width: 700px) {
        width: 344px;
        border-radius: 16px;
    }
`

export const ButtonSignIn = styled.button`
    width: 300px;
    height: 40px;
    border-radius: 20px;
    background-color: var(--blue1);
    outline: none;
    transition: 0.5s;
    color: #FFF;
    font-size: 1.75rem;
    font-weight: 600;
    font-style: normal;
    letter-spacing: 0.75px;
    text-transform: uppercase;
    margin-top: 16px;
    margin-bottom: 24px;
    border: none;


    :active {
        transform: translateY(0.16vw);
        background-color: #05023a;
    }

    @media (min-width: 700px) {
        width: 360px;
        height: 32px;
        font-size: 1.5rem;

    }

    @media (min-width: 1500px) {
        margin-bottom: 64px;
    }

`

export const LandingContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

`