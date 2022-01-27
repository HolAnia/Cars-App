import React from 'react';
import { shallow } from 'enzyme';
import VehicleCard from './VehicleCard';

const props = {
    make: 'testMake',
    model: 'testModel', 
    bodyType: 'TestBodyType',
    engineCapacity: 'TestEngineCapacity',
    enginePowerKW: 'TestEnginePowerKW',
    enginePowerPS: 'TestEnginePowerPS',
    fuelType: 'TestFuelType'
}

describe('rendering components', () => {
    it('renders VehicleCard withou crashing', () => {
        shallow(<VehicleCard />);
    });
})

describe('passing props', () => {
    const wrapper = shallow(<VehicleCard make = {props.make} model = {props.model} bodyType = { props.bodyType} engineCapacity = { props.engineCapacity } enginePowerKW = { props.enginePowerKW} enginePowerPS = { props.enginePowerPS } fuelType = { props.fuelType } />);

    it('make ans model props are corect', () => {
        expect(wrapper.find('.cardTitle').text()).toEqual(props.make + ' ' + props.model);
    });

    it('bodyType prop is corect', () => {
        expect(wrapper.find('.bodyType').text()).toEqual(`Body type: ${props.bodyType}`);
    });

    it('fuelType prop is corect', () => {
        expect(wrapper.find('.fuelType').text()).toEqual(`Fuel type: ${ props.fuelType}`);
    });

    it('engineCapacity prop is corect', () => {
        expect(wrapper.find('.engineCapacity').text()).toEqual(`Engine capacity: ${ props.engineCapacity } cm3`);
    })

    it('enginePowerKW prop is corect', () => {
        expect(wrapper.find('.enginePowerKW').text()).toEqual(`Engine power KW: ${ props.enginePowerKW }`);
    })

    it('enginePowerPS prop is corect', () => {
        expect(wrapper.find('.enginePowerPS').text()).toEqual(`Engine power PS: ${ props.enginePowerPS }`);
    })

})



