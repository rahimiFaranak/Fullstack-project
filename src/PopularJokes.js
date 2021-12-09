import { useState } from "react";
const PopularJokes = () => {
  const [Popular, setPopular] = useState([]);
  fetch(`https://ft-jokes-backend.herokuapp.com/popular`)
    .then((response) => response.json())
    .then((data) => setPopular(data));
  return (
    <div>
      {Popular.map((joke) => (
        <p key={joke}>{joke}</p>
      ))}
    </div>
  );
};
export default PopularJokes;
