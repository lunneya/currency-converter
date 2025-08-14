// export default (async()=>{
//     const getData = async() => {
//         const data = await fetch('https://api.nbp.pl/api/exchangerates/rates/c/usd/today/');
//         const result = await data.json();
//         return result;
//     }
//
//     const data = await getData();
//     console.log(data.code);
// }) ();

export async function getCurrencyData() {
    const res = await fetch('https://api.nbp.pl/api/exchangerates/rates/c/usd/today/');
    if (!res.ok) {
        throw new Error('Ошибка загрузки данных');
    }
    return await res.json();
}