// @ts-ignore
import React from 'react';

function Converter() {
    return (
        <main className="main">
            <div className="converter">
                <div className="converter-from">
                    <select className="converter-select" name="USD">
                        <option value="USD">USD</option>
                        <option value="RUB">RUB</option>
                    </select>
                    <h1 className="converter-title">98</h1>
                    <p className="converter-description">1 Доллар США = 81,35 Российский рубль</p>
                </div>

                <button className="converter-btn">&#x21C5;</button>

                <div className="converter-in">
                    <select className="converter-select" name="RUB">
                        <option value="RUB">RUB</option>
                        <option value="USD">USD</option>
                    </select>
                    <h1 className="converter-title">7796.1668</h1>
                    <p className="converter-description">81,35 Российский рубль = 1 Доллар США</p>
                </div>
            </div>
        </main>
    );
}

export default Converter;