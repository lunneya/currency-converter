(async()=>{
    const getData = async() => {
        const data = await fetch('https://api.nbp.pl/api/exchangerates/rates/a/gbp/2012-01-02/')
        const result = await data.json()
        return result
    }

    const data = await getData()
    console.log(data)
})()