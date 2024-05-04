import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {UserProvider} from "../testUtils";
import JobCardList from './JobCardList';

const jobs = [
    {id: 1, title: "test", salary: "1", equity: "1", companyName: "test"}
]

test('renders job card list without crashing', () => {
    render(
        <MemoryRouter>
            <UserProvider>
            <JobCardList jobs={jobs}/>
            </UserProvider>
        </MemoryRouter>
    )
})

test('matches snapshot', () => {
    const {asFragment} = render(
        <MemoryRouter>
            <UserProvider>
            <JobCardList jobs={jobs}/>
            </UserProvider>
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot();
})