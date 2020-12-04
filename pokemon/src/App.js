import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  constructor() {
     console.log("App component constructor")
    super();
    this.state = {
      pokemon: data
    };
  }

  componentDidMount() {
     console.log("ComponentDidMount running")
     this.setState( {pokemon : data})
  }

  componentDidUpdate(prevProps, prevState){
     console.log("ComponentDidUpdate running")
  }

  render() {
     console.log("App component rendering")
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
