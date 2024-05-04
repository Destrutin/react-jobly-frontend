import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import CompanyCard from './CompanyCard';

test('renders company card without crashing', () => {
    render(
        <MemoryRouter>
            <CompanyCard
                handle="test"
                name="test"
                description="test"
                logoUrl="test.png"
            />
        </MemoryRouter>
    )
})

test('matches snapshot', () => {
    const {asFragment} = render(
        <MemoryRouter>
            <CompanyCard
            handle="test"
            name="test"
            description="test"
            logoUrl="test.png"
            />
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot();
})