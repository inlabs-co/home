import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="content">
          <div class="grid">
            <header>
              <h1>
                <span class="emphasis">In</span>
                Labs Tecnologia
              </h1>
            </header>
            <article>
              <h3>Coming soon</h3>
              <div class="traverse" />
            </article>
          </div>
          <div class="grid right">
            <div />
            <article>
              <div class="traverse-reverse" />
            </article>
            <footer>InLabs Tecnologia | 2018</footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
