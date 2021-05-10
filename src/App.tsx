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
