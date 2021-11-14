import {DataContextProvider} from "./contexts/DataContext";
import MovieList from "./components/MovieList";


function App() {
    return (
        <DataContextProvider>
            <MovieList/>
        </DataContextProvider>
    );
}

export default App;
