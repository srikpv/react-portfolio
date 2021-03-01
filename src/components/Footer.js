import React, {useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

function Footer() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }, []);


  return (
    <footer style={{position: "absolute", bottom: 0, width: "100%"}}>
    <div className="page-footer footer-copyright">
      <div className="container-xl">
        © 2021 Copyright
        <a class="grey-text text-lighten-4 right" href="#!"><Link to="/Contact">Contact</Link></a>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
