import styled from 'styled-components';

export const FeedPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
`

export const FeedContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
    padding: 12px 22px;

    @media (min-width: 700px) {
        padding: 24px 40px;
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
`