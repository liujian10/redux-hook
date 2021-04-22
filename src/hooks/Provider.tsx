import { createContext, useReducer, Dispatch, ReactNode } from 'react'
import { IAction } from './types'

const initState: any = {}
const initDispatch: Dispatch<IAction> = () => {}

export const StoreContext = createContext(initState)
export const DispatchContext = createContext(initDispatch)

interface IProps {
  children: ReactNode
  reducer: any
  initState: Object
}

const Provider = (props: IProps) => {
  const { children, reducer, initState } = props

  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <StoreContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StoreContext.Provider>
  )
}

export default Provider
