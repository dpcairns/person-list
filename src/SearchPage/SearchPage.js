import React from 'react';
import styles from '../App.module.css';
// 1) import superagent
import request from 'superagent';
import PokeItem from './PokeItem.js';

// props are how parent components talk to child components -- we "pass" props from parents to children
class SearchPage extends React.Component {
  state = { 
    search: '',
    searchBy: 'pokemon',
    isLoading: false,
    pokeState: []
  }

  handleClick = async () => {
    // 4) go hit the api and get the data
    this.setState({ isLoading: true })
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&${this.state.searchBy}=${this.state.search}`);

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
    const { isLoading, pokeState } = this.state;
    
    return (
      <div>
          <input onChange={(e) => this.setState({ search: e.target.value})} />
          <select onChange={(e) => { this.setState({ searchBy: e.target.value })} }>
            <option value='pokemon'>name</option>
            <option value='type'>type</option>
            <option value='attack'>attack</option>
            <option value='defense'>defense</option>
          </select>
          <button onClick={this.handleClick}>Fetch Pokemon!</button>
          {
            isLoading 
              ? <p className={styles.spin}>LOADING</p> 
              : pokeState.map(poke => <PokeItem pokemon={poke} />)
          }
        </div>
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

export default SearchPage;