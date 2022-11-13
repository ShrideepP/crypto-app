import React from 'react';

function CryptoCard({ coinData }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div className='w-full py-3 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center sticky top-0 left-0 border-t-2 border-gray-400 bg-[#08090C]'>
            <div className='text-left flex items-center gap-4'>
                <img className='w-8' src={coinData["image"]} alt={coinData["name"] + "-image"} />
                <strong className='text-sm font-semibold'>
                    {coinData["name"]}
                </strong>
            </div>
            <div className='text-center'>
                <strong className='text-sm font-semibold'>
                    {coinData["symbol"].toUpperCase()}
                </strong>
            </div>
            <div className='text-center hidden md:block'>
                <strong className='text-sm font-semibold'>
                    {coinData["market_cap_rank"]}
                </strong>
            </div>
            <div className='text-center'>
                <strong className='text-sm font-semibold'>
                    {coinData["current_price"] ? formatter.format(coinData["current_price"].toFixed(2)) : "$0"}
                </strong>
            </div>
            <div className='text-right hidden lg:block'>
                <strong className='text-sm font-semibold'>
                    {coinData["total_supply"] ? formatter.format(coinData["total_supply"].toFixed(2)) : "$0"}
                </strong>
            </div>
        </div>
    );
};

export default CryptoCard;