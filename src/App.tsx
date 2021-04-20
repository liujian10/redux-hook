import React from 'react'
import Demo from './demo/index'
import Provider from './hooks/Provider'

import { reducers, initState } from './demo/reduces'

console.log(reducers, initState)

const App = () => (
  <Provider reducers={reducers} initState={initState}>
    <Demo />
  </Provider>
)

export default App
