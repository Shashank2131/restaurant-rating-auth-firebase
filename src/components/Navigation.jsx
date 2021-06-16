import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
         <div class="container">
          <Link class="navbar-brand" to="/Dashboard">
            Restaurant-Rate & Review.
          </Link>
         <div>
         <ul class="navbar-nav ml-auto">
            <li
class={`nav-item ${
props.location.pathname === "/Dashboard" ? "active" : ""
}`}
>
<Link class="nav-link" to="/Dashboard">
Dashboard
<span class="sr-only">(current)</span>
</Link>
</li>
             <li class={`nav-item ${props.location.pathname === "/List" ? "active" : ""
                }`}
             >
                <Link class="nav-link" to="/List">
                    Restaurants
                </Link>
             </li>
             <li class={`nav-item ${props.location.pathname === "/contact" ? "active" : ""
                }`}
             >
                <Link class="nav-link" to="/">
                    Logout
                </Link>
             </li>
            
         </ul>
        </div>
    </div>
</nav>
</div>
);

}

export default withRouter(Navigation);