import React from 'react';
import  { render }  from '@testing-library/react';
import About from '../index';

describe('Weather', ()=>{
    it('should display intro', ()=>{
        const {getByText} = render(<About />);
        getByText("Don't know where to travel next? Not to worry, with Next Destination you will get different travel destination recommendations based on your own preferences. Complete our quiz and pack your bags, because your Next Destination trip begins here!")
    })
})