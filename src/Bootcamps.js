import React from "react";

function Bootcamps() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#FFFBD4",
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
                <strong>Bootcamps</strong>
              </u>
            </h2>
            <h3 className="tagline">Comprehensive courses on various topics</h3>
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

export default Bootcamps;
