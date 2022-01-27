import React from 'react';
import { ErrorTextWrapper, ErrorText } from './ErrorTextInfoStyles';

const ErrorTextInfo = ({ value }) => {
    const display = value.length > 0 ? 'flex' : 'none';
    return (
        <ErrorTextWrapper display = {display} >
            <ErrorText>
                { value }
            </ErrorText>
        </ErrorTextWrapper>
    )
};

export default ErrorTextInfo;
