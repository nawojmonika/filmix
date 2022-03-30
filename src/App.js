import { DataContextProvider } from "./contexts/DataContext";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Regulations from "./pages/Regulations"
import About from "./pages/About"
import Nav from "./components/Nav";
import ErrorPage from "./pages/ErrorPage";
import Basket from "./pages/Basket";

function App() {
    return (
        <DataContextProvider>
            <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/o-nas" element={<About />} />
                    <Route path="/regulamin" element={<Regulations />} />
                    <Route path="/koszyk" element={<Basket/>}/>
                    <Route path="/*" element={<ErrorPage/>}/>
                </Routes>
        </DataContextProvider>
    );
}

export default App;
