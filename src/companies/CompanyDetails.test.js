import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {UserProvider} from '../testUtils';
import CompanyDetails from './CompanyDetails';

test('renders company details without crashing', () => {
    render(
        <MemoryRouter>
            <UserProvider>
                <CompanyDetails/>
            </UserProvider>
        </MemoryRouter>
    )
})

test('matches snapshot', () => {
    const {asFragment} = render(
        <MemoryRouter>
            <UserProvider>
                <CompanyDetails/>
            </UserProvider>
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot();
})