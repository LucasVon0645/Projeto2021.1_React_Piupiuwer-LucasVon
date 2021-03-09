import styled from 'styled-components';

export const InputContainer = styled.input`

    height: 48px;
    width: 300px;
    background-color: var(--input-background);
    font-size: 2rem;
    letter-spacing: 0.44px;
    font-style: normal;
    border: 1px solid #000000;
    border-radius: 8px;
    margin-bottom: 16px;
    padding-left: 16px;

    @media (min-width: 700px) {
        width: 344px;

        img {
            width: 500px;
            height: auto;
        }
    }

`

