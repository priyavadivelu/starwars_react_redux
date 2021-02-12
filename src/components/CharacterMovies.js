import React from "react";
import { connect } from "react-redux";
const CharacterMovies = ({ movies }) => (
  <div id="character-movies" className="col-md-6">
    <div className="app-card">
      <div className="app-card-header">Movies</div>
      <div className="app-card-body">
        <ul>
          {movies.map((movie) => {
            const dateArray = movie.release_date.split("-");
            return (
              <li key={movie.title}>
                {movie.title} ({dateArray[0]})
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ character: { movies } }) => ({
  movies,
});

export default connect(mapStateToProps)(CharacterMovies);
