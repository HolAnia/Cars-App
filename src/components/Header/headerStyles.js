import styled from 'styled-components';

export const Wrapper = styled.header`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 15px 0;
    margin: 0 auto;
    min-height: 30vh;

    @media only screen and (min-width: 1200px) {
        width: 1200px;
    }
`;

export const CarBanner = styled.div`
    background-image: ${ ({ url })=>`url('${ url }')` };
    width: 100%;
    height: 180px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;


    @media only screen and (min-width: 768px) {
        background-size: contain;
        height: 221px;
    }
`;

export const BannerText = styled.h1`
    color: ${({ theme }) => theme.colors.logo};
    text-align: center;
    margin: 60px auto 50px;
`;
