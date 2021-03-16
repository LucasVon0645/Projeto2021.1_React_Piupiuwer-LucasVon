import styled from 'styled-components';


export const LoginContent = styled.div`
    display: flex;
    height: calc(100vh - 10rem);
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        display: none;
    }

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-center;
        min-height: 550px;

        img {
        margin-top: 16px;
        width: 600px;
        height: auto;
        display: flex;}
    }



    @media (min-width: 1500px) {
        img {
        width: 800px;
        margin-top: 1vh;}
    }


`

export const MainGainsContainer = styled.div`
    
    display: none;

    @media (min-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;}

`

export const GainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top:  8px;
    
    p {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.01em;
        color: #FFFFFF;
    }

    img {
        width: 64px;
        height: 64px;
        margin-right: 32px;

    }

`



export const LandingContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

`

export const Title = styled.h2`
    font-style: normal;
    font-weight: 800;
    letter-spacing: -0.02em;
    text-align: center;
    color: #FFFFFF;
    font-size: 2.5rem;
    margin-bottom: 32px;

    @media (min-width: 700px) {
        font-size: 3rem;

    }

    @media (min-width: 1500px)  {
        @media (min-height: 750px) {
            font-size: 3.5rem;
            margin-bottom: 1vh;
        }
    }


`

export const LoginCard = styled.div`
    width: 90%;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 416px;

    @media (min-width: 700px) {
        font-size: 1rem;

    }


`

export const LoginCardTitle = styled.h3`
    font-style: normal;
    font-weight: 800;
    font-size: 4rem;
    letter-spacing: -0.02em;
    margin-top: 16px;
    margin-bottom: 16px;

    @media (min-width: 1500px) {
        @media (min-height: 750px){
            margin-top: 32px;
            margin-bottom: 32px;
            font-size: 4.2rem;}
    }
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CredentialsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 300px;
    position: relative;

    @media (min-width: 700px) {
        width: 344px;

    }

`

export const CredentialsWarningSpan = styled.span`
    font-size: 1.5rem;
    color: #E71313;
    font-weight: normal;
    letter-spacing: -0.02em;
    position: absolute;
    right: 8px;
    top: 0;
`

export const ForgotPasswordText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    cursor: pointer;
    margin-bottom: 16px;

`

export const ButtonLogin = styled.button`
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
    margin-bottom: 20px;
    border: none;
    cursor: pointer;

    :active {
        transform: translateY(0.16vw);
        background-color: #05023a;
    }

    @media (min-width: 700px) {
        width: 344px;
        height: 32px;
        font-size: 1.5rem;

    }


`

export const AnotherAcountText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -0.01em;
    width: 300px;
    margin-bottom: 16px;

    @media (min-width: 700px) {
        width: 344px;

    }

    @media (min-width: 1500px) {
        @media (min-height: 750px){
        
        margin-top: 8px;}
    }
`

export const AnotherAccountLinksContainer = styled.div`
    width: 256px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


    img {
        margin: 0;
        cursor: pointer;
        height: 64px;
        width: 64px;
        display: flex;
    }

`

export const SignInForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 16px;

    @media (min-width: 1500px) {
        @media (min-height: 750px){
        margin-top: 36px;}
    }
`

export const SignInLabel = styled.label`
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -0.01em;
    width: 300px;

    @media (min-width: 700px) {
        width: 344px;

    }

    @media (min-width: 1500px) {
        @media (min-height: 750px){
        margin-bottom: 8px;}
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
    cursor: pointer;


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
        @media (min-height: 750px) {
            margin-bottom: 64px;}
    }


`