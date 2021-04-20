import { Dispatch } from 'react'
import connect from '../hooks/connect'
import { IAction } from '../hooks/types'
import * as actions from './actions'

interface IProps {
  count: number
  dispatch: Dispatch<IAction>
}

const App = (props: IProps) => {
  const { count, dispatch } = props
  console.log('counter', count)

  const increment = (val: number) => dispatch(actions.increment(val))
  const decrement = (val: number) => dispatch(actions.decrement(val))

  return (
    <div>
      <h1>The count is {count}</h1>
      <button onClick={() => increment(count)}>increment</button>
      <button onClick={() => decrement(count)}>decrement</button>
    </div>
  )
}

export default connect((state) => state.counter)(App)
