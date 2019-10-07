export enum Actions {
  TOGGLE_HAMBURGER_MENU = 'TOGGLE_HAMBURGER_MENU',
  TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE',
  SET_BG_COLOR = 'SET_BG_COLOR',
}

export const toggleHamburgerMenu = (hamburgerMenuActive) => ({
  type: Actions.TOGGLE_HAMBURGER_MENU,
  hamburgerMenuActive,
});

export const toggleDarkMode = (darkModeActive) => ({
  type: Actions.TOGGLE_DARK_MODE,
  darkModeActive,
});

export const setBgColor = (bgColor) => ({
  type: Actions.SET_BG_COLOR,
  bgColor,
});
