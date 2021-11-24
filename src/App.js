import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
  
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <Switch>
            <Route path="/detail">
              <Detail></Detail>
            </Route>
            <Route path="/">
                <Home></Home>
            </Route>
          </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
