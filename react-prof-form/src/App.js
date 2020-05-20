import React from 'react';

function App() {
    return (
        <div className='container'>
            <div className='wrapper'>
                <p className='heading'>Provide Your Credetionals</p>
                <input className='name_input' placeholder='Enter your name...'/>
                <input className='age_input' placeholder='Enter your age...'/>
                <input className='email_input' placeholder='Enter your email...'/>
                <input className='number_input'placeholder='Enter your number...'/>
                <input className='submit_input' type='submit' value='SUBMIT'/>
            </div>
        </div>);
}

export default App;
