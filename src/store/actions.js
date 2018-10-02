export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const SET_LOGGEDIN_USER = 'SET_LOGGEDIN_USER';

export function toggleDrawer(visibleDrawer) {
  return { type: TOGGLE_DRAWER, visibleDrawer }
}

export function setLoggedinUser(credentials) {
  return { type: SET_LOGGEDIN_USER, credentials }
}
