import React from "react";
import "./html.css";

function HTML() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#F9F2EC",
      }}
    >
      <div className="row" style={{ padding: "3rem 9rem 2rem 9rem" }}>
        <div className="col-12 pb-3">
          <h2>
            <u>
              <strong>HTML</strong>
            </u>
          </h2>
          <h3 className="tagline">
            HTML is how you organise content on a website
          </h3>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card course-card">
            <div
              style={{
                backgroundColor: "#FFFBD6",
                padding: "1rem",
                display: "grid",
                zIndex: "0",
                placeItems: "center",
                position: "relative",
                height: "60%",
              }}
            >
              <div className="shapes">
                <svg
                  class="bootcamp-card1-shape1 img-fluid"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(34.00,95.75%,68.50%,100%)" }}
                    d="M48.3671 4.00414C61.7855 2.7251 76.745 -1.97133 86.4625 9.80638C97.2181 22.8423 100.354 43.9553 96.2873 62.0843C92.4299 79.2819 80.463 91.9101 66.9118 96.9691C55.504 101.228 45.1731 91.3023 34.2907 85.2291C22.5778 78.6925 6.96447 76.7547 3.05352 61.3315C-1.02481 45.2483 7.40784 28.3849 16.8479 16.442C25.0359 6.08323 36.8209 5.10471 48.3671 4.00414Z"
                  ></path>
                </svg>
                <svg
                  class="bootcamp-card1-shape2 img-fluid"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(220.00,100.00%,91.00%,100%)" }}
                    d="M46.6443 2.02753C66.6399 1.53324 88.5794 7.59278 95.422 28.5087C102.874 51.2865 93.5364 76.7516 75.5776 90.4677C58.9651 103.156 37.2191 98.7293 21.1053 85.2685C5.82684 72.5056 -2.06419 50.8861 4.10887 30.7659C10.0345 11.4522 28.3111 2.48073 46.6443 2.02753Z"
                  ></path>
                </svg>
              </div>
              <h2 className="text-right course-name">
                The Frontend Developer Career Path
              </h2>
            </div>
            <div className="card-body p-2">
              <div className="row">
                <div className="col-auto">
                  <p
                    className="card-text text-left"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    928 lessons | 75 hours
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      marginTop: "-1rem",
                    }}
                    className="card-text text-left"
                  >
                    with <strong>Per Harald Borgen</strong>
                  </p>
                </div>
                <div className="col-auto ml-auto">
                  <img
                    src="https://scrimba.com/avatars/perborgen/64"
                    className="img-fluid avatar rounded-circle"
                  />
                </div>
              </div>
              <div className="row pt-5">
                <div className="col">
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                    className="card-text text-left difficulty"
                  >
                    Beginner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card course-card">
            <div
              style={{
                backgroundColor: "#E7F1EA",
                padding: "1rem",
                height: "60%",
                display: "grid",
                placeItems: "center",
                position: "relative",
                zIndex: "0",
              }}
            >
              <div className="shapes">
                <svg
                  class="bootcamp-card3-shape1 img-fluid"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(252.00,100.00%,86.00%,100%)" }}
                    d="M87.5194 12.6911C100.724 30.4477 100.024 56.2045 93.265 75.1548C86.9776 92.7838 73.2551 101.066 57.4621 96.9686C35.4989 91.2701 7.03718 81.4582 2.47942 51.5996C-1.94928 22.5864 25.2781 17.5186 44.0252 8.94122C58.235 2.43979 74.9374 -4.22816 87.5194 12.6911Z"
                  ></path>
                </svg>
                <svg
                  class="bootcamp-card3-shape2 img-fluid"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(252.00,88.25%,74.41%,100%)" }}
                    d="M46.6443 2.02753C66.6399 1.53324 88.5794 7.59278 95.422 28.5087C102.874 51.2865 93.5364 76.7516 75.5776 90.4677C58.9651 103.156 37.2191 98.7293 21.1053 85.2685C5.82684 72.5056 -2.06419 50.8861 4.10887 30.7659C10.0345 11.4522 28.3111 2.48073 46.6443 2.02753Z"
                  ></path>
                </svg>
                <svg
                  class="bootcamp-card3-shape3 img-fluid"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(252.00,88.25%,74.41%,100%)" }}
                    d="M46.6443 2.02753C66.6399 1.53324 88.5794 7.59278 95.422 28.5087C102.874 51.2865 93.5364 76.7516 75.5776 90.4677C58.9651 103.156 37.2191 98.7293 21.1053 85.2685C5.82684 72.5056 -2.06419 50.8861 4.10887 30.7659C10.0345 11.4522 28.3111 2.48073 46.6443 2.02753Z"
                  ></path>
                </svg>
              </div>
              <h2 className="text-right course-name">
                The Responsive Web Design Bootcamp
              </h2>
            </div>
            <div className="card-body p-2">
              <div className="row">
                <div className="col-auto">
                  <p
                    className="card-text text-left"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    174 lessons | 15 hours
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      marginTop: "-1rem",
                    }}
                    className="card-text text-left"
                  >
                    with <strong>Kevin Powell</strong>
                  </p>
                </div>
                <div className="col-auto ml-auto">
                  <img
                    src="https://scrimba.com/avatars/kevin-powell/64"
                    className="img-fluid avatar rounded-circle"
                  />
                </div>
              </div>
              <div className="row pt-5">
                <div className="col">
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                    className="card-text text-left difficulty"
                  >
                    Intermediate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card course-card">
            <div
              style={{
                backgroundColor: "#F1DED0",
                padding: "1rem",
                height: "60%",
                display: "grid",
                position: "relative",
                zIndex: "0",
                placeItems: "center",
              }}
            >
              <div className="shapes">
                <svg
                  class="html-card3-shape1"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(220.00,88.25%,78.41%,100%)" }}
                    d="M13.4722 14.9548C27.7804 -2.67845 49.7337 0.345336 67.4 8.41128C84.5927 16.261 100.585 31.1761 97.6499 53.388C94.6973 75.7326 75.1119 89.9688 55.8613 95.735C37.5404 101.223 18.5249 97.0492 9.47335 79.7998C-0.70101 60.4107 -1.5127 33.4221 13.4722 14.9548Z"
                  ></path>
                </svg>
                <svg
                  class="html-card3-shape2"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path></path>
                </svg>
                <svg
                  class="html-card3-shape4"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(220.00,88.25%,78.41%,100%)" }}
                    d="M13.4722 14.9548C27.7804 -2.67845 49.7337 0.345336 67.4 8.41128C84.5927 16.261 100.585 31.1761 97.6499 53.388C94.6973 75.7326 75.1119 89.9688 55.8613 95.735C37.5404 101.223 18.5249 97.0492 9.47335 79.7998C-0.70101 60.4107 -1.5127 33.4221 13.4722 14.9548Z"
                  ></path>
                </svg>
                <svg
                  class="html-card3-shape6"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(220.00,88.25%,78.41%,100%)" }}
                    d="M13.4722 14.9548C27.7804 -2.67845 49.7337 0.345336 67.4 8.41128C84.5927 16.261 100.585 31.1761 97.6499 53.388C94.6973 75.7326 75.1119 89.9688 55.8613 95.735C37.5404 101.223 18.5249 97.0492 9.47335 79.7998C-0.70101 60.4107 -1.5127 33.4221 13.4722 14.9548Z"
                  ></path>
                </svg>
              </div>
              <h2 className="text-right course-name">Introduction to HTML</h2>
            </div>
            <div className="card-body p-2">
              <div className="row">
                <div className="col-auto">
                  <p
                    className="card-text text-left"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    17 lessons | 56 minutes
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      marginTop: "-1rem",
                    }}
                    className="card-text text-left"
                  >
                    with <strong>Eric Vida</strong>
                  </p>
                </div>
                <div className="col-auto ml-auto">
                  <img
                    src="https://scrimba.com/avatars/ericvida/64"
                    className="img-fluid avatar rounded-circle"
                  />
                </div>
              </div>
              <div className="row pt-5">
                <div className="col">
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                    className="card-text text-left difficulty"
                  >
                    Beginner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card course-card">
            <div
              style={{
                backgroundColor: "#F1DED0",
                padding: "1rem",
                height: "60%",
                display: "grid",
                position: "relative",
                zIndex: "0",
                placeItems: "center",
              }}
            >
              <div className="shapes">
                <svg
                  class="new-to-coding-card2-shape1 img-fluid"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(28.00,52.00%,95.00%,100%)" }}
                    d="M13.4722 14.9548C27.7804 -2.67845 49.7337 0.345336 67.4 8.41128C84.5927 16.261 100.585 31.1761 97.6499 53.388C94.6973 75.7326 75.1119 89.9688 55.8613 95.735C37.5404 101.223 18.5249 97.0492 9.47335 79.7998C-0.70101 60.4107 -1.5127 33.4221 13.4722 14.9548Z"
                  ></path>
                </svg>
                <svg
                  class="new-to-coding-card2-shape2 img-fluid"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(28.00,52.00%,95.00%,100%)" }}
                    d="M48.3671 4.00414C61.7855 2.7251 76.745 -1.97133 86.4625 9.80638C97.2181 22.8423 100.354 43.9553 96.2873 62.0843C92.4299 79.2819 80.463 91.9101 66.9118 96.9691C55.504 101.228 45.1731 91.3023 34.2907 85.2291C22.5778 78.6925 6.96447 76.7547 3.05352 61.3315C-1.02481 45.2483 7.40784 28.3849 16.8479 16.442C25.0359 6.08323 36.8209 5.10471 48.3671 4.00414Z"
                  ></path>
                </svg>
              </div>
              <h2 className="text-right course-name">
                HTML & CSS Crash Course
              </h2>
            </div>
            <div className="card-body p-2">
              <div className="row">
                <div className="col-auto">
                  <p
                    className="card-text text-left"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    31 lessons | 4 hours
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      marginTop: "-1rem",
                    }}
                    className="card-text text-left"
                  >
                    with <strong>Kevin Powell</strong>
                  </p>
                </div>
                <div className="col-auto ml-auto">
                  <img
                    src="https://scrimba.com/avatars/kevin-powell/64"
                    className="img-fluid avatar rounded-circle"
                  />
                </div>
              </div>
              <div className="row pt-5">
                <div className="col">
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                    className="card-text text-left difficulty"
                  >
                    Beginner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default HTML;
