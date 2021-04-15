import React from "react";

function NewToCoding() {
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
                <strong>New to Coding?</strong>
              </u>
            </h2>

            <h3 className="tagline">
              Check out our courses to start you on your journey.
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

export default NewToCoding;
