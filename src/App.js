import React from "react";
import {useState, useEffect} from "react";
import './App.css';
import Movie from "./components/Movie"


const MovieApi = "https://movie-task.vercel.app/api/popular?page=1";
const SearchApi = "https://movie-task.vercel.app/api/search?page=1&query="


function App() {
  const[searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
}, []);
async function fetchMovies(){
  await fetch(MovieApi)
    .then(res => res.json())
    .then(res => {
      console.log(res.data);
      setMovies(res.data.results);
    })  
  };

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    fetch(SearchApi+ searchTerm)
    .then((res) => res.json())
    .then((res) =>{
      setMovies(res.data.results);
    });
  };


  const handleOnChange = (e) => {
    const searchName = e.target.value;
    setSearchTerm(searchName);
  };



  return (
    <><header>
      <form onSubmit={handleOnSubmit}>
      <input 
      className="search" 
      type="search"
      placeholder="Search..." 
      value ={searchTerm}
      onChange= {handleOnChange}
      />
      </form> 
    </header>
    <div className="container">
        {movies.length > 0 &&
          movies.map(movie => <Movie key={movie.id} {...movie} />)}
      </div>
      </>

  );
}

export default App;
