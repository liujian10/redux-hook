# redux-hook

Use hooks realize redux in react

---

## 安装

```
    yarn add @maple-rc/redux-hook
```

---

## 使用

### Provider

容器，传入 `reducer` 及 `initState`，生成全局 `Store`

用法

```jsx

<Provider reducer={reducer} initState={initState}>
  {children}
</Provider>

```

入参

| 参数    | 说明         | 类型                                                 |
|---------|--------------|------------------------------------------------------|
|reducer|reducer值|`object`|
|initState|初始state|`object`|

示例

```jsx

import Demo from './demo/index'
import { Provider, combineReducers } from './hooks'

import { reducers, initState } from './demo/reduces'

const App = () => {
  const combinedReducer = combineReducers(reducers)
  return (
    <Provider reducer={combinedReducer} initState={initState}>
      <Demo />
    </Provider>
  )
}

export default App

```

---

### combineReducers

将拆分的多个 `reducer`，合并一个最终的 `reducer`

用法

```jsx
combineReducers(reducers)
```

入参

| 参数    | 说明         | 类型                                                 |
|---------|--------------|------------------------------------------------------|
|reducers|reducer键值对|`object`|

示例

```jsx

const reducers = {
  todos: (state: ITodos, action: IAction) => {
    switch (action.type) {
      case 'CHANGE_TEXT':
        return {
          ...state,
          text: action.payload,
        }
      default:
        return state
    }
  },
  counter: (state: ICounter, action: IAction) => {
    switch (action.type) {
      case 'CHANGE_COUNT':
        return {
          ...state,
          count: action.payload,
        }
      default:
        return state
    }
  }
}

combineReducers(reducers)

```

```jsx

// 最终的 reducer 伪代码
(state: Object = {}, action: IAction) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        text: action.payload,
      }
    case 'CHANGE_COUNT':
      return {
        ...state,
        count: action.payload,
      }
    default:
      return state
  }
}
```

---

### connect

连接页面与 `Store`，切分并注入 `Store state`

用法

```javascript
connect([selecter], [mergeProps])
```

入参

| 参数    | 说明         | 类型                                                 |
|---------|--------------|------------------------------------------------------|
|selecter|`Store state` 切分函数|`func`|
|mergeProps|组合 `Store state` 到 `props`|`func`|

---

示例

```jsx

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
  (state: IState) => state.counter, // selector
  (state: IState) => state.todos, // selector
  (counter: IState, todos: IState) => ({ counter, todos }) // mergeProps
)(Todos)

```

### useDispatch

获取 `dispatch`

用法

```javascript
useDispatch()
```

回参

| 参数    | 说明         | 类型                                                 |
|---------|--------------|------------------------------------------------------|
|useDispatch|`dispatch` 函数|`func`|
