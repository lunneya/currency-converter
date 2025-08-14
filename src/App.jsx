import Header from "./components/header/Header.tsx";
import Converter from "./components/converter/Converter.jsx";

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

export default App;