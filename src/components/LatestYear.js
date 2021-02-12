import React from "react";
import { connect } from "react-redux";

const LatestYear = ({ movies }) => {
  const getMovieName = () => {
    if (movies.length) {
      const latestMovieData = movies.reduce((a, b) => {
        return new Date(a.release_date) > new Date(b.release_date) ? a : b;
      });
      return latestMovieData.title;
    }
  };

  return (
    <div id="character-movies" className="col-md-6">
      <div className="app-card">
        <div className="app-card-header">Latest Movie</div>
        <div className="app-card-body"></div>
        <div className="app-card-body app-character-list"></div>
        {movies && <span id="latest-movie">{getMovieName()}</span>}
      </div>
    </div>
  );
};

const mapStateToProps = ({ character: { movies } }) => ({
  movies,
});

export default connect(mapStateToProps)(LatestYear);
