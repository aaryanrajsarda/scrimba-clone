import React from "react";
import "./header.css";

function Header() {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-light navigate">
      <span class="navbar-brand">
        <img src="dark-logo.svg" height="20" alt="scrimba-logo" />
      </span>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav ml-auto">
          <div className="d-none d-sm-block">
            <button type="button" class="nav-item btn go-pro">
              Go Pro!
            </button>
          </div>
          <div>
            <h5 class="nav-item px-2">All Courses</h5>
          </div>
          <div>
            <h5 class="nav-item px-2">Sign In</h5>
          </div>
          <div className="d-none d-md-block">
            <h5 class="nav-item px-2">Sign Up</h5>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
