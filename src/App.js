import React from 'react';
import Head from "./components/header/Header";
import Log from "./components/login/Login";
import SignUp from "./components/signUp/Signup";
import './App.css';
import { Router } from "@reach/router";
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
     <Header></Header>
    <Router>
      <Login path='/'></Login>
      <Sign path='/signup'></Sign>
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
function Sign(){
  return <SignUp></SignUp>;
}

export default App;
