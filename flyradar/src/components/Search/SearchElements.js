import styled from 'styled-components'

export const SearchContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#000')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;

    }
`;

export const SearchWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
`;

export const InputS = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 500px;
    height: 75px;
    border-radius: 15px;
    font-size: 15px;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
    text-align: center;
`