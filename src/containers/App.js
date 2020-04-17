import React from 'react';
import './App.css';
// import habitData from '../data'
import NavBar from '../components/NavBar'
import Home from '../components/Home';
import HabitContainer from './HabitContainer'
// import { Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  state = {
    habitData: []
  }

 componentDidMount () {
    fetch("  http://localhost:3000/habits")
    .then(r => r.json())
    .then(habitData => this.setState({habitData: habitData}))
  }

  render() {
    return (
      <Router>
        <div>
          <Route>
            <NavBar/>
          </Route>

          <Switch>
              <Route exact strict path="/">
                <Home/>
              </Route>

              <Route exact path="/habits">
                <HabitContainer habitData={this.state.habitData}/> 
              </Route>

          </Switch>
        </div>
      </Router>  
  )}
}

export default App;
