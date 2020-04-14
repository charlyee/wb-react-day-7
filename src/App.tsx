import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import './App.css';

class App extends React.Component {
  componentWillUnmount ()
  {
      console.log( '"componentWillUnmount()" ran.' );
  }
  render()
  {
    return (
      <div className="App">
        <h1>React Day 4</h1>
        <Navigation />
      </div>
    );
  }
}

export default App;
