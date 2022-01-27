import styled from 'styled-components';

export const ErrorText = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: red;
    text-align: center;
`;

export const ErrorTextWrapper = styled.div`
    display: ${({display})=> display};
    flex-direction: column;
    align-items: center;
    width: 300px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid red;
    padding: 8px;
    margin: 10px 0 50px;
`;
