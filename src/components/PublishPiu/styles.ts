import styled from 'styled-components';

interface PostWriteContainerProps {
    numberOfChars: number;
}

interface CounterProps {
    numberOfChars: number;
}

export const PublishPiuContainer = styled.div`
    width: 90vw;
    background-color: #FFF;
    padding: 8px 16px;
    border-radius: 16px;
    margin-top: 8px;
    margin-left: 5vw;

    @media (min-width: 800px) {
        padding: 32px;
        width: 60vw;
    }

`
export const LabelPublish = styled.label`
    font-size: 2.7rem;
    font-family: 'Poppins', sans-serif;
    color: var(--blue1);
    font-weight: 700;
    display: flex;
    align-items: center;

    img {
        margin-left: 12px;
        height: auto;
        width: 5rem;
    }

    p {
        margin-top: 16px;
    }
`

export const PublishField = styled.fieldset`
     display: flex;
     justify-content: space-between;
     align-items: flex-start;
     padding-top: 5px;
     border: none;
     margin-top: 8px;
`

export const PhotoPublishContainer = styled.div`
    height: 88px;
    width: 88px;
    position: relative;
    overflow: hidden;
    background-color: #BBB;
    border-radius: 44px;
    display: flex;
    justify-content: center;

    img {
        height: 88px;
        width: 88px;
    }

    @media (min-width: 700px) {
        height: 100px;
        width: 100px;
        border-radius: 50px;

        img {
        height: 100px;
        width: 100px;
    }
    }

`

export const PostWriteContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 64%;
    min-width: 200px;

    @media (min-width: 450px) {
        width: 75%;
    }

    @media (min-width: 650px) {
        width: 82%;
    }

    @media (min-width: 800px) {
        width: 85%;
    }
`
export const PostWriteTextArea = styled.textarea<PostWriteContainerProps>`
    color: #444;
    border-radius: 8px;
    font-size: 2rem;
    min-height: 128px;
    width: 100%;
    padding: 10px;
    background-color: ${props => {
        if (props.numberOfChars > 140) return '#FF9C9C'
        else return 'var(--input-background)'}};
    overflow: hidden;
    border: none;
    resize: vertical;

    @media (min-width: 700px) {
        border-radius: 16px;
    }
`

export const InteractionBlockPublish = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 4%;
`
export const Counter = styled.span<CounterProps>`
    font-size: 2rem;
    color: ${props => {
        if (props.numberOfChars > 140)
            return '#e5383b'
        else return '#444'
    }};
`

export const PublishButton = styled.button`
    background-color: var(--blue1);
    border-radius: 8px;
    color: #FFF;
    height: 4rem;
    padding: 0 16px;
    font-size: 1.5rem;
    cursor: pointer;
    outline: none;
    border: none;
    margin-left: 2%;
    box-shadow: 0 0.15vw #999;
    display: flex;
    justify-content: center;
    align-items: center;


    :active {
        box-shadow: 0 0.2vw #666;
        transform: translateY(0.16vw);
        background-color:#05023a;
    }

`

export const CleanButton = styled.button`
    border-radius: 8px;
    background-color: var(--blue3);
    color: #FFF;
    box-sizing: border-box;
    height: 4rem;
    padding: 0 16px;
    font-size: 1.5rem;
    margin-left: 2%;
    cursor: pointer;
    outline: none;
    border: none;
    box-shadow: 0 0.15vw #999;
    display: flex;
    justify-content: center;
    align-items: center;

    :active {
        box-shadow: 0 0.2vw #666;
        transform: translateY(0.16vw);
        background-color: #028da8;
    }

    img {
        height: 2rem;
        width: auto;
        margin-right: 8px;
    }

`

export const SpanErrorMessage = styled.span`
    background-color: #E71313;
    color: #fff;
    text-align: center;
    z-index: 1;
    border-radius: 16px;
    font-size: 2rem;
    position: absolute;
    bottom: 0;
    left: -64%;
    padding: 4px 8px;

    ::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 70%;
        margin-left: -5px;
        border-width: 10px;
        border-style: solid;
        border-color: #E71313 transparent transparent transparent;
    }

    @media (min-width: 450px) {
        left: -40%;
        bottom: -56%;
    

    ::after {
        right: 25%;
        top:-20px;
        border-color:  transparent transparent #E71313 transparent;
    }}

    @media (min-width: 700px) {
        left: 0;
        bottom: -56%;
    

    ::after {
        top:-20px;
        border-color:  transparent transparent #E71313 transparent;
    }}

`

