import React from 'react';
import Head from "./components/header/Header";
import Log from "./components/login/Login";
import SignUp from "./components/signUp/Signup";
import Info from "./components/Main/Main";
import Delete from "./components/delete/Delete";
import Edit from "./components/edit/Edit";
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
      <Information path='/details'></Information>
      <Del path='/delete'></Del>
      <EditPage path="/edit"></EditPage>
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
function Information(){
  return <Info></Info>;
}
function Del(){
  return <Delete></Delete>
}
function EditPage(){
  return <Edit></Edit>
}
export default App;
