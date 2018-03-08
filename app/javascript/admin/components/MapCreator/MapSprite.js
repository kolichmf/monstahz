import React from "react"
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import mapStore from "../../stores/mapStore";
import {addToMap} from "../../actions/mapActions";

const mapState = (state, props) => {
  return {
    paintSprite: state.sprite,
    sprite: state[props.y][props.x]
  };
};

class MapSprite extends React.Component {
  render () {
    let sprite = this.props.sprite || {},
        sprites = sprite.sprites.map(
          (sprite, i) => <div className={sprite.classNames} style={{zIndex: i}}/>
        );

    return (
      <React.Fragment>
        <div onClick={this.paint} onMouseEnter={this.dragPaint} className='sprite-container'>
          {sprites}
        </div>
      </React.Fragment>
    );
  }

  paint = () => {
    if(this.props.paintSprite){
      mapStore.dispatch(addToMap(this.props.paintSprite, this.props.x, this.props.y));
    }
  };

  dragPaint = () => {
    if(mouseDown){
      this.paint();
    }
  }
}

MapSprite.propTypes = {
  paintSprite: PropTypes.object,
  x: PropTypes.number,
  y: PropTypes.number,
  map: PropTypes.object
};
export default connect(mapState)(MapSprite)
