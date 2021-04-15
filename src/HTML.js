import React from "react";

function HTML() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#F9F2EC",
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
                <strong>HTML</strong>
              </u>
            </h2>

            <h3 className="tagline">
              HTML is how you organise content on a website
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

export default HTML;
