import React from 'react';
import './App.css';
import List from './components/List';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <body>
          <div className="container">
            <h1>Frequently Asked Questions</h1>
            <ul>
              <List title={"What is Netflix?"} icon={'+'} />
              <List title={"How much does Netflix cost?"} icon={'+'}/>
              <List title={"Where can I watch?"} icon={'+'}/>
              <List title={"How do I cancel?"} icon={'+'}/>
              <List title={"What can I watch?"} icon={'+'}/>
              <List title={"How does the free trial work?"} icon={'+'}/>
            </ul>
            <button className="btn"><a href="/">30 days free</a></button>
          </div>
        </body>
      </React.Fragment>
    );
  }
}

export default App;
