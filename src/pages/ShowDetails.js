import React from 'react'
import { connect } from 'react-redux'
import ShowDetailsHeader from '../components/ShowDetailsHeader'
import ShowDetailsInfo from '../components/ShowDetailsInfo'
import ShowDetailsMap from '../components/ShowDetailsMap'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data
  }
}

class ShowDetails extends React.Component {
  render() {
    const { shows } = this.props.data
    const { id } = this.props.match.params
    const match = shows.find(object => object.fields.date.split('T')[0] === id)

    let details = {}
    if (shows.length) details = match.fields

    const {locationName, run, set1, set2, set3, encore, thumbnail, location = {lat: 0, lon: 0}} = details

    return (
      <div className="show-details">
        <ShowDetailsHeader
          run={run}
          venue={locationName}
          date={id}
        />
        <ShowDetailsInfo
          date={id}
          location={location}
          set1={set1}
          set2={set2}
          set3={set3}
          encore={encore}
          thumbnail={thumbnail}
        />
        <ShowDetailsMap
          lat={location.lat}
          lon={location.lon}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps)(ShowDetails)
