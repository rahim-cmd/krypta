import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const path = location.pathname; // e.g., "/about"

  if (path === "/about") {
    return (
      <div className="container-fluid" style={{ background: "orange" }}>
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h4 className="text-white  mb-4 wow fadeInDown" data-wow-delay="0.1s">
            About
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">pages</Link>
            </li>
            <li className="active text-secondary">{path}</li>
          </ol>
        </div>
      </div>
    );
  } else if (path === "/contact") {
    return (
      <div className="container-fluid" style={{ background: "orange" }}>
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h4 className="text-white  mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Contact
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">pages</Link>
            </li>

            <li className="active text-secondary">{path}</li>
          </ol>
        </div>
      </div>
    );
  } else if (path === "/") {
    return null;
  } else {
    return (
      <div className="container-fluid" style={{ background: "orange" }}>
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h4 className="text-white mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Services
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">pages</li>
            <li className="active text-secondary">{path}</li>
          </ol>
        </div>
      </div>
    );
  }
}
