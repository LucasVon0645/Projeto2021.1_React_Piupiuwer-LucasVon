import styled from 'styled-components';

interface PostInteractionContainerProps {
    myPost: boolean;
}

export const PostContainer = styled.div`
    width: 90vw;
    background-color: #FFF;
    margin-top: 32px;
    border-radius: 16px;
    padding: 12px 16px;
    margin-left: 5vw;
    margin-top: 5vw;

    @media (min-width: 700px) {
        padding: 32px;
        width: 60vw;
        margin-top: 4vw;
    }
`

export const ProfileInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const ProfileImageContainerPost = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    position: relative;
    overflow: hidden;
    background-color: #BBB;

    img {
        position: absolute;
        height: 50px;
        width: auto;
    }

    @media (min-width: 700px) {
        width: 80px;
        height: 80px;
        border-radius: 44px;

        img {
        height: 80px;
    }}


    
`

export const PostInformation = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    margin-left: 12px;
`

export const NameUser = styled.p`
    font-size: 3rem;
    letter-spacing: -0.01em;
    font-weight: bold;
    font-style: normal;
`
export const UserMoreInformation = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.4px;
    font-style: normal;
`

export const PostContent = styled.p`
    font-style: normal;
    margin-top: 16px;
    font-weight: normal;
    font-size: 2rem;
    line-height: 3.2rem;
    letter-spacing: 0.44px;
    color: #444444;
    width: 100%;
    word-wrap: break-word;
    margin-bottom: 2%;
    padding: 1%;
`

export const PostInteractionContainer = styled.div<PostInteractionContainerProps>`
    display: flex;
    justify-content: ${props => {
        if(props.myPost) return 'space-between'
        else return 'flex-end'}};
    align-items: center;
    margin-top: 4px;
`
export const EditDeleteContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: fit-content;
    align-items: center;
    height: 25px;

    img {
        height: auto;
        width: 24px;
        margin-left: 3%;
        cursor: pointer;}

    span {
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
        letter-spacing: 0.25px;
        color: var(--blue1);
        margin-left: 5%;
        margin-right: 10%;
    }
    
`

export const LikeHighlightContainer = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;

    img {
        height: 24px;
        width: 24px;
        margin-left: 8px;
        cursor: pointer;
    }
`
export const LikesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: fit-content;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
        letter-spacing: 0.25px;
        color: var(--blue1);
    }

    img {
        margin-left: 4px;
    }

`

