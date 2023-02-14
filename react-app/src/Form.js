import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
  this.initialState = {
    Name: '',
    Roll: '',
  };

  this.state = this.initialState;
}

handleChange = (event) => {
    const { Name, value } = event.target
  
    this.setState({
      [Name]: value,
    });
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
}

  render() {
    const { Name,Roll } = this.state;
  
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="Name"
          id="Name"
          value={Name}
          onChange={this.handleChange} />
        <label htmlFor="Roll">Roll</label>
        <input
          type="text"
          name="Roll"
          id="Roll"
          value={Roll}
          onChange={this.handleChange} />
                          <button type="submit">
                    Submit
                </button>
      </form>
    );
  }
}


export default Form;