import {DataContextProvider} from "./contexts/DataContext";
import MovieList from "./components/MovieList";


function App() {

    console.log(DataContextProvider)
    return (
        <DataContextProvider>
            <MovieList/>
        </DataContextProvider>
    );
}

export default App;
