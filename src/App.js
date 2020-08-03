import React from 'react';
import './App.css';
import PersonList from './PersonList.js';

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

// props are how parent components talk to child components -- we "pass" props from parents to children
class App extends React.Component {
  render() {
    return (
        <header className="App-header">
          <PersonList names={names} />
          <PersonList names={names2} />
        </header>
    );
  }
}

export default App;
