import styled from 'styled-components';

export const FootterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.dark};
    min-height: 15vh;
    justify-content: space-between;
    margin: 0 auto;

    @media only screen and (min-width: 1200px) {
        width: 1200px;
    }
`;

export const FooterSubtitle = styled.h3`
    color: ${({ theme }) => theme.colors.logo};
    margin: 60px auto 20px;
    text-align: center;

    a {
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;
        text-decoration: none;

        &:hover {
            color: ${({ theme }) => theme.colors.logo};
        }
    }
`;

export const SourceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
`;

export const StyledFooterParagraf = styled.p`
    font-size: 12px;
    margin: 15px 5px 5px;
    font-weight: 700;
    color: #ffc800;
    margin: 30px auto 15px; 

    @media only screen and (min-width: 768px) {
        font-size: 14px; 
    }
`;

export const StyledLink = styled.a`
    color: ${({ theme }) => theme.colors.logo};
    font-size: 8px;
    margin: 2px auto 5px;

    
    @media only screen and (min-width: 768px) {
        font-size: 10px;
    }
`
