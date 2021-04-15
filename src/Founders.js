import React from "react";
import "./founders.css";

function Founders() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F9F2EC" }}>
      <div className="row" style={{ padding: "5rem 10rem 3rem 10rem" }}>
        <img
          src="shape-lilac.svg"
          className="img-fluid"
          style={{
            left: "20%",
            maxWidth: "300px",
            position: "absolute",
          }}
        />
        <div className="col-12 col-lg-7">
          <h1
            className="text-left"
            style={{ fontWeight: "600", color: "hsl(250, 18%, 19%)" }}
          >
            Hi! from the founders
          </h1>
          <p
            style={{
              padding: "1rem 0rem",
              fontWeight: "400",
              color: "hsl(250, 18%, 19%)",
              fontSize: "20px",
            }}
            className="text-left"
          >
            Our goal is to create the best possible coding school at the lowest
            possible cost for students. If we succeed with this, it’ll give
            anyone who wants to become a software developer a realistic shot at
            succeeding. Regardless of where they live and the size of their
            wallets.
          </p>
          <h3
            style={{
              fontWeight: "600",
              borderLeft: "4px solid hsl(253, 100%, 95%)",
              paddingLeft: "1.25rem",
            }}
            className="text-left"
          >
            <i>
              “To achieve this, we’ve created a new video format for code
              screencasts. We call it “scrims”.
            </i>
          </h3>
          <p
            style={{
              fontWeight: "400",
              padding: "1rem 0rem",
              color: "hsl(250, 18%, 19%)",
              fontSize: "20px",
            }}
            className="text-left"
          >
            This format is the backbone of our school. Not only because it
            results in a superior learning experience. But also because it
            enables us to iterate more quickly, to attract better teachers, to
            facilitate better peer-learning, to keep server costs low, and much
            more.
          </p>
        </div>
        <div className="col-12 col-lg-5">
          <div
            style={{
              position: "relative",
            }}
          >
            <img
              src="founders.webp"
              className="img-fluid"
              style={{
                border: "4px solid white",
                borderRadius: "10px",
                transform: "rotate(3deg)",
                width: "300px",
              }}
            />
            <h2
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "29%",
                fontSize: "30px",
                fontWeight: "bolder",
                textShadow: "3px 1px 0 #fff",
              }}
            >
              Sindre & Per
            </h2>
          </div>
          <br />
          <p
            className="text-left"
            style={{ marginLeft: "5rem", marginTop: "1rem" }}
          >
            Connect with us on Twitter
          </p>
          <button
            type="button"
            className="btn btn-lg btn-outline-dark my-2"
            style={{
              color: "hsl(250, 18%, 19%)",
              fontWeight: "bold",
              backgroundColor: "white",
            }}
          >
            Say Hi @Sindreaars
          </button>
          <br />
          <button
            style={{
              color: "hsl(250, 18%, 19%)",
              fontWeight: "bold",
              backgroundColor: "white",
            }}
            type="button"
            className="btn btn-lg btn-outline-dark"
          >
            Say Hi @Perborgen
          </button>
        </div>
      </div>
    </div>
  );
}

export default Founders;
