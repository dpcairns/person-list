import React from 'react';
import styles from './App.module.css';
import PersonList from './PersonList.js';
import Counter from './Counter.js';
import Form from './Form.js';
import DropdownFilter from './DropdownFilter.js';
import DogList from './DogList.js';

const names = [
  'Abba',
  'Bob',
  'Cat',
  'Diego',
  'Evan'
]

const names2 = [
  'Al',
  'Ba',
  'Co',
  'Do',
  'Ev'
]

const options = [
  'chihuahua',
  'labradoodle',
  'st bernard',
  'poodle'
];

const dogs = [
  {
      type: 'chihuahua',
      name: 'fluh',
      age: 5,
  },
  {
      type: 'labradoodle',
      name: 'momo',
      age: 2,
  },
  {
      type: 'st bernard',
      name: 'slobber',
      age: 9,
  },
  {
      type: 'poodle',
      name: 'slobber jr',
      age: 1,
  },
      {
      type: 'st bernard',
      name: 'ignacious',
      age: 3,
  },
]


// props are how parent components talk to child components -- we "pass" props from parents to children
class App extends React.Component {
  state = { 
    filter: 'chihuahua'
  }

  handleDogType = (e) => {
    const type = e.target.value;

    this.setState({ filter: type })
  }
  
  render() {
    const filteredDogs = dogs.filter(dog => dog.type === this.state.filter)

    return (
        <header className={styles.Box}>
          <DropdownFilter options={options} handleDogType={this.handleDogType} />
          <DogList dogs={filteredDogs} />
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
