import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoInstagram } from "react-icons/io";

function Footer() {
  return (
    <footer className="text-center bg-body-tertiary">
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="https://www.facebook.com/"
            role="button"
          >
            <FaFacebookSquare />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="https://www.google.com/"
            role="button"
          >
            <FcGoogle />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="https://www.instagram.com/"
            role="button"
          >
            <IoLogoInstagram />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="https://www.linkedin.com/in/aown-ali-587457241?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqaH9qeH2QOWI59GxuKnA%2FA%3D%3D "
            role="button"
          >
            <FaLinkedinIn />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="https://github.com/"
            role="button"
          >
            <FaGithub />
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 copyRight
      </div>
    </footer>
  );
}

export default Footer;
