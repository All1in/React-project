import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { launchStore } from './redux/index'
import { Provider } from 'react-redux'
import './styles/index.scss'

const store = launchStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
