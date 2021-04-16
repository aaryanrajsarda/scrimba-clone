import React from "react";

function ComputerScience() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#FFFFFF",
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
                <strong>Computer Science</strong>
              </u>
            </h2>

            <h3 className="tagline">
              Some courses to level up your computer science skills
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

export default ComputerScience;