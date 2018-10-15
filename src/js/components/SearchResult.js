import React from 'react';
import PropTypes from 'prop-types';

const SearchResult = props => (
  <article className="search-result">
    <img 
      className="search-result__poster"
      src={props.movie.Poster} 
      alt={props.movie.Title} />
    <div className="search-result__details">
      <h1 className="search-result__details__heading">
        {props.movie.Title}
      </h1>
      <p className="search-result__details__genre">
        {props.movie.Genre}
      </p>
      <p className="search-result__details__plot">
        {props.movie.Plot}
      </p>
      <button
        className="search-result__details__button"
        type="button">
          View
        </button>
    </div>
  </article>
  )

SearchResult.propTypes = {
  movie: PropTypes.object
}

export default SearchResult;