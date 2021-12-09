import { Route, Routes } from "react-router";
import "./App.css";
import Navaigation from "./Navaigation";
import RandomJoke from "./RandomJoke";
import JokesByCategory from "./JokesByCategory";
import JokeSearch from "./JokeSearch";
import PopularJokes from "./PopularJokes";
import NotFound from "./NotFound";

const App = () => {
  return (
    <div className="App">
      <Navaigation />
      <Routes>
        <Route path="/" element={<RandomJoke />} />
        <Route path="by-category" element={<JokesByCategory />} />
        <Route path="search" element={<JokeSearch />} />
        <Route path="popular" element={<PopularJokes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
