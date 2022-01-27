import styled from 'styled-components';

export const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50vh;
    background-color: ${({theme}) => theme.colors.logo};
    padding-top: 50px;

    @media only screen and (min-width: 1200px) {
        width: 1200px;
        margin: 0 auto;
    }
`;

export const SadFace = styled.div`
    background-image: ${ ({ url })=>`url('${ url }')` };
    background-size: contain;
    background-position: center;
    width: 150px;
    height: 150px;
    background-repeat: no-repeat;
    margin: 10px auto;
`
export const ErrorText = styled.p`
    margin: 5px 0;
    font-weight: 700;
`;