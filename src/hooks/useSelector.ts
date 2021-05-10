import { useContext, useMemo, useRef } from 'react'
import { StoreContext } from './Provider'

const useSelector = (...funcs: Array<Function>) => {
  const state = useContext(StoreContext)
  const funcsRef = useRef(funcs)
  const resultFunc: Function = useMemo(() => {
    if (funcsRef.current.length > 1) {
      return funcsRef.current.pop() || Function
    }
    return (...v: Array<any>) => v[0]
  }, [])
  const params = useMemo(() => funcsRef.current.map((func) => func(state)), [state])

  return useMemo(() => resultFunc(...params), [resultFunc, params])
}

export default useSelector
