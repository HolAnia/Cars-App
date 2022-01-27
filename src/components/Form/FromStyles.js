import styled from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
    min-height: 37vh;
`;

export const StyledSection = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.logo};
    margin: 0 auto;

    @media only screen and (min-width: 1200px) {
        width: 1200px;
    }
`;

export const FormTitle = styled.h2`
    margin: 50px 0 30px;
`;

export const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin: 10px 0 30px;

    @media only screen and (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-around;
        width: 60%;
    }
`; 

export const StyledSelect = styled.select`
    height: 35px;
    width: 300px;
    border-radius: 10px;
    padding: 0 20px;
    margin: 20px 0 10px;
`;