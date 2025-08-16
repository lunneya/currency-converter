import React from 'react';
import CurrencyRate from './CurrencyRate.jsx';

function CurrencyConverter() {
    return (
        <main className="main">
            <div className="converter">
                <CurrencyRate currency='USD' />
                {/*<button className="converter-btn">&#x21C5;</button>*/}
                {/*<CurrencyRate currency='EUR' />*/}
            </div>
        </main>
    );
}

export default CurrencyConverter;