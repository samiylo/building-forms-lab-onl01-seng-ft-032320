import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import { addBand } from '../components'

class BandsContainer extends Component {

  
  render() {

    const bandsList = this.props.bands.map((band, key) => <li key={key}>{band.name}</li>)

    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <h2>Bands List</h2>
        {bandsList}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: (band) => dispatch({type: 'ADD_BAND', band})
//   }
// }


export default connect(mapStateToProps, {addBand})(BandsContainer)


const addBand = band => {
  return {
    type: "ADD_BAND",
    band
  }
}

const getBands = () => {
  const bands = fetch(URL)
  return {
    type: 'GET_BANDS',
    bands: bands
  }
}