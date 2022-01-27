import React from 'react';
import { CardHeader, CardTitle, VehicleCardWrapper, VehicleSubtitle, Logo, CardContent, VehicleTextInfo, InfoWrapper } from './VehicleCardStyles';

const VehicleCard = ({ make, model, bodyType, engineCapacity, enginePowerKW, enginePowerPS, fuelType }) => {
    return (
        <VehicleCardWrapper>
            <CardHeader>
                <CardTitle className = 'cardTitle' >{ make } { model }</CardTitle>
            </CardHeader>
            <CardContent>
                <VehicleSubtitle>Car details:</VehicleSubtitle>
                <InfoWrapper>
                    <Logo url = {require('../../images/car.png')} />
                    <VehicleTextInfo className = 'bodyType' >Body type: { bodyType }</VehicleTextInfo>   
                </InfoWrapper>
                <InfoWrapper>
                <Logo url = {require('../../images/oil.png')} />
                    <VehicleTextInfo className = "fuelType">Fuel type: { fuelType }</VehicleTextInfo>
                </InfoWrapper>
                <InfoWrapper>
                    <Logo url = {require('../../images/car-engine.png')} />
                    <CardContent>
                        <VehicleTextInfo className = 'engineCapacity' >Engine capacity: { engineCapacity } cm<sup>3</sup></VehicleTextInfo>
                        <VehicleTextInfo className = 'enginePowerPS' >Engine power PS: { enginePowerPS } </VehicleTextInfo>
                        <VehicleTextInfo className = 'enginePowerKW'>Engine power KW: { enginePowerKW }</VehicleTextInfo>
                    </CardContent>
                </InfoWrapper>
            </CardContent>
        </VehicleCardWrapper>
    )
};

export default VehicleCard;
