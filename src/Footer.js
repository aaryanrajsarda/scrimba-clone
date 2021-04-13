import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="container-fluid">
      <div className="row px-md-5 py-5">
        <div className="col-md-4 col-12">
          <div className="row pl-md-5 py-md-3">
            <div className="col-12">
              <img
                src="dark-logo.svg"
                alt="scrimba logo"
                align="left"
                height="20"
              />
            </div>
          </div>
          <ul className="row pl-md-5 footer-list">
            <li className="col-md-12 col-3 py-3 text-left">Home</li>
            <li className="col-md-12 col-3 py-3 text-left">Discord</li>
            <li className="col-md-12 col-3 py-3 text-left">Twitter</li>
            <li className="col-md-12 col-3 py-3 text-left">Youtube</li>
          </ul>
        </div>
        <div className="col-md col-12">
          <div className="row pt-md-3">
            <div className="col-12">
              <strong>
                <p className="text-left text-md-right">Resources</p>
              </strong>
            </div>
          </div>
          <ul className="row footer-list">
            <li className="col-md-12 col-3 py-3 text-left text-md-right">
              Blog
            </li>
            <li className="col-md-12 col-3 py-3 text-left text-md-right">
              FAQ
            </li>
            <li className="col-md-12 col-3 py-3 text-left text-md-right">
              Terms
            </li>
            <li className="col-md-12 col-3 py-3 text-left text-md-right">
              Privacy
            </li>
          </ul>
        </div>
        <div className="col-md col-12">
          <div className="row pt-md-3">
            <div className="col-12">
              <strong>
                <p className="text-left text-md-right">Courses</p>
              </strong>
            </div>
          </div>
          <ul className="row footer-list">
            <li className="col-md-12 col-3 py-3 text-left text-md-right">
              All courses
            </li>
            <li className="col-md-12 col-3 py-3 text-left text-md-right">
              Intro courses
            </li>
            <li className="col-md-12 col-3 py-3 text-left text-md-right">
              Learn JavaScript
            </li>
            <li className="col-md-12 col-3 py-3 text-left text-md-right">
              Learn React
            </li>
          </ul>
        </div>
        <div className="col-md col-12">
          <div className="row pr-md-5 pt-md-3">
            <div className="col-12">
              <strong>
                <p className="text-left text-md-right">Company</p>
              </strong>
            </div>
          </div>
          <ul className="row pr-md-5 footer-list">
            <li className="col-md-12 col-3 py-3 text-left text-md-right">
              About us
            </li>
            <li className="col-md-12 col-3 py-3 text-left text-md-right">
              Contact us
            </li>
            <li className="col-md-12 col-3 py-3 text-left text-md-right">
              Support chat
            </li>
            <li className="col-md-12 col-3 py-3 text-left text-md-right">
              Gift membership
            </li>
          </ul>
        </div>
        <div className="col-12 ml-md-5 text-left">
          <p>
            Built with <strong>Imba</strong>
          </p>
        </div>
      </div>
      {/* <img src="shape-light-coral-edge-bottom.svg" /> */}
    </footer>
  );
}

export default Footer;
