import React from 'react';
import styles from '../App.module.css';
// 1) import superagent
import request from 'superagent';
import PokeList from './PokeList.js';

// props are how parent components talk to child components -- we "pass" props from parents to children
class SearchPage extends React.Component {
  state = { 
    search: '',
    searchBy: 'pokemon',
    isLoading: false,
    pokeState: [],
    currentPage: 1,
    totalPages: 1
  }

  // componentDidUpdate = async (prevProps, prevState) => {
  //   if (prevState.currentPage !== this.state.currentPage) {
  //     await this.makeRequest()
  //   }
  // }


  componentDidMount = async () => {
    const params = new URLSearchParams(this.props.location.search);

    const searchBy = params.get('searchBy');
    const page = params.get('page');
    const search = params.get('search');

    // on load, make sure we have query params in the url. if we do, set the state to match those query params before making the fetch
    if (searchBy && page && search) {
      await this.setState({
        searchBy: searchBy,
        currentPage: page,
        search: search
      });
    }

    // by the time we make this fetch, our state is one step behind . . .
    await this.makeRequest()
  }

  makeRequest = async () => {
    this.setState({ isLoading: true });
    
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchBy}=${this.state.search}`);

    await this.setState({ 
      pokeState: data.body.results,
      totalPages: Math.ceil(data.body.count / 20),
      isLoading: false,
     })

     const params = new URLSearchParams(this.props.location.search);

     params.set('search', this.state.search);
     params.set('searchBy', this.state.searchBy);
     params.set('page', this.state.currentPage);


     this.props.history.push('?' + params.toString())
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    await this.setState({
      currentPage: 1
    })
    await this.makeRequest()
  }

  handleNextClick = async () => {
    await this.setState({ currentPage: Number(this.state.currentPage) + 1 })

    await this.makeRequest();
  }

  handlePrevClick = async () => {
    await this.setState({ currentPage: Number(this.state.currentPage) - 1 })

    await this.makeRequest();
  }

  handleDogType = (e) => {
    const type = e.target.value;

    this.setState({ filter: type })
  }

  render() {
    const { 
      isLoading, 
      pokeState, 
      currentPage,
      totalPages,
    } = this.state;
    
    return (
      <div className={styles.Search}>
        <div class={styles.Sidebar}>
          <form onSubmit={this.handleSubmit}>
          <input onChange={(e) => this.setState({ search: e.target.value})} value={this.state.search}/>
          <select onChange={(e) => { this.setState({ searchBy: e.target.value })} } value={this.state.searchBy}>
            <option value='pokemon'>name</option>
            <option value='type'>type</option>
            <option value='attack'>attack</option>
            <option value='defense'>defense</option>
          </select>
          <button onClick={this.handleClick}>Fetch Pokemon!</button>
          </form>
        </div>
        <div className={styles.Results}>
          {
            isLoading 
              ? <p className={styles.spin}>LOADING</p> 
              : <PokeList 
                handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick} 
                currentPage={currentPage}
                pokeState={pokeState}
                totalPages={totalPages}
                 />
          }
        </div>
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