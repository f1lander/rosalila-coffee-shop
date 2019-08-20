import React, { useState } from 'react';
import { FormControl, InputLabel, FormHelperText, Input } from '@material-ui/core';

import './ContactForm.css';
export default function ContactForm() {
    const onSubmit = async e => {
        e.preventDefault();

        const data = { name, email, phone, address };

        // call netlify
        try {

            let response = await fetch('/.netlify/functions/purchase', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // setStatus('complete');
                console.log('ok')
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (err) {
            // setStatus('error');
        }
    };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');


    return (
        <form className="Form-container" onSubmit={onSubmit}>
            <div className="padding-bottom">
                <FormControl className="field">
                    <InputLabel htmlFor="my-input">Full Name</InputLabel>
                    <Input id="my-input" name="name" value={name} onChange={e => setName(e.target.value)} aria-describedby="my-helper-text" />
                </FormControl></div>
            <div className="padding-bottom">
                <FormControl className="field">
                    <InputLabel htmlFor="my-input2">Email address</InputLabel>
                    <Input id="my-input2" name="email" value={email} onChange={e => setEmail(e.target.value)} aria-describedby="my-helper-text" />
                </FormControl>
            </div>
            <div className="padding-bottom">
                <FormControl className="field">
                    <InputLabel htmlFor="my-input3">Phone Number</InputLabel>
                    <Input id="my-input3" name="phone" value={phone} onChange={e => setPhone(e.target.value)} aria-describedby="my-helper-text" />
                </FormControl>
            </div>
            <div className="padding-bottom">
                <FormControl className="field">
                    <InputLabel htmlFor="my-input4">Deliver address</InputLabel>
                    <Input id="my-input4" name="address" value={address} onChange={e => setAddress(e.target.value)} aria-describedby="my-helper-text" />
                </FormControl>
            </div>
            <div className="padding-bottom">
                <FormControl className="field">
                    <input className="Product-buy-button" type="submit" value="Submit" />
                </FormControl>
            </div>
        </form>
    )

}