import {Switch, Route} from "react-router-dom";

import Home from "./Home";
import LoginForm from "./LoginForm";
import SignupForm from "./SingupForm";
import CreateProfileForm from "./CreateProfileForm";
import EditProfileForm from "./EditProfileForm";
import FriendsCarousel from "./FriendCarousel";



function Routes(){

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route path="/signup">
        <SignupForm/>
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