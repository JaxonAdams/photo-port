import React, { useState } from 'react';

const Contact = () => {
    const [ formState, setFormState ] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        // submission to server handled here
    };

    return (
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
};

export default Contact;