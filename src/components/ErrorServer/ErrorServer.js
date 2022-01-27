import React from 'react';
import { ErrorWrapper, SadFace, ErrorText } from './ErrorServerStyles';

const ErrorServer = () => {
    return (
        <ErrorWrapper>
            <SadFace url = {require("../../images/sad.png")}/>
            <ErrorText>Ups!!! Something went wrong :( </ErrorText>
            <ErrorText>please refresh your browser</ErrorText>
        </ErrorWrapper>
    )
};

export default ErrorServer;
