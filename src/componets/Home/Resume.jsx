import React from "react";
import { motion } from "framer-motion";

function Resume() {
  return (
    <>
      <h1 className="card-title text-center mb-4">Resume</h1>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-4 d-flex justify-content-center align-items-center"
        style={{
          background: "rgb(220, 220, 220)",
          minHeight: "100vh",
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <motion.ul
              className="p-3"
              style={{ borderRight: "2px solid #ccc" }}
            >
              <h2 className="fw-bold text-left mb-3">Personal Information</h2>
              <li className="list-group-item" transition={{ duration: 0.3 }}>
                Name:Aown Ali
              </li>
              <li className="list-group-item" transition={{ duration: 0.3 }}>
                Email: aownali441@gmail.com
              </li>
              <li className="list-group-item" transition={{ duration: 0.3 }}>
                Phone: +923066614104
              </li>
            </motion.ul>
            <motion.ul
              className="p-3"
              style={{ borderRight: "2px solid #ccc" }}
            >
            </motion.ul>
          </div>
          <div className="col-md-6">
            <motion.ul whileHover={{ scale: 1.05 }} className="p-3">
              <h2 className="fw-bold text-left mb-3">Education</h2>
              <li
                className="list-group-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Bachelor of Science in Computer Science
              </li>
              <li
                className="list-group-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                UMT, 2025
              </li>
            </motion.ul>
            <motion.ul
              whileHover={{ scale: 1.05 }}
              className="p-3"
              style={{ cursor: "pointer" }}
            >
              <h2 className="fw-bold text-left mb-3">Language Skills</h2>
              <li
                className="list-group-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                English: Intermediate
              </li>
              <li
                className="list-group-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Urdu: Fluent
              </li>
            </motion.ul>
            <motion.ul
              whileHover={{ scale: 1.05 }}
              className="p-3"
              style={{ cursor: "pointer" }}
            >
              <h2 className="fw-bold text-left mb-3">Experience</h2>
              <b
                className="list-group-item "
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Internship
              </b>
              <li
                className="list-group-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                
              </li>
              <li
                className="list-group-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Beyond the logic
              </li>
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Resume;
