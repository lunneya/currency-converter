import React from 'react';
import Form from './form/Form.jsx';

function Converter() {
    return (
        <main className="main">
            <div className="converter">
                <Form
                    currency='USD'
                />
                <button className="converter-btn">&#x21C5;</button>
                <Form
                    currency='RUB'
                />

                {/*<div className="converter-in">*/}
                {/*    <select className="converter-select" name="RUB">*/}
                {/*        <option value="RUB">RUB</option>*/}
                {/*        <option value="USD">USD</option>*/}
                {/*    </select>*/}
                {/*    <h1 className="converter-title">7796.1668</h1>*/}
                {/*    <p className="converter-description">81,35 Российский рубль = 1 Доллар США</p>*/}
                {/*</div>*/}
            </div>
        </main>
    );
}

export default Converter;