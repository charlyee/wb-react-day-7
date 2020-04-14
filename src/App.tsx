import React from 'react';
import Navigation from './components/Navigation';
import './App.css';

class App extends React.Component {
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
