import React from 'react';
import { BannerText, CarBanner, Wrapper } from './headerStyles';

const Header = () => {
    return (
        <Wrapper>
            <BannerText>
                Let's find car for you!
            </BannerText>
            <CarBanner url = {require("../../images/car.jpg")} />
        </Wrapper>
    )
};

export default Header;
