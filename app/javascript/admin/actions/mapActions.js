export const SET_SPRITE_SHEETS = 'SET_SPRITE_SHEETS';
export const SET_CURRENT_SPRITE_SHEET = 'SET_CURRENT_SPRITE_SHEET';
export const SET_CURRENT_SPRITE = 'SET_CURRENT_SPRITE';
export const ADD_TO_MAP = 'ADD_TO_MAP';

export function setSpriteSheets(spriteSheets){
  return { type: SET_SPRITE_SHEETS, spriteSheets };
}

export function setCurrentSpriteSheet(spriteSheet){
  return { type: SET_CURRENT_SPRITE_SHEET, spriteSheet };
}

export function setCurrentSprite(sprite) {
  return { type: SET_CURRENT_SPRITE, sprite };
}

export function addToMap(sprite, x, y){
  return { type: ADD_TO_MAP, sprite, x, y }
}