export async function getCurrencyData(currency, table = 'c') {
    // last/1 гарантирует, что мы получим последний курс, даже если сегодня данных нет
    const url = `https://api.nbp.pl/api/exchangerates/rates/${table}/${currency.toLowerCase()}/last/1/`;
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Ошибка загрузки данных для ${currency} (${table})`);
    }

    return await res.json();
}
