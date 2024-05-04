import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {UserProvider} from "../testUtils";
import JobCard from './JobCard';

test('renders company card without crashing', () => {
    render(
        <MemoryRouter>
            <UserProvider>
            <JobCard
                id="1"
                title="test"
                salary="test"
                equity="test"
                companyName="test company"
            />
            </UserProvider>
        </MemoryRouter>
    )
})

test('matches snapshot', () => {
    const {asFragment} = render(
        <MemoryRouter>
            <UserProvider>
            <JobCard
                id="1"
                title="test"
                salary="test"
                equity="test"
                companyName="test company"
            />
            </UserProvider>
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot();
})