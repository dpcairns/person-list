import React from 'react';
import styles from './App.module.css';
// 1) import superagent
import request from 'superagent';

// props are how parent components talk to child components -- we "pass" props from parents to children
class App extends React.Component {
  state = { 
    search: '',
    isLoading: false,
    pokeState: []
  }

  handleClick = async () => {
    // 4) go hit the api and get the data
    this.setState({ isLoading: true })
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&pokemon=${this.state.search}`);

    this.setState({ 
      pokeState: data.body.results,
      isLoading: false,
     })
  }

  handleDogType = (e) => {
    const type = e.target.value;

    this.setState({ filter: type })
  }
  render() {
    return (
        <header className={this.state.isRed 
          ? styles.RedBox
          : styles.Box
          }>
          <input onChange={(e) => this.setState({ search: e.target.value})} />
          <button onClick={this.handleClick}>Fetch Pokemon!</button>
          {
            this.state.isLoading 
              ? <p className={styles.spin}>LOADING</p> 
              : this.state.pokeState.map(poke => <p>{poke.pokemon} : { poke.defense} </p>)
          }
        </header>
    );
  }
}

// IMPERATIVE code:
// it tells us HOW to do something
// document.getElementById('my-div').textConent = user.name

// DECLARATIVE code
// it tells us WHAT to do
// we don't care aboiut HOW
// HIDES the HOW
// <div>{user.name}</div>

export default App;