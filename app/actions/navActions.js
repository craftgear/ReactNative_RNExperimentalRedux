import { POP_ROUTE, PUSH_ROUTE, CHANGE_TAB } from '../constants/ActionTypes.js'

export const push = (route) => {
  return {
    type: PUSH_ROUTE,
    route
  }
}

export const pop = () => {
  return {
    type: POP_ROUTE
  }
}

export const changeTab = (index) => {
  return {
    type: CHANGE_TAB,
    index
  }
}
