import styled from 'styled-components';
import { StyledSelect } from '../Form/FromStyles';

export const WrapperResultsButton = styled.div`
    display: flex;
    flex-direction: column;
`;

export const WrapperResults = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const ButtonMore = styled.div`
    width: 200px;
    height: 50px;
    margin: 10px auto 50px;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.logo};
    box-shadow: none;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color:  ${({ theme }) => theme.colors.dark};
        border: 2px solid  ${({ theme }) => theme.colors.dark};
        background-color: ${({ theme }) => theme.colors.logo};
    }
`;

export const StyledParagraf = styled.p`
    font-weight: 700;
    width: 80%;
    margin: 15px auto 5px;
    text-align: center;
`;

export const WrapperExtraFilters = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ExtraSelect = styled(StyledSelect)`
    width: 180px;
    margin-top: 5px;
`;

export const ExtraFilterTitle = styled.h3`
    margin: 0 auto;
`;

