import React, { useState, useEffect } from 'react';
import { getCurrencyData } from "../../api/usdApi.js";

function Form({ currency }) {

    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getCurrencyData(currency)
            .then(data => setInfo(data))
            .catch(err => {
                console.error(err);
                setInfo('Не удалось загрузить данные');
        })
            .finally(() => setLoading(false));
    }, [currency]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;
    if (!info) return null;

    return (
        <div className="converter-from">
            <select className="converter-select" name={currency}>
                <option value={currency}>{info.code}</option>
                <option value="RUB">RUB</option>
            </select>
            <h1 className="converter-title">{info.rates[0].bid} PLN</h1>
            <p className="converter-description">
                {`1 ${info.code} = ${info.rates[0].bid} PLN`}
            </p>
        </div>
    );
}

export default Form;