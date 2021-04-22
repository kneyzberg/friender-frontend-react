import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import CreateProfileForm from './CreateProfileForm'
import EditProfileForm from "./EditProfileForm";
import FriendsCarousel from "./FriendCarousel";


function Routes({login, signup}){

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <LoginForm login={login}/>
      </Route>
      <Route path="/signup">
        <SignupForm signup={signup}/>
      </Route>
      <Route exact path="/create-profile">
        <CreateProfileForm/>
      </Route>
      <Route exact path="/profile">
        <EditProfileForm />
      </Route>
      <Route exact path="/explore">
        <FriendsCarousel/>
      </Route>
      <Route>
        <Redirect exact to="/"/>
      </Route>
    </Switch>
  )
}

export default Routes;