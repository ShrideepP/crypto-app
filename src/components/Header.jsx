import React, { useState } from 'react';
import CryptoContainer from './CryptoContainer';

function Header() {
    const [input, setInput] = useState('');
    function handleInput(e) {
        setInput(e.target.value);
        console.log(e.target.value.toLowerCase())
    };

    return (
        <>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-2xl font-semibold'>Search Currency</h1>
                <input value={input} onInput={handleInput} style={{ background: 'linear-gradient(to right, #1d4ed8, #a21caf)' }} type="search" placeholder='Search' className='w-80 px-2 py-3 rounded-md text-center text-sm font-medium text-white bg-transparent outline-none placeholder-gray-300' />
            </div>
            <CryptoContainer search={input} />
        </>
    );
};

export default Header;