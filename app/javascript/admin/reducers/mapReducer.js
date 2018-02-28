import {
  ADD_TO_MAP,
  SET_CURRENT_SPRITE,
  SET_CURRENT_SPRITE_SHEET,
  SET_SPRITE_SHEETS
} from '../actions/mapActions'

const initialState = newMap(50,32);

function newMap(xDimensions, yDimensions){
  let map = {};
  [...Array(yDimensions)].map(
    (_, y) => {
      map[y] = {};

      [...Array(xDimensions)].map(
        (_, x) => map[y][x] = {}
      );
    }
  );
  return map;
}

export default function mapReducer(state = initialState, action){
  switch(action.type) {
    case SET_CURRENT_SPRITE_SHEET:
      return Object.assign({}, state, {
        spriteSheet: action.spriteSheet,
      });
    case SET_SPRITE_SHEETS:
      return Object.assign({}, state, {
        spriteSheets: action.spriteSheets,
        spriteSheet: Object.values(action.spriteSheets)[0]
      });
    case SET_CURRENT_SPRITE:
      return Object.assign({}, state, {
        sprite: action.sprite,
      });
    case ADD_TO_MAP:
      let mapRow = JSON.parse(JSON.stringify(state[action.y]));
      mapRow[action.x] = action.sprite;

      return Object.assign({}, state, {
        [action.y]: mapRow
      });
    default:
      return state;
  }
}