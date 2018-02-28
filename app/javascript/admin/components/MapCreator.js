import React from "react"
import PropTypes from "prop-types"
import SpritePicker from "./MapCreator/SpritePicker"
import {Provider} from 'react-redux'
import mapStore from '../stores/mapStore'
import {setSpriteSheets} from '../actions/mapActions'
import Map from "./MapCreator/Map";

class MapCreator extends React.Component {
  componentDidMount(){
    mapStore.dispatch(setSpriteSheets(this.props.spriteSheets));
  }

  render () {
    return (
      <Provider store={mapStore}>
        <React.Fragment>
          <SpritePicker/>
          <Map/>
        </React.Fragment>
      </Provider>
    );
  }
}

MapCreator.propTypes = {
  spriteSheets: PropTypes.object
};
export default MapCreator
