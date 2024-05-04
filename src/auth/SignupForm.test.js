import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import SignupForm from './SignupForm';
import { act } from 'react-dom/test-utils';

test('renders signup form without crashing', () => {
    render(
        <MemoryRouter>
            <SignupForm/>
        </MemoryRouter>
    )
})

test('matches snapshot', () => {
    const testSignup = [{username: "Fang", password: "Fangiscool", firstName: "Fang", lastName: "Boi", email: "FangBoi@gmail.com"}]
    const {asFragment} = render(
        <MemoryRouter>
            <SignupForm signup={testSignup}/>
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot();
})

test('Signup form submits with correct data', async () => {
    const mockSignup = jest.fn();

    const {getByLabelText, getByText} = render(
        <MemoryRouter>
            <SignupForm signup={mockSignup}></SignupForm>
        </MemoryRouter>
    )
    
    await act(async () => {
        fireEvent.change(getByLabelText('Username'), {target: {value: 'Fang'}});
        fireEvent.change(getByLabelText('Password'), {target: {value: 'Fangiscool'}});
        fireEvent.change(getByLabelText('First name'), {target: {value: 'Fang'}});
        fireEvent.change(getByLabelText('Last name'), {target: {value: 'Boi'}});
        fireEvent.change(getByLabelText('Email'), {target: {value: 'FangBoi@gmail.com'}});

        fireEvent.submit(getByText('Submit'));

        expect(mockSignup).toHaveBeenCalled();
    })
})