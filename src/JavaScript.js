import React from "react";

function JavaScript() {
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
                <strong>JavaScript</strong>
              </u>
            </h2>

            <h3 className="tagline">
              JavaScript is the worlds most popular programming language
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

export default JavaScript;
