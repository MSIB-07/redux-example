import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import logo from './logo.svg';
import './App.css';
import { fetchAllMovies } from "./store/action";

function App() {
  const dispatch = useDispatch()

  const { movies } = useSelector((state) => state.movie)

  console.log(movies, "<< movies");

  useEffect(() => {
    dispatch(fetchAllMovies())
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;