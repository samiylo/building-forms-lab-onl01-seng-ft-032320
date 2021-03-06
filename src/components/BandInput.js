// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // const band = this.state.name
    this.props.addBand(this.state)

    this.setState({
      name: ''
    })
  }

  render() {

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band</label>
          <br/>
          <input type='text' value={this.state.name} onChange={this.handleChange}></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
