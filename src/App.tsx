import Header from "./components/header/Header.tsx";
import Converter from "./components/converter/Converter.tsx";

function App() {
    return (
        <div className="app">
            <div className="container">
                <Header />
                <Converter />
            </div>
        </div>
    );
}

// (async()=>{
//     const getData = async() => {
//         const data = await fetch('https://api.nbp.pl/api/exchangerates/rates/a/gbp/2012-01-02/')
//         const result = await data.json()
//         return result
//     }
//
//     const data = await getData()
//     console.log(data)
// })()

export default App;