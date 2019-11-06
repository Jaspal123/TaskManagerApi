import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import TaskState from "./context/task/TaskState";
import './App.css';

function App() {
  return (
    <TaskState>
    <Router>
    <Fragment>
      <Navbar />
      <div className="container">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Fragment>
  </Router>    
  </TaskState>
  );
}

export default App;
