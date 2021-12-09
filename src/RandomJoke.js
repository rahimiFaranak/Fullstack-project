import React, { useEffect, useState } from "react";
import "./randomjoke.css";

const RandomJoke = () => {
  const [joke, setJoke] = useState("");
  const lodJoke = () => {
    fetch("https://ft-jokes-backend.herokuapp.com/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJoke(data);
      });
  };
  useEffect(() => {
    lodJoke();
  }, []);
  return (
    <div className="Div">
      <button className="Button" onClick={lodJoke}>
        NewJoke
      </button>
      <p key={joke} className="Paragraph">
        {joke}
      </p>
    </div>
  );
};
export default RandomJoke;
