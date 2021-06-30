import React from 'react';
import  { render, fireEvent }  from '@testing-library/react';
import Weather from '../index';

const mockRes ={
    base: "stations",
    clouds: {all: 90},
    cod: 200,
    coord: {lon: -80.1937, lat: 25.7743},
    dt: 1625074241,
    id: 4164138,
    main: {temp: 24.93, feels_like: 25.8, temp_min: 23, temp_max: 28.33, pressure: 1019},
    name: "Miami",
    rain: {'1h': 2.45},
    sys: {type: 1, id: 4896, country: "US", sunrise: 1625049156, sunset: 1625098567},
    timezone: -14400,
    visibility: 10000,
    weather: [{}],
    wind: {speed: 1.54, deg: 0}
}

beforeEach(()=>{
    fetch.resetMocks()
})

describe('Weather', ()=>{
    it('should display header', ()=>{
        const {getByText} = render(<Weather />);
        getByText('check the weather!')
    })
    it('should change the input', ()=>{
        const {getByPlaceholderText} = render(<Weather />);
     fireEvent.change(getByPlaceholderText('search city...'), {target:{value: 'tokyo'}});
     expect(getByPlaceholderText('search city...').value).toBe('tokyo')
    })
    it('should submit the form when enter key is pressed', ()=>{
        fetch.mockResponseOnce(JSON.stringify(mockRes))
        const {getByPlaceholderText} = render(<Weather />);
     fireEvent.keyPress(getByPlaceholderText('search city...'), {key: 'Enter', code: 13, charCode: 13});
     expect(fetch).toHaveBeenCalledTimes(1)
    })
})