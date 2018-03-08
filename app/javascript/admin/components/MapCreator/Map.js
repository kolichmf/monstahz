import React from "react"
import MapSprite from "./MapSprite";
import MapToolbar from "./MapToolbar";

class Map extends React.Component {
  render() {
    let grid = [...Array(32)].map(
      (_, y) => this.getRow(y)
    );

    return (
      <div className='map'>
        <MapToolbar/>
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

export default Map;
