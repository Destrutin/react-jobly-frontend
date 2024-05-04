import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import CompanyList from './CompanyList';

test('renders company details without crashing', () => {
    render(
        <MemoryRouter>
            <CompanyList/>
        </MemoryRouter>
    )
})

test('matches snapshot', () => {
    const {asFragment} = render(
        <MemoryRouter>
            <CompanyList/>
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot();
})