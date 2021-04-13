import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <span class="navbar-brand">
        <img src="dark-logo.svg" height="20" alt="scrimba-logo" />
      </span>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <span class="nav-item">All Courses</span>
          <span class="nav-item">Sign In</span>
          <span class="nav-item disabled">Sign Up</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
