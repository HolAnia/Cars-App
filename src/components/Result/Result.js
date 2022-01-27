import React, { useState, useEffect } from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';
import { WrapperResultsButton, WrapperResults, ButtonMore, ExtraSelect, WrapperExtraFilters, StyledParagraf, ExtraFilterTitle } from './ResultStyles';

const Result = ({ vehicles, fuel }) => {
    const fuelSelectValue = fuel.filter((item, index, array) => array.indexOf(item) === index);
    const [ number, setNumber ] = useState(9);
    const [ load, setLoad ] = useState (false);
    const [ selectedFuelType, setFuelType ] = useState('none');
    const [ result, setResult ] = useState([]);

    useEffect(() => {
        if( vehicles.length > 0 ) {
            setResult(vehicles)
            setLoad(true);
        } else {
            setLoad(false);
        }
    }, [ vehicles ]);

    useEffect(() => {
        if(vehicles.length > 0) {
            if (selectedFuelType !== 'none') {
                setResult(vehicles.filter( (item) => {
                    return item.fuelType ===  selectedFuelType;
                }));
            } else if (selectedFuelType === 'none') {
                setResult(vehicles);
            }
        };  
    }, [ selectedFuelType, vehicles]);

    const handleLoadMore = () => {
        setNumber(number + 9);
    }

    const handleChangeFuelType = (e) => {
        const value = e.currentTarget.value;
        setFuelType(value);
    };

    return (
        <>
        { load && (<WrapperResultsButton>
                <WrapperExtraFilters>
                    <ExtraFilterTitle>Extra filter:</ExtraFilterTitle>
                    {
                        fuelSelectValue.length > 1 && 
                            <ExtraSelect onChange = { handleChangeFuelType } >
                                <option value = 'none'>choose fuel type</option>
                            {
                                fuelSelectValue.map((fuel, id) => {
                                    return <option value = { fuel } key = { id } >{ fuel }</option>
                                })
                            }
                            </ExtraSelect>
                    }
                </WrapperExtraFilters>
                <StyledParagraf>{result.length} { result.length === 1 ? 'result' : 'results'}</StyledParagraf>
                <WrapperResults>
                    { 
                        result.slice(0, number).map((vehicle, id) => {
                            return (
                                <VehicleCard key = {id} make = {vehicle.make} model = {vehicle.model} bodyType = {vehicle.bodyType} engineCapacity = {vehicle.engineCapacity} enginePowerKW = {vehicle.enginePowerKW} enginePowerPS = {vehicle.enginePowerPS} fuelType = {vehicle.fuelType} />
                            )
                        })
                    }
                </WrapperResults>
                {
                    result.length > number && <ButtonMore onClick = { handleLoadMore }>Load more</ButtonMore>
                }
            </WrapperResultsButton>)
        }
        </>
    )
};

export default Result;
