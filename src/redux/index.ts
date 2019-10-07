import {combineReducers} from 'redux';
import {toggleHamburgerMenu, toggleDarkMode, setBgColor} from './reducers';

export default combineReducers({
  toggleHamburgerMenu,
  toggleDarkMode,
  setBgColor,
});
