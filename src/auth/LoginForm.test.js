import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import LoginForm from './LoginForm';
import { act } from 'react-dom/test-utils';

test('renders login form without crashing', () => {
    render(
        <MemoryRouter>
            <LoginForm/>
        </MemoryRouter>
    )
})

test('matches snapshot', () => {
    const testLogin = [{username: "Fang", password: "Fangiscool"}]
    const {asFragment} = render(
        <MemoryRouter>
            <LoginForm login={testLogin}/>
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot();
})

test('Login form submits with correct data', async () => {
    const mockLogin = jest.fn();

    const {getByLabelText, getByText} = render(
        <MemoryRouter>
            <LoginForm login={mockLogin}></LoginForm>
        </MemoryRouter>
    )
    
    await act(async () => {
        fireEvent.change(getByLabelText('Username'), {target: {value: 'Fang'}});
    fireEvent.change(getByLabelText('Password'), {target: {value: 'Fangiscool'}});

    fireEvent.submit(getByText('Submit'));

    expect(mockLogin).toHaveBeenCalled();
    })
})