import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import './App.css';
import { fetchAllMovies } from "./store/action";
import action_key from "./constants/action-key";

function App() {
  const dispatch = useDispatch()

  // example read state from redux
  const { movies, favoriteMovies } = useSelector((state) => state.movie)

  // console.log(movies[0], "<< movies");
  console.log(favoriteMovies, "<< favorite movies");

  useEffect(() => {
    dispatch(fetchAllMovies())
  }, [dispatch])

  const addToFavorite = (movie) => {
    // example dispatch redux
    dispatch({
      type: action_key.ADD_FAVORITE_MOVIE,
      payload: movie
    })
  }

  return (
    <div className="App">
      {
        movies?.map((item, idx) => {
          return (
            <div>
              <label>{item.title}</label>
              <button onClick={() => addToFavorite(item)}>Add to favorite</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
