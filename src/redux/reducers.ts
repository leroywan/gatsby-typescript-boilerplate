import {Actions} from './actions';
// Fake props for redux to prevent typescript error
type callback = () => void;
interface ReduxProps {
  dispatch: (callback) => void;
}

export interface State {
  hamburgerMenuActive: boolean;
  darkModeActive: boolean;
  bgColor: string;
}

const initialState: State = {
  hamburgerMenuActive: false,
  darkModeActive: false,
  bgColor: 'var(--color-bg)',
};

export const toggleHamburgerMenu = (state = initialState, action) => {
  switch (action.type) {
    case Actions.TOGGLE_HAMBURGER_MENU:
      return {...state, hamburgerMenuActive: action.hamburgerMenuActive};
    default:
      return state;
  }
};

export const toggleDarkMode = (state = initialState, action) => {
  switch (action.type) {
    case Actions.TOGGLE_DARK_MODE:
      return {...state, darkModeActive: action.darkModeActive};
    default:
      return state;
  }
};

export const setBgColor = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_BG_COLOR:
      return {...state, bgColor: action.bgColor};
    default:
      return state;
  }
};

export type ReduxState = State & ReduxProps;
