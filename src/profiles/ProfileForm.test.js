import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ProfileForm from './ProfileForm';
import {UserProvider} from '../testUtils';

test('renders profile form without crashing', () => {
    const {getByText, getByLabelText} = render(
        <UserProvider>
            <ProfileForm/>
        </UserProvider>
    )
    expect(getByText('Profile')).toBeInTheDocument();
    expect(getByLabelText('Username')).toBeInTheDocument();
    expect(getByLabelText('First Name')).toBeInTheDocument();
    expect(getByLabelText('Last Name')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByText('Save Changes')).toBeInTheDocument();
})

test('matches snapshot', () => {
    const {asFragment} = render(
        <UserProvider>
            <ProfileForm/>
        </UserProvider>
    )
    expect(asFragment()).toMatchSnapshot();
})

test('profile form submits with correct input', async () => {
    const {getByText, getByLabelText} = render(
        <UserProvider>
            <ProfileForm/>
        </UserProvider>
    )

    fireEvent.change(getByLabelText('First Name'), {target: {value: 'Fang'}});
    fireEvent.change(getByLabelText('Last Name'), {target: {value: 'Boi'}});
    fireEvent.change(getByLabelText('Email'), {target: {value: 'FangBoi@gmail.com'}});
    fireEvent.click(getByText('Save Changes'));
})