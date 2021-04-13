import React from "react";

function PopularCourses() {
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
                <strong>Most Popular Courses</strong>
              </u>
            </h2>

            <h3 className="tagline">
              Get started with these popular intro courses
            </h3>
          </center>
        </div>
        <div className="col-3">card1</div>
        <div className="col-3">card1</div>
        <div className="col-3">card1</div>
        <div className="col-3">card1</div>
        <div className="col-12">
          <button
            type="button"
            class="see-all"
            style={{
              marginTop: "5rem",
            }}
          >
            <strong>See All</strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopularCourses;
