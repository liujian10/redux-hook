import { useContext, useMemo } from 'react'
import { StoreContext } from './Provider'

const useSelector = (...funcs: Array<Function>) => {
  const state = useContext(StoreContext)
  const resultFunc: Function = useMemo(() => {
    if (funcs.length > 1) {
      return funcs.pop() || Function
    }
    return (...v: Array<any>) => v[0]
  }, [funcs])
  const params = useMemo(() => funcs.map((func) => func(state)), [funcs, state])

  return useMemo(() => resultFunc(...params), [resultFunc, params])
}

export default useSelector
