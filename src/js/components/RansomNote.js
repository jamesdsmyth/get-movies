import React, { Component } from 'react';

class RansomNote extends Component {
  constructor() {
    super();

    this.state = {
      dictionaryText: '',
      phraseText: ''
    }

    this.dictionaryInput = this.dictionaryInput.bind(this);
    this.createHashTable = this.createHashTable.bind(this);
    this.phraseInput = this.phraseInput.bind(this);
  }

  dictionaryInput(e) {

    const arr = e.target.value.split(' ');

    const filteredArray = arr.filter(item => {
      return item !== '';
    });

    // we now have an array.
    // now to create the hash table
    this.createHashTable(filteredArray);
  }

  createHashTable(arr) {
    // create the hash table
    let hash = {};

    arr.forEach(item => {
      if(!hash[item]) {
        hash[item] = 0;
      }

      hash[item]++;
    });

    // now create the list and write to the state
    const list = Object.keys(hash).map((item, index) => {
      return <li key={index}>{item} - {hash[item]}</li>
    })

    this.setState({
      dictionaryList: list
    });
  }

  phraseInput(e) {
    this.setState({
      phraseText: e.target.value
    });
  }

  render() {
    return (
      <section className="ransom-note-container">
        <section className="ransom-note-section">
          <h2 className="ransom-note-heading">
            Dictionary
          </h2>
          <input
            className="ransom-note-input"
            type="text"
            placeholder="Add your dictionary here"
            onChange={(e) => this.dictionaryInput(e)}
          />
          <ul>
            {this.state.dictionaryList}
          </ul>
        </section>
        <section className="ransom-note-section">
        <h2 className="ransom-note-heading">
          Phrase
        </h2>
        <input
            className="ransom-note-input"
            type="text"
            placeholder="Add your search phrase here"
            onChange={(e) => this.phraseInput(e)}
          />
          <p>{this.state.phraseText}</p>
        </section>
        <section className="ransom-note-section">
          <h2 className="ransom-note-heading">
            Result
          </h2>
        </section>
      </section>
    )
  }
}

export default RansomNote;