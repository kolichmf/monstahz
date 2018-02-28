import React from "react"
import PropTypes from "prop-types"
import mapStore from "../../stores/mapStore"
import {setCurrentSprite} from "../../actions/mapActions"

class Sprite extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div onClick={this.setSprite} className={this.props.classNames + ' sprite-container sprite' }/>
      </React.Fragment>
    );
  }

  setSprite = () => {
    mapStore.dispatch(setCurrentSprite({ id: this.props.id, classNames: this.props.classNames }));
  }
}

Sprite.propTypes = {
  id: PropTypes.number,
  classNames: PropTypes.string
};
export default Sprite
