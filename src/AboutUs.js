import React from "react";

function AboutUs() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F9F2EC" }}>
      <div className="row" style={{ padding: "5rem 10rem 3rem 10rem" }}>
        <img
          className="img-fluid"
          src="shape-baby.svg"
          style={{
            left: "70%",
            width: "45%",
            maxWidth: "300px",
            position: "absolute",
          }}
        />
        <div className="col-12 col-lg-6">
          <img
            src="about-video-cover.webp"
            className="img-fluid"
            style={{
              border: "4px solid white",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="col-12 col-lg-6 pl-5">
          <h1
            className="text-left"
            style={{ fontWeight: "600", color: "hsl(250, 18%, 19%)" }}
          >
            About the Platform
          </h1>
          <p
            className="text-left"
            style={{
              fontWeight: "400",
              color: "hsl(250, 18%, 19%)",
              fontSize: "20px",
            }}
          >
            Scrimba is the next-generation platform for learning how to code.
            Our screencasts enable you to interact with the code directly in the
            player. This way, you'll have more fun and learn faster.{" "}
          </p>
          <p
            style={{
              fontWeight: "400",
              color: "hsl(250, 18%, 19%)",
              fontSize: "20px",
            }}
            className="text-left"
          >
            Our courses cover subjects like HTML, CSS, JavaScript, React, Vue,
            and more. They're all made with the goal of advancing your career.
            So pick a course and give your career a boost!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
