import Header from "./components/header/Header.jsx";
import CurrencyConverter from "./components/converter/CurrencyConverter.jsx";

function App() {
    return (
        <div className="app">
            <div className="container">
                <Header />
                <CurrencyConverter />
            </div>
        </div>
    );
}

export default App;