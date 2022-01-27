import React, { useState, useEffect } from 'react';
import { StyledSection, FormWrapper, FormTitle, StyledSelect, SelectWrapper } from './FromStyles';
import axios from 'axios';
import Loader from '../Loder/Loder';
import ErrorTextInfo from '../ErrorTextInfo/ErrorTextInfo';
import Result from '../Result/Result';
import ErrorServer from '../ErrorServer/ErrorServer';

const Form  = () => {

    const [makes, setMakes] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [make, setMake] = useState('');
    const [models, setModels] = useState([]);
    const [model, setModel] = useState('');
    const [vehicles, setVehicles] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errorServer, setErrorServer] = useState(false);
    const [fuel, setFuel] = useState([]);
    const url = 'http://localhost:8080/api/';
    
    useEffect( () => {
        axios({
            method: 'GET',
            url: `${url}makes`
        })
        .then(res => {
            setLoaded(true)
            setMakes(res.data);
        })
        .catch( () => {
            setErrorServer(true);
        })
    }, []);

    useEffect( () => {
        setVehicles([]);
        setModel('')

        if(make !== "") {
            axios({
                method: 'GET',
                url: `${url}models?make=${make}`
            })
            .then (res => {
                setModels(res.data);
                if( res.data.length === 0) {
                    setErrorMessage(`Sorry we don't have models in this make, choose different make`);
                } else {
                    setErrorMessage('');
                }   
            })
            .catch(() => {
                setErrorServer(true);
            })
        }
    }, [make]);

    useEffect( () => {
        setVehicles([]);
        if(model !== "") {
            axios({
                method: 'get',
                url: `${url}vehicles?make=${make}&model=${model}`
            })
            .then(res => {
                setVehicles(res.data);
                if( res.data.length === 0 ) {
                    setErrorMessage(`Sorry we don't have car with this model, choose different model`)
                } else {
                    setErrorMessage('')
                }
            })
            .catch(() => {
                setErrorServer(true);
            })
        }
    }, [model, make]);

    useEffect(() => {
        if(vehicles.length > 0) {
            const fuelTypes = [];
            vehicles.map( item => {
                fuelTypes.push(item.fuelType);
                return null;
            } )
            setFuel(fuelTypes);
        }
    }, [vehicles]);

    const handleChoosenMake = ( e ) => {
        const value = e.currentTarget.value;
        setErrorMessage('')
        setMake('');
        setModel('');
        if(value !== 'none') {
            setMake(value);
        }
    };

    const handleChoosenModel = (e) => {
        const value = e.currentTarget.value
        setErrorMessage('');
        setModel('');
        if (value !== 'none') {
            setModel(value);
        }
    }

    const getValueName = (name) => {
        const small = name.toLowerCase();
        const bigFirstLetter = small[0].toUpperCase() + small.substring(1);
        const withoutWhiteSpaces = bigFirstLetter.replace(/\s/g, '');
        return withoutWhiteSpaces;
    }

    return (
        <>
        {errorServer ? <ErrorServer /> :
            <StyledSection>
            {
                loaded ? 
                <FormWrapper>
                    <FormTitle>What are you looking for?</FormTitle>
                    <SelectWrapper>
                    <StyledSelect name = 'makes' id = 'makes' onChange = { handleChoosenMake } >
                        <option value="none" >choose make</option>
                        {
                            makes.map((make, id) => {
                                return(
                                    <option key = {id} value={getValueName(make)}>{make}</option>
                                )
                            })
                        }
                    </StyledSelect>
                    {
                        models.length > 0 &&
                        <StyledSelect name = 'models' id = 'models' onChange = { handleChoosenModel }>
                            <option value = 'none'>choose model</option>
                            { models.map((model, id) => {
                                return (
                                    <option key= {id} value = {getValueName(model)}>{ model }</option>
                                )
                            })
                            }
                        </StyledSelect> 
                    }
                    </SelectWrapper>
                    
                    <ErrorTextInfo value = { errorMessage } />
                    
                </FormWrapper>
                : <Loader />}
                <Result vehicles = { vehicles } fuel = { fuel } />            
            </StyledSection>
        } 
        </>
    )
};

export default Form;
