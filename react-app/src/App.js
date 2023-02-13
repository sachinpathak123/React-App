import React, { Component } from 'react'
import Table from './Table';
import SimpleComponent from './SimpleComp';
import Comp from './ClassComp';
class App extends Component {
  render() {
    return (
      <>
      <div className="container">
        <Table />
        <br />
        <SimpleComponent />
        <Comp />
      </div>
      </>
    )
  }
}

export default App