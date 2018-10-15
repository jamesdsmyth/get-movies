import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchFetchApi } from '../actions/actions';

import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';

class Container extends Component {
  constructor() {
    super();

    this.state = {
      textboxText: ''
    }

    this.textboxChange = this.textboxChange.bind(this);
    this.submitButtonClicked = this.submitButtonClicked.bind(this);
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  textboxChange(e) {
    this.setState({
      textboxText: e.target.value
    });
  }

  submitButtonClicked(e) {
    e.preventDefault();
    const commaString = this.concatWords();
    this.props.dispatchFetchApi(commaString);
  }

  // turn string into word+words string to be able to use in the search
  concatWords() {
    const arr = this.state.textboxText.split(' ');
    const str = arr.join('+');
    return str;
  }

  render() {

    console.log('imdb response', this.props.imdb.movie);
    return (
      <div className="container">
        <SearchForm 
          onSubmit={this.submitButtonClicked}
          onChange={this.textboxChange}
        />
        {
          this.props.imdb.movie != null &&
            <SearchResult movie={this.props.imdb.movie} />
        }

        {
          this.props.imdb.failedToRetrieve &&
            <h1>
              Movie not found!
            </h1>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    imdb: state.apiReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchApi: (str) => dispatch(dispatchFetchApi(str))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);