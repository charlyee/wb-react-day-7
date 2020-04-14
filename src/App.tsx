import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import './App.css';

class App extends React.Component {
  static removeNavigation (): void
  {
    const navigation: HTMLElement | null = document.getElementById( 'navigation' );
    if ( navigation !== null )
        ReactDOM.unmountComponentAtNode( navigation );
    // Unmounting this component will trigger: componentWillUnmount() !!!
  }
  render()
  {
    return (
      <div className="App">
        <h1>React Day 4</h1>
        <Navigation />
        <button onClick={App.removeNavigation}>Remove Navigation</button>
      </div>
    );
  }
}

export default App;
