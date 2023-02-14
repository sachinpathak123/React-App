import React, { Component } from 'react'
import Table from './Table';
import SimpleComponent from './SimpleComp';
import Comp from './ClassComp';

class App extends Component {
  render() {
    const characters = [
      {
        Name: 'Sachin',
        Roll :34,
      },
      {
        Name: 'James',
        Roll: 53,
      },
      {
        Name: 'Gunn',
        Roll: 21,
      },
    ]

    return (
      <div className="container">
        <Table characterData={characters} />
      </div>
    )
  }
}


export default App