import React, { useState, useEffect } from 'react';
import CryptoHeader from './CryptoHeader';
import CryptoCoin from './CryptoCoin';
import axios from 'axios';

function CryptoContainer({ search }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false';
        axios.get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const crytoCoins = data.map(coin => {
        return <CryptoCoin key={coin.id} coinData={coin} />
    });

    const filterAllCoins = data.filter(coin => {
        return coin.name.toLowerCase().includes(search.toLowerCase());
    });

    const searchedCoin = filterAllCoins.map(coin => {
        return <CryptoCoin key={coin.id} coinData={coin} />
    });

    return (
        <div className='h-[70vh] md:h-[60vh] w-[95%] md:w-[40rem] lg:w-[45rem] overflow-y-scroll relative'>
            <CryptoHeader />
            {
                searchedCoin ? searchedCoin : crytoCoins
            }
        </div>
    );
};

export default CryptoContainer;