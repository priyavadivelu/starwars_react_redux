import React from "react";
import CharacterList from "./CharacterList";
import CharacterProfile from "./CharacterProfile";
import LatestYear from "./LatestYear";
import CharacterMovies from "./CharacterMovies";
// import "../../presentation/css/styles.css";

const App = () => (
  <div className="container" id="star_container">
    <div className="row">
      <CharacterList />
      <CharacterProfile />
    </div>
    <div className="row">
      <CharacterMovies />
      {/* <LatestYear /> */}
    </div>
  </div>
);

export default App;
