import Counter from './Counter'
import Todos from './Todos'

import logo from '../image/logo.svg'

import './index.css'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>React Hooks Library</div>
    </header>
    <div className="App-card">
      <Counter />
      <Todos />
    </div>
  </div>
)

export default App
