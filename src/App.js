import { DataContextProvider } from "./contexts/DataContext";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Regulations from "./pages/Regulations"
import About from "./pages/About"
import Pricing from "./pages/Pricing";
import Nav from "./components/Nav";
import ErrorPage from "./pages/ErrorPage";

function App() {
    return (
        <DataContextProvider>
            <Nav />
            <div className="container-xl d-flex flex-column h-100 py-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cennik" element={<Pricing />} />
                    <Route path="/o-nas" element={<About />} />
                    <Route path="/regulamin" element={<Regulations />} />
                    <Route path="/*" element={<ErrorPage/>}/>
                </Routes>
            </div>
        </DataContextProvider>
    );
}

export default App;
