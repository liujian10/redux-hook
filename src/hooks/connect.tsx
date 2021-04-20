import { useMemo } from 'react'
import useSelector from './useSelector'
import useDispatch from './useDispatch'

const connect = (...args: Array<Function>) => (Cmp) => (props: Object) => {
  const state = useSelector(...args)
  const dispatch = useDispatch()
  return useMemo(() => <Cmp {...props} {...state} dispatch={dispatch} />, [props, state, dispatch])
}

export default connect
