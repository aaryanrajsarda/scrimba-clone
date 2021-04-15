import React, { useState } from "react";
import "./header.css";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

function Header() {
  const [headerStyle, setHeaderStyle] = useState("scrollInvisible");

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isInvisible = currPos.y > -15;
      console.log(currPos.y);
      const shouldBeStyle = isInvisible ? "scrollInvisible" : "scrollVisible";
      setHeaderStyle(shouldBeStyle);
    },
    [headerStyle]
  );
  return headerStyle === "scrollInvisible" ? (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light navigate">
      <span className="navbar-brand">
        <img src="dark-logo.svg" height="20" alt="scrimba-logo" />
      </span>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav ml-auto">
          <div className="d-none d-sm-block">
            <button type="button" className="nav-item btn go-pro">
              Go Pro!
            </button>
          </div>
          <div className="item">
            <h5 className="nav-item px-2">All Courses</h5>
          </div>
          <div className="item">
            <h5 className="nav-item px-2">Sign In</h5>
          </div>
          <div className="item d-none d-md-block">
            <h5 className="nav-item px-2">Sign Up</h5>
          </div>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light navigate scrollVisible">
      <span className="navbar-brand">
        <img src="dark-logo.svg" height="20" alt="scrimba-logo" />
      </span>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav ml-auto">
          <div className="d-none d-sm-block">
            <button type="button" className="nav-item btn go-pro">
              Go Pro!
            </button>
          </div>
          <div className="item">
            <h5 className="nav-item px-2">All Courses</h5>
          </div>
          <div className="item">
            <h5 className="nav-item px-2">Sign In</h5>
          </div>
          <div className="item d-none d-md-block">
            <h5 className="nav-item px-2">Sign Up</h5>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
