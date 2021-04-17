import React from "react";
import "./discord.css";

function Discord() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-12"
          style={{
            color: "hsl(250, 18%, 19%)",
            paddingTop: "4rem",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img className="art1 img-fluid" src="shape-light-coral.svg" />
          <img src="shape-coral.svg" className="art2 img-fluid" />
          <h2 style={{ fontWeight: "600" }}>Join our Discord Chat</h2>
          <p
            style={{
              fontWeight: "400",
            }}
          >
            1,000+ online
            <span style={{ color: "hsla(145.04,45.82%,50.78%,100%)" }}>
              {" "}
              •{" "}
            </span>{" "}
            now
          </p>
          <button
            className="btn btn-lg btn-outline-dark discord-button"
            style={{ fontWeight: "bold" }}
          >
            Enter Chat
          </button>
          <br />
          <img src="peep-crowd.svg" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Discord;
