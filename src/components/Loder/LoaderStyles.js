import styled from 'styled-components';

export const WrapperLoader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 250px;
    background-color: ${({ theme }) => theme.colors.logo};
    min-height: 50vh;
`;

export const StyledLoader = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 25px solid ${({ theme }) => theme.colors.white};
    border-top: 25px solid ${({ theme }) => theme.colors.dark};;
    animation: loader 1s infinite linear;
    margin: 10px auto;

    @keyframes loader {
        100% {
            transform: rotate(360deg);
        }
    } 
`;

export const LoaderInfoText = styled.p`
    font-size: 14px;
    margin: 5px auto;
    font-weight: 700;
`;
