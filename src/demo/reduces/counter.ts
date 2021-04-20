import { IAction, IState } from '../../hooks'

interface ICounter extends IState {
  count: number
}

const initState = {
  count: 0,
}

const reducer = (state: ICounter, action: IAction) => {
  switch (action.type) {
    case 'CHANGE_COUNT':
      return {
        ...state,
        count: action.payload,
      }
    default:
      return state
  }
}

export { initState, reducer }
