import React from 'react';
import PropTypes from 'prop-types';

import SearchResult from './SearchResult';

const SearchResults = props => {
  
  return (
    <section className="search-results">
      {props.resultsArr.map((item, index) => <SearchResult key={index} result={item} />)} 
  </section>   
  )
}

SearchResults.propTypes = {
  resultsArr: PropTypes.array
}

export default SearchResults;