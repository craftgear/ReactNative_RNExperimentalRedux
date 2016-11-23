import { POP_ROUTE, PUSH_ROUTE } from '../constants/ActionTypes.js'

export push = (route) => {
  return {
    type: PUSH_ROUTE,
    route
  }
}

export pop = () => {
  return {
    type: POP_ROUTE
  }
}
