import styled from 'styled-components';

export const VehicleCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: cener;
    border: 3px solid ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    margin: 20px auto;
    padding: 10px;
    width: 80%;
    
    @media only screen and (min-width: 576px) {
        width: 300px;
        margin: 20px;
    }
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardTitle = styled.h3`
    text-transform: capitalize;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.logo};
`;

export const Logo = styled.div`
    background-image: ${ ({ url })=>`url('${ url }')` };
    width: 70px;
    height: 50px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 20px;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
`;

export const VehicleSubtitle = styled.p`
    font-weight: 700;
    margin: 5px 0;
    color: ${({ theme }) => theme.colors.dark};
`;

export const VehicleTextInfo = styled.p`
    font-size: 14px;
    margin: 3px 0;
`;
