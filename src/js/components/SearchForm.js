import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = props => (
  <section className="search-form">
    <form onSubmit={props.onSubmit}>
      <label 
        htmlFor="search-form__input"
        className="search-form__label"
      >
        Search IMDB!
      </label>
      <input 
        id="search-form__input"
        className="search-form__input"
        type="text"
        placeholder="Search IMDB"
        onChange={props.onChange} 
      />
    </form>
  </section>
);

SearchForm.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

export default SearchForm;