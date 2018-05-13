import React from "react"
import PropTypes from "prop-types"
import {connect} from 'react-redux'

const mapState = (state) => {
  return {
    currentSprite: state.sprite
  }
};

class MapToolbar extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div/>
      </React.Fragment>
    );
  }
}

MapToolbar.propTypes = {
  currentSprite: PropTypes.object
};

export default connect(mapState)(MapToolbar)
