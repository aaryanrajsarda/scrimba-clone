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
        <div className="col-md-3 col-12 col-sm-6">
          <div className="card" style={{ borderRadius: "8px" }}>
            <div className="card1-art-top">
              <span className="card-title">
                The Frontend Developer Career Path
              </span>
              <div className="shapes">
                <svg
                  class="card1shape1"
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
                  class="card1shape2"
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
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p className="card-text text-left lessons">
                    928 lessons | 75 hours
                  </p>
                  <p className="card-text text-left instructor">
                    with <strong>Per Harald Borgen</strong>
                  </p>
                  <p className="card-text text-left">Beginner</p>
                </div>
                <div className="col">
                  <img
                    src="https://scrimba.com/avatars/perborgen/64"
                    alt="avatar"
                    width="44px"
                    className="avatar"
                    height="44px"
                    style={{ borderRadius: "50%", marginLeft: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 col-sm-6">
          <div className="card" style={{ borderRadius: "8px" }}>
            <div className="card2-art-top">
              <span className="card-title">The React Bootcamp</span>
              <div className="shapes">
                <svg
                  class="card2shape1"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(252.5, 100%, 90.5%, 100%)" }}
                    d="M46.6443 2.02753C66.6399 1.53324 88.5794 7.59278 95.422 28.5087C102.874 51.2865 93.5364 76.7516 75.5776 90.4677C58.9651 103.156 37.2191 98.7293 21.1053 85.2685C5.82684 72.5056 -2.06419 50.8861 4.10887 30.7659C10.0345 11.4522 28.3111 2.48073 46.6443 2.02753Z"
                  ></path>
                </svg>
                <svg
                  class="card2shape2"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(252, 88.25%, 74.41%, 100%)" }}
                    d="M46.6443 2.02753C66.6399 1.53324 88.5794 7.59278 95.422 28.5087C102.874 51.2865 93.5364 76.7516 75.5776 90.4677C58.9651 103.156 37.2191 98.7293 21.1053 85.2685C5.82684 72.5056 -2.06419 50.8861 4.10887 30.7659C10.0345 11.4522 28.3111 2.48073 46.6443 2.02753Z"
                  ></path>
                </svg>
                <svg
                  class="card2shape3"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(252, 88.25%, 74.41%, 100%)" }}
                    d="M46.6443 2.02753C66.6399 1.53324 88.5794 7.59278 95.422 28.5087C102.874 51.2865 93.5364 76.7516 75.5776 90.4677C58.9651 103.156 37.2191 98.7293 21.1053 85.2685C5.82684 72.5056 -2.06419 50.8861 4.10887 30.7659C10.0345 11.4522 28.3111 2.48073 46.6443 2.02753Z"
                  ></path>
                </svg>
                <svg
                  class="card2shape4"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(252.5, 100%, 90.5%, 100%)" }}
                    d="M46.6443 2.02753C66.6399 1.53324 88.5794 7.59278 95.422 28.5087C102.874 51.2865 93.5364 76.7516 75.5776 90.4677C58.9651 103.156 37.2191 98.7293 21.1053 85.2685C5.82684 72.5056 -2.06419 50.8861 4.10887 30.7659C10.0345 11.4522 28.3111 2.48073 46.6443 2.02753Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p className="card-text text-left lessons">
                    128 lessons | 12 hours
                  </p>
                  <p className="card-text text-left instructor">
                    with <strong>Bob Ziroll</strong>
                  </p>
                  <p className="card-text text-left">Advanced</p>
                </div>
                <div className="col">
                  <img
                    src="https://scrimba.com/avatars/bobziroll/64"
                    alt="avatar"
                    width="44px"
                    className="avatar"
                    height="44px"
                    style={{ borderRadius: "50%", marginLeft: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 col-sm-6">
          <div className="card" style={{ borderRadius: "8px" }}>
            <div className="card3-art-top">
              <span className="card-title">
                Build an Instagram Clone in React
              </span>
              <div className="shapes">
                <svg
                  class="card3shape1"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(252.00,88.25%,74.41%,100%)" }}
                    d="M48.3671 4.00414C61.7855 2.7251 76.745 -1.97133 86.4625 9.80638C97.2181 22.8423 100.354 43.9553 96.2873 62.0843C92.4299 79.2819 80.463 91.9101 66.9118 96.9691C55.504 101.228 45.1731 91.3023 34.2907 85.2291C22.5778 78.6925 6.96447 76.7547 3.05352 61.3315C-1.02481 45.2483 7.40784 28.3849 16.8479 16.442C25.0359 6.08323 36.8209 5.10471 48.3671 4.00414Z"
                  ></path>
                </svg>
                <svg
                  class="card3shape2"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(252.00,76.50%,62.82%,100%)" }}
                    d="M37.1071 93.4379C22.0739 77.4689 -6.11936 67.1235 4.23023 32.2667C14.5654 -2.5414 37.3932 2.06224 56.2355 2.35359C71.9159 2.59605 95.9271 5.12767 97.8883 33.7149C99.859 62.4409 75.3031 75.878 59.7098 91.1998C51.5735 99.1945 43.6573 100.396 37.1071 93.4379Z"
                  ></path>
                </svg>
                <svg
                  class="card3shape3"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(252.00,64.76%,51.22%,100%)" }}
                    d="M44.9691 4.79871C56.6118 5.67153 68.507 5.369 77.777 12.665C88.3572 20.9924 96.7262 32.7477 97.8277 46.4017C99.009 61.0447 94.0942 76.1464 83.7126 86.2421C73.5557 96.1193 58.9147 98.8044 44.9691 97.8045C32.0316 96.8769 19.396 91.4475 11.2764 81.0484C3.83447 71.517 5.54215 58.6033 4.83431 46.4017C4.04958 32.8746 -2.27931 16.9796 7.00157 7.35917C16.2873 -2.26621 31.8192 3.81289 44.9691 4.79871Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p className="card-text text-left lessons">
                    93 lessons | 9 hours
                  </p>
                  <p className="card-text text-left instructor">
                    with <strong>Karl Hadwen</strong>
                  </p>
                  <p className="card-text text-left">Advanced</p>
                </div>
                <div className="col">
                  <img
                    src="https://scrimba.com/avatars/uid/u42kLRTV/64"
                    alt="avatar"
                    width="44px"
                    className="avatar"
                    height="44px"
                    style={{ borderRadius: "50%", marginLeft: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 col-sm-6">
          <div className="card" style={{ borderRadius: "8px" }}>
            <div className="card4-art-top">
              <span className="card-title">
                The Responsive Web Design Bootcamp
              </span>
              <div className="shapes">
                <svg
                  class="card4shape1"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{ fill: "hsla(252, 100%, 86%, 100%)" }}
                    d="M87.5194 12.6911C100.724 30.4477 100.024 56.2045 93.265 75.1548C86.9776 92.7838 73.2551 101.066 57.4621 96.9686C35.4989 91.2701 7.03718 81.4582 2.47942 51.5996C-1.94928 22.5864 25.2781 17.5186 44.0252 8.94122C58.235 2.43979 74.9374 -4.22816 87.5194 12.6911Z"
                  ></path>
                </svg>
                <svg
                  class="card4shape2"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{
                      fill: "hsla(54.00,74.83%,64.59%,100%)",
                    }}
                    d="M46.6443 2.02753C66.6399 1.53324 88.5794 7.59278 95.422 28.5087C102.874 51.2865 93.5364 76.7516 75.5776 90.4677C58.9651 103.156 37.2191 98.7293 21.1053 85.2685C5.82684 72.5056 -2.06419 50.8861 4.10887 30.7659C10.0345 11.4522 28.3111 2.48073 46.6443 2.02753Z"
                  ></path>
                </svg>
                <svg
                  class="card4shape3"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  height="100"
                >
                  <path
                    style={{
                      fill: "hsla(252.00,88.25%,74.41%,100%)",
                    }}
                    d="M46.6443 2.02753C66.6399 1.53324 88.5794 7.59278 95.422 28.5087C102.874 51.2865 93.5364 76.7516 75.5776 90.4677C58.9651 103.156 37.2191 98.7293 21.1053 85.2685C5.82684 72.5056 -2.06419 50.8861 4.10887 30.7659C10.0345 11.4522 28.3111 2.48073 46.6443 2.02753Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p className="card-text text-left lessons">
                    174 lessons | 15 hours
                  </p>
                  <p className="card-text text-left instructor">
                    with <strong>Kevin Powell</strong>
                  </p>
                  <p className="card-text text-left">Intermediate</p>
                </div>
                <div className="col">
                  <img
                    src="https://scrimba.com/avatars/kevin-powell/64"
                    alt="avatar"
                    width="44px"
                    className="avatar"
                    height="44px"
                    style={{ borderRadius: "50%", marginLeft: "auto" }}
                  />
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

export default PopularCourses;
