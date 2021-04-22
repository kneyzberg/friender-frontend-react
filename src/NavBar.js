import {NavLink} from "react-router-dom";

function NavBar (){


  return(
    <nav>
     <NavLink exact to="/">Friender</NavLink>
     <NavLink exact to="/login">Login</NavLink>
     <NavLink exact to="/signup">signup</NavLink>
     <NavLink exact to="/profile">Profile</NavLink>
     <NavLink exact to="/explore">Find Friends</NavLink>
    </nav>
  )
}


export default NavBar;