import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-mainColor flex justify-center items-center p-4'>
            <form 
            method='POST'
            action='https://getform.io/f/3e300990-7bcf-49e4-9361-9ba934bc2735'
            className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold text-textMainColor inline border-b-4 border-accentColor'>Contact</p>
                    <p className='text-textMainColor py-4'>// Submit the form below or shoot me an email - kirakisel555@gmail.com</p>
                </div>
                <input 
                type='text' 
                placeholder='Name' 
                name='name' 
                className='bg-slate-600 p-2'
                />
                <input 
                type='email' 
                placeholder='Email' 
                name='email' 
                className='my-4 p-2 bg-slate-600'
                />
                <textarea 
                name='message' 
                placeholder='Message'
                rows='10'
                className='bg-slate-600 p-2'
                >
                </textarea>
                <button className='text-white border-2 hover:bg-accentColor hover:border-accentColor px-4 py-3 my-8 mx-auto flex ite'>Let`s Collaborate</button>
            </form>
        </div>
    );
}

export default Contact;