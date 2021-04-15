import React from "react";

function Freebies() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#DDEAE1",
      }}
    >
      <div
        className="row"
        style={{ paddingBottom: "2rem", paddingTop: "3rem" }}
      >
        <div className="col-12">
          <center>
            <h2>
              <u>
                <strong>Freebies</strong>
              </u>
            </h2>

            <h3 className="tagline">
              High-quality Scrimba courses that don't cost a dime
            </h3>
            <button
              type="button"
              class="see-all"
              style={{
                marginTop: "5rem",
              }}
            >
              <strong>See All</strong>
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Freebies;
