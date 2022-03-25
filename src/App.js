import { DataContextProvider } from "./contexts/DataContext";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Regulations from "./pages/Regulations" 
import About from "./pages/About" 
import Pricing from "./pages/Pricing";

function App() {
    return (
        <DataContextProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cennik" element={<Pricing />} />
                <Route path="/o-nas" element={<About />} />
                <Route path="/regulamin" element={<Regulations />} />
            </Routes>
        </DataContextProvider>
    );
}

export default App;
