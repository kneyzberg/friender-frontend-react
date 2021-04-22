import './App.css';
import UserContext from "./UserContext";
import {useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { decodeToken}  from "react-jwt";
import Routes from "./Routes";
import NavBar from "./NavBar";
import FrienderApi from './FrienderApi';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isToken, setIsToken] = useState(false);
  console.log(currentUser);
  
  useEffect(function getCurrentUser(){
    const token = localStorage.getItem("token");
    console.log("TOKEN", token)
    async function fetchUser(){
     
      const decodedToken = decodeToken(token);
      console.log(decodedToken);

      let userResult = await FrienderApi.getUser(decodedToken.username);
      console.log(userResult, "return from api");
      setCurrentUser(userResult);
    }

    if(token){
      fetchUser();
    }
  }, [isToken]);
  
  async function loginUser(data){
    let token = await FrienderApi.loginUser(data);
    FrienderApi.token = token;   
    localStorage.setItem("token", token)
    setIsToken(true);
  }

  async function signUpUser(data){
    let result = await FrienderApi.registerUser(data);
    FrienderApi.token = result;
    localStorage.setItem("token", result)
    setIsToken(true);
  }

  function logoutUser(){
    localStorage.removeItem("token");
    setCurrentUser(null)
    setIsToken(false);
  }

  async function userApplyToJob(username, jobId){
    let result = await FrienderApi.applyToJob(username, jobId);
    setCurrentUser(user => ({...user, applications:[...user.applications, result]}));
  }
  
  return (
    <BrowserRouter>
      <UserContext.Provider value={{currentUser, setCurrentUser, userApplyToJob}}>
        <NavBar logout={logoutUser} />
        <Routes login={loginUser} signup={signUpUser} />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;