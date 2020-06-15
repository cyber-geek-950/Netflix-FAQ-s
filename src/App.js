import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <body>
          <div className="container">
            <h1>Frequently Asked Questions</h1>
            <ul>
              <li className="list-item">What is Netflix?<p className="icon">+</p></li>
              <li className="list-item">How much does Netflix cost?<p className="icon">+</p></li>
              <li className="list-item">Where can I watch?<p className="icon">+</p></li>
              <li className="list-item">How do I cancel?<p className="icon">+</p></li>
              <li className="list-item">What can I watch on Netflix?<p className="icon">+</p></li>
              <li className="list-item">How does the free trial work?<p className="icon">+</p></li>
            </ul>
            <button className="btn"><a href="/">30 days free ></a></button>
          </div>
        </body>
      </React.Fragment>
    );
  }
}

export default App;
