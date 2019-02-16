import React, { Component } from 'react';

class RansomNote extends Component {
  constructor() {
    super();


  }

  render() {
    return (
      <section className="ransom-note-container">
        <section>
          My dictionary of words input
        </section>
        <section>
          My Search phrase input field
        </section>
        <section>
          My results field
        </section>
      </section>
    )
  }
}

export default RansomNote;