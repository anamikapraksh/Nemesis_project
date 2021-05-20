import React from 'react';
import Head from "./components/header/Header";
import Log from "./components/login/Login";
import './App.css';
import { Router } from "@reach/router";
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
     <Header></Header>
    <Router>
      <Login path='/'></Login>
    </Router>
    </div>
  );
}


function Header(){
  return <Head></Head>;
}
function Login(){
 return <Log></Log>;
}

export default App;
