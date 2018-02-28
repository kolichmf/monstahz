import { createStore } from 'redux'
import mapReducer from '../reducers/mapReducer'

const mapStore = createStore(mapReducer);
window.store = mapStore;
export default mapStore;



