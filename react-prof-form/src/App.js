import React from 'react';
import Input from './construct/input'

function App() {
    return (
        // <div className='first_page_container'>
        //     <div className='welcome_container'>
        //         <p className='welcome_heading'>Welcome To Your Our Page</p>
        //         <input className='welcome_button' type='submit' value='Open'/>
        //     </div>
        // </div>
        <div className = 'container'>
            <div className='wrapper'>
                <h1 className = 'container__title'>Provide Your Credetionals</h1>
                <Input
                type = {'text'}
                className = {'container__params'}
                placeholder = {'Enter your name...'}
                />
                <Input
                type  = {'number'}
                className = {'container__params'}
                placeholder = {'Enter your age...'}
                />
                <Input
                type = {'email'}
                className = {'container__params'}
                placeholder = {'Insert your mail'}
                />
                <Input
                type = {'tel'}
                className = {'container__params'}
                placeholder = {'Enter your number...'}
                />
                <Input
                type = {'submit'}
                className = {'container__submit-input'}
                value = {'SUBMIT'}
                />
            </div>
        </div>
);}

export default App;
