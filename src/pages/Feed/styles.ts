import styled from 'styled-components';

export const FeedPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10rem;
`

export const FeedContent = styled.div`
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

export const FeedHeader = styled.h2`
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: 0em;
    color: var(--blue1);
    text-decoration: underline;
    margin-left: 5vw;
`