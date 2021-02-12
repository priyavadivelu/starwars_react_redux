import React from "react";
import { connect } from "react-redux";
const LatestYear = ({ movies }) => (
  <div id="character-movies" className="col-md-6">
    <h1>Latest Movie</h1>

    {movies.map((movie) => {
      const yearArray = [];
      const dateArray = movie.release_date.split("-");
      const yearNum = parseInt(dateArray);
      console.log(yearNum);
    })}
  </div>
);

const mapStateToProps = ({ character: { movies } }) => ({
  movies,
});

export default connect(mapStateToProps)(LatestYear);
