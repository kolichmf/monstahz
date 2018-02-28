import React from "react"
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import Sprite from "./Sprite";
import MapSprite from "./MapSprite";

const mapState = (state) => {
  return {
    sprite: state.sprite
  }
};

class Map extends React.Component {
  render() {
    let grid = [...Array(32)].map(
      (_, y) => this.getRow(y)
    );

    return (
      <div className='map'>
        <div>
          Current Sprite:
          {
            this.props.sprite ?
            <Sprite id={this.props.sprite.id} classNames={this.props.sprite.classNames}/>
            :
            null
          }
        </div>
        <div className='background'/>
        <div className='grid'>
          {grid}
        </div>
      </div>

    );
  }

  getRow = (y) => {
    let spriteContainers = [...Array(50).keys()].map(
      (_, x) => <MapSprite key={'container-' + x} x={x} y={y} />
    );

    return (
      <div key={'row-' + y} className='sprite-row grid-sprite-row'>
        {spriteContainers}
      </div>
    );
  };
}

Map.propTypes = {
  sprite: PropTypes.object
};
export default connect(mapState)(Map)
