import React from "react";
import "./main-jumbotron.css";

function MainJumbotron() {
  return (
    <div
      className="jumbotron jumbotron-fluid"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        <div className="row">
          <svg
            viewBox="0 0 328 295"
            width="328"
            height="295"
            fill="none"
            style={{
              left: "0rem",
              top: "10px",
              width: "46%",
              color: "hsla(26.50,53.00%,91.50%,50%)",
              maxWidth: "600px",
              height: "auto",
              opacity: "1",
              position: "absolute",
            }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M152.5 0C221-1.3 295.8 17.3 319.2 81.6c25.5 70-6.5 148.2-67.8 190.4-56.8 39-131 25.3-186.1-16C13 216.7-14 150.2 7.3 88.4 27.4 29 89.8 1.4 152.4.1z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            viewBox="0 0 199 327"
            width="199"
            height="327"
            fill="none"
            style={{
              right: "2rem",
              minWidth: "200px",
              top: "-50px",
              width: "30%",
              maxWidth: "550px",
              color: "hsla(139.00,25.50%,92.50%,100%)",
              height: "auto",
              position: "absolute",
              opacity: "1",
            }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M199 152c1 68.2-11.6 143-55 166.2-47.2 25.4-100-6.4-128.4-67.6C-10.7 194-1.5 120 26.4 65.1c26.4-52 71.3-79 113-58 40 20.3 58.6 82.5 59.5 145z"
              fill="currentColor"
            ></path>
          </svg>
          <div className="col-9">
            <h1 className="text-right h1-title">
              Don't spend $15,000 on a coding bootcamp
            </h1>
            <h3 className="text-right h3-title">
              Our career path helps motivated students become hireable frontend
              developers for{" "}
              <span
                style={{
                  color: "hsl(250, 18%, 19%)",
                  fontWeight: "800",
                }}
              >
                1% of the cost
              </span>
            </h3>
            <button type="button" className="btn btn-lg try-now">
              Try It Out Now!
            </button>
          </div>
          <div className="col-3">
            <img
              src="peep-guy-macbook.svg"
              className="d-none d-lg-block img-fluid"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-2">
            <img
              src="peep-girl-wheelchair.svg"
              className="d-none d-lg-block img-fluid"
            />
          </div>
          <div className="col-md-6 col-lg-2">
            <img
              src="peep-man-bearded.svg"
              className="d-none d-md-block img-fluid"
            />
          </div>
          <div className="col-12 col-lg-8 col-md-6">
            <div className="row">
              <div className="col-12 col-lg-6 py-3">
                <div
                  style={{
                    paddingLeft: "1rem",
                    borderLeft: "6px solid hsl(28, 52%, 95%)",
                    maxWidth: "400px",
                  }}
                >
                  <h3
                    style={{ color: "hsl(250, 18%, 19%)", fontWeight: "600" }}
                    className="text-left"
                  >
                    A coding community like no another
                  </h3>
                </div>
                <div style={{ maxWidth: "400px" }}>
                  <h4
                    className="text-left"
                    style={{ fontWeight: "400", color: "hsl(250, 18%, 19%)" }}
                  >
                    Not a boring forum. But live events, stand-ups,
                    competitions, and more.
                  </h4>
                </div>
              </div>
              <div className="col-12 col-lg-6 py-3">
                <div
                  style={{
                    paddingLeft: "1rem",
                    borderLeft: "6px solid hsl(253, 100%, 95%)",
                    maxWidth: "400px",
                  }}
                >
                  <h3
                    style={{ color: "hsl(250, 18%, 19%)", fontWeight: "600" }}
                    className="text-left"
                  >
                    A mind-blowing way to learn to code
                  </h3>
                </div>
                <div>
                  <h4
                    className="text-left"
                    style={{ fontWeight: "400", color: "hsl(250, 18%, 19%)" }}
                  >
                    Our interactive code-learning tool has been{" "}
                    <u style={{ color: "blue" }}>blowing minds</u> since 2017.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainJumbotron;
