import React from "react";
import CharacterList from "./CharacterList";
import CharacterProfile from "./CharacterProfile";
import CharacterWorld from "./CharacterWorld";
import CharacterMovies from "./CharacterMovies";
// import "../../presentation/css/styles.css";

const App = () => (
  <div className="container" id="star_container">
    <div className="row">
      <CharacterList />
      <CharacterProfile />
    </div>
    <div className="row">
      <CharacterWorld />
      <CharacterMovies />
    </div>
  </div>
);

export default App;
