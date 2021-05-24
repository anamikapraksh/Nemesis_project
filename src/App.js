import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Head from "./components/header/Header";
import Log from "./components/login/Login";
import SignUp from "./components/signUp/Signup";
import Info from "./components/Main/Main";
import Delete from "./components/delete/Delete";
import Edit from "./components/edit/Edit";
import "./App.css";
import { Router } from "@reach/router";
import Axios from "axios";
import logo from "./logo.svg";
import ProtectedRoute from "./components/ProtectedRoute/protectedRoute";
import NotSecureRoute from "./components/ProtectedRoute/noSecureRoute";

Axios.defaults.baseURL = "https://nemesis-backend.herokuapp.com/";

function App() {
  let udetails = JSON.parse(localStorage.getItem("User_details"));
  if (udetails) {
    Axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${udetails.token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  return (
    <div className="App">
      <Header></Header>
     
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={Log} exact /> */}
          <NotSecureRoute path="/" component={Log} exact pathname="/details" />
          <NotSecureRoute
            path="/signup"
            component={SignUp}
            exact
            pathname="/details"
          />
          <ProtectedRoute path="/details" component={Info} exact pathname="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function Header() {
  return <Head></Head>;
}
// function Login(){
//  return <Log></Log>;
// }
// function Sign(){
//   return <SignUp></SignUp>;
// }
// function Information(){
//   return <Info></Info>;
// }
// function Del(){
//   return <Delete></Delete>
// }
// function EditPage(){
//   return <Edit></Edit>
// }
export default App;
