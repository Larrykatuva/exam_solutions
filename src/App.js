import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Index'
import Search from './components/Search/Index'
import AddForm from './components/Home/AddPaper'
import Register from './components/Authentication/Register'
import Preview from './components/Preview/Index'
 

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/preview/:id" component={Preview}/>
          <Route path="/search" component={Search}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={AddForm}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
