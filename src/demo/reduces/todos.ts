import { IAction, IState } from '../../hooks'

interface ITodos extends IState {
  text: string
}

const initState = {
  text: 'old',
}

const reducer = (state: ITodos, action: IAction) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        text: action.payload,
      }
    default:
      return state
  }
}

export { initState, reducer }
