import { createContext, useReducer, Dispatch, ReactNode } from 'react'
import combineReducers from './combineReducers'
import { IAction } from './types'

const initState: any = {}
const initDispatch: Dispatch<IAction> = () => {}

export const StateContext = createContext(initState)
export const DispatchContext = createContext(initDispatch)

interface IProps {
  children: ReactNode
  reducers: Object
  initState: Object
}

const Provider = (props: IProps) => {
  const { children, reducers, initState } = props

  const combinedReducer = combineReducers(reducers)
  const [state, dispatch] = useReducer(combinedReducer, initState)
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default Provider
