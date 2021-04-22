import { NavLink } from "react-router-dom";
import "./NavBar.css"
import UserContext from "./UserContext";
import { useContext } from "react";
function NavBar({ logout }) {

  const { currentUser, setCurrentUser } = useContext(UserContext);


  return (
    <nav>
      <ul className="NavBar-nav">
        <li><NavLink exact to="/">Friender</NavLink></li>

        {!currentUser && (
          <>
            <li><NavLink exact to="/login">Login</NavLink></li>
            <li><NavLink exact to="/signup">Signup</NavLink></li>
          </>
        )}
        {currentUser && (
          <>
            <li><NavLink exact to="/profile">Profile</NavLink></li>
            <li><NavLink exact to="/explore">Find Friends</NavLink></li>
            <li><NavLink exact to="/" onClick={logout}>Logout</NavLink></li>
          </>
        )}
      </ul>
    </nav>
  )
}


export default NavBar;
