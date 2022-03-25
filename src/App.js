import { DataContextProvider } from "./contexts/DataContext";
import MovieList from "./components/MovieList/MovieList";
import Regulations from "./components/Regulations/Regulations" 
import { Routes, Route} from "react-router-dom";

function App() {
    return (
        <DataContextProvider>
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/regulamin" element={<Regulations />} />
            </Routes>
        </DataContextProvider>
    );
}

export default App;
