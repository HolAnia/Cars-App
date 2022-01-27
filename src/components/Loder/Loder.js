import React from 'react';
import { LoaderInfoText, StyledLoader, WrapperLoader } from './LoaderStyles';

const Loader = () => {
    return (
        <WrapperLoader>
            <StyledLoader />
            <LoaderInfoText>
                We are traing to connect with server
            </LoaderInfoText>
            <LoaderInfoText>
                If it takes more than 10s please refresh your bowser
            </LoaderInfoText>
        </WrapperLoader>
    )
};

export default Loader;
