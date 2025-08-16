import React, { useState, useEffect } from 'react';
import { getCurrencyData } from "../api/currencyApi.js";
import Input from "../ui/input/Input.jsx";

function CurrencyRate({ currency }) {

    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const tryLoad = async () => {
            try {
                let data;
                try {
                    data = await getCurrencyData(currency, 'c');
                } catch {
                    data = await getCurrencyData(currency, 'a');
                }
                setInfo(data);
            } catch (err) {
                console.error(err);
                setError(`Нет данных для ${currency}`);
            } finally {
                setLoading(false);
            }
        };

        tryLoad();
    }, [currency]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;
    if (!info) return null;

    const rate = info.rates[0].bid ?? info.rates[0].mid;

    return (
        <div className="converter-from">

            <select className="converter-select" name={currency}>
                <option value={currency}>{info.code}</option>
            </select>

            <Input
                value={amount}
                onChange={setAmount}
                label='Введите сумму'
            />

            <h1 className='converter-title'>{(amount * rate).toFixed(2)} PLN</h1>

            <p className="converter-description">
                {`1 ${info.code} = ${rate} PLN`}
            </p>
        </div>
    );
}

export default CurrencyRate;