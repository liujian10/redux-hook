import Counter from './components/Counter'
import Todos from './components/Todos'

import logo from '../image/logo.svg'

import './index.css'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>redux hook</div>
    </header>
    <div className="App-card">
      <Counter />
      <Todos />
    </div>
  </div>
)

export default App
