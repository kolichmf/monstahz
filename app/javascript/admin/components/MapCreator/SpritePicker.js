import React from "react"
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import mapStore from "../../stores/mapStore";
import {setCurrentSpriteSheet} from "../../actions/mapActions";
import Sprite from "./Sprite";

const mapState = (state) => {
  return {
    spriteSheets: state.spriteSheets,
    spriteSheet: state.spriteSheet
  };
};

class SpritePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileset: null
    };
  }

  render() {
    let options = Object.keys(this.props.spriteSheets || {}).map(
      key => <option key={key} value={key}>{key}</option>
    );

    let sprites = (this.props.spriteSheet ? this.props.spriteSheet.tilesets : []).map(
      (tileset, i) => this.getTileset(tileset, i)
    );

    return (
      <div className='sprite-picker'>
        <select onChange={this.setSpriteSheet}>
          {options}
        </select>

        <div>
          {sprites}
        </div>
      </div>
    );
  }

  setSpriteSheet = (e) => {
    mapStore.dispatch(setCurrentSpriteSheet(this.props.spriteSheets[e.target.value]));
  };

  getTileset = (tileset, i) => {
    let spriteRows = [...Array(tileset.sprite_count_y)].map(
      (_, y) => this.getTilesetRow(y, tileset)
    );

    return (
      <div key={'tileset-' + i}>
        {spriteRows}
      </div>
    );
  };

  getTilesetRow = (y, tileset) => {
    let sprites = [...Array(tileset.sprite_count_x)].map(
      (_, x) => {
        let sprite = tileset.sprites[x+1][y+1]; // non-0 indexes due to css class names
        return (
          <Sprite id={sprite.id} classNames={sprite.class_names} key={x+y}/>
        );
      }
    );

    return (
      <div className='sprite-row'>
        {sprites}
      </div>
    )
  };
}

SpritePicker.propTypes = {
  spriteSheets: PropTypes.object
};

export default connect(mapState)(SpritePicker)
