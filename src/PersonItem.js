import React from 'react';
import styles from './PersonItem.module.css';

class PersonItem extends React.Component {
    render() {
    return <p className={styles.Box}>Hi, I'm {this.props.name}</p>
    }
  }

  
  export default PersonItem