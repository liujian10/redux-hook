import { Dispatch } from 'react'
import { connect, IAction, IState } from '../../hooks'
import * as actions from '../actions'

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
