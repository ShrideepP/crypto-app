import React from 'react';

function CryptoInfo() {
    return (
        <div className='w-full py-3 z-50 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sticky top-0 left-0 border-t-2 border-gray-400 bg-[#08090C]'>
            <div className='text-left'>
                <strong className='text-sm font-semibold'>Name</strong>
            </div>
            <div className='text-center'>
                <strong className='text-sm font-semibold'>Symbol</strong>
            </div>
            <div className='text-center hidden md:block'>
                <strong className='text-sm font-semibold'>Market Rank</strong>
            </div>
            <div className='text-center'>
                <strong className='text-sm font-semibold'>Current Price</strong>
            </div>
            <div className='text-right hidden lg:block'>
                <strong className='text-sm font-semibold'>Total Supply</strong>
            </div>
        </div>
    );
};

export default CryptoInfo;