import React from 'react';
import { FootterWrapper, SourceWrapper, StyledFooterParagraf, StyledLink, FooterSubtitle } from './FooterStyles';

const Footer = () => {
    return (
        <FootterWrapper>
            <FooterSubtitle>Cars App - created by <a href= "https://github.com/HolAnia" >HolAnia</a></FooterSubtitle>  
            <SourceWrapper>
                <StyledFooterParagraf>Photos sources:</StyledFooterParagraf>
                <StyledLink href='https://pl.freepik.com/wektory/'>pl.freepik.com</StyledLink>
                <StyledLink href="https://www.flaticon.com/free-icons/" title="oil icons">Freepik - Flaticon</StyledLink>
            </SourceWrapper>
        </FootterWrapper>
    )
};

export default Footer;
