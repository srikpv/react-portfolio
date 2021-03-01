import React, {useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

function Header() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }, []);


  return (
    <div className="App">
       <nav>
         <div className="container-xl">
            <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
               <li>
                  <Link to="/Home">Home</Link>    
                </li>
               <li>
                  <Link to="/Resume">Resume</Link>
                </li>
            </ul>
         </div>
       </nav>
        <ul id="slide-out" class="sidenav">
        <li><Link to="/Experience">Experience</Link></li>
        <li><Link to="/Education">Education</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        </ul>
    </div>
  );
}

export default Header;
