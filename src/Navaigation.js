import { Link } from "react-router-dom";
import "./navaigation.css";
import Logo from "./Logo";
const Navaigation = () => {
  return (
    <nav className="NavBar">
      <h1 className="nav-h1">hi</h1>
      <Logo />
      <Link className="App-link" to="/">
        RandomJoke
      </Link>
      <Link className="App-link" to="/by-category">
        Jokes by category
      </Link>
      <Link className="App-link" to="/search">
        Joke search
      </Link>
      <Link className="App-link" to="/popular">
        Popular jokes
      </Link>
    </nav>
  );
};
export default Navaigation;
