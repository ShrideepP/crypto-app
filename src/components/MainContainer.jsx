import React from 'react';
import Header from './Header';

function MainContainer() {
    return (
        <main className='w-full min-h-screen flex flex-col justify-end items-center gap-12'>
            <Header />
        </main>
    );
};

export default MainContainer;