import {
  TOGGLE_DRAWER,
  SET_LOGGEDIN_USER
} from './actions';

const initialState = {
  visibleDrawer: 0,
  credentials: null
}

export function app(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, {
        visibleDrawer: action.visibleDrawer
      });
    case SET_LOGGEDIN_USER:
      return Object.assign({}, state, {
        credentials: action.credentials
      });
    default:
      return state
  }
}
