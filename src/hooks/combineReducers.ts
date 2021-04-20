import { IAction, IReducer } from './types'

const combineReducers = (reducers: Object) => {
  // 把非function的reducer过滤掉
  const finalReducers: IReducer = Object.entries(reducers).reduce((res, [k, v]) => {
    if (typeof v === 'function') {
      res[k] = v
    }
    return res
  }, {})
  const finalReducersEntries: Array<[key: string, handle: Function]> = Object.entries(finalReducers)
  // 根据key调用每个reducer，将他们的值合并在一起
  return (state: Object = {}, action: IAction) => {
    let hasChange = false
    const nextState = {}

    finalReducersEntries.forEach(([key, handle]) => {
      const previousValue = state[key]
      const nextValue = handle(previousValue, action)
      nextState[key] = nextValue
      hasChange = hasChange || previousValue !== nextValue
    })
    return hasChange ? nextState : state
  }
}

export default combineReducers
