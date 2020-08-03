import React from 'react';
import PersonItem from './PersonItem.js';



class PersonList extends React.Component {
    render() {
      return <div>
          {
              this.props.names.map((name) => <PersonItem name={name}/>)
          }
      </div>
    }
  }

  export default PersonList;