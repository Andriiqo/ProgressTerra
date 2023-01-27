import { Provider } from 'react-redux'
import {BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import Routing from '../page'
import './styles/index.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routing/>
      </Router>
    </Provider>
  )
}

export default App
