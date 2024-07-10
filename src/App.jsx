import { useState } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import MainPageContent from './components/MainPageContent'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Switch>
        <Route path="/">
        <MainPageContent/>
       </Route>
      </Switch>

    </>
  )
}

export default App
