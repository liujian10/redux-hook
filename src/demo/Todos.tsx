import { Dispatch } from 'react'
import connect from '../hooks/connect'
import { IAction, IState } from '../hooks/types'
import * as actions from './actions'

interface IProps {
  todos: {
    text: string
  }
  counter: {
    count: number
  }
  dispatch: Dispatch<IAction>
}

const Todos = (props: IProps) => {
  // 用 useContext 来获取 state 与 dispatch
  const { todos, counter, dispatch } = props
  const change = (val: string) => dispatch(actions.changeText(val))
  const increment = () => dispatch(actions.increment(counter.count))
  console.log('todos', todos)

  return (
    <div>
      <h1>The text is {todos.text}</h1>
      <button onClick={() => change('new')}>change</button>
      <button onClick={increment}>increment</button>
    </div>
  )
}

export default connect(
  (state: IState) => state.counter,
  (state: IState) => state.todos,
  (counter: IState, todos: IState) => ({ counter, todos })
)(Todos)
