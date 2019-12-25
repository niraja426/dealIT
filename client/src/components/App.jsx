import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainNavbar from './MainNavbar'
import Home from './pages/Home'
// import Projects from './pages/Projects'
// import AddProjects from './pages/AddProjects'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/projects" component={Projects} /> */}
        {/* <Route path="/add-project" component={AddProjects} /> */}
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  )
}
