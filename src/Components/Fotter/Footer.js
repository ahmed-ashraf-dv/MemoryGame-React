import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Row, Col } from "react-bootstrap";

function Footer() {
  // Footer Links
  const Links = [
    {
      link: "https://www.facebook.com/ForR3oN",
      size: "2x",
      color: "#2050b3",
      icon: faFacebook,
      style: { backgroundColor: "#fff", borderRadius: "50%" },
    },
    {
      link: "https://www.linkedin.com/in/ahmed-ashraf-10712922a/",
      size: "2x",
      color: "#fff",
      icon: faLinkedinIn,
      style: {},
    },
    {
      link: "https://github.com/ahmdgun0",
      size: "2x",
      color: "#fff",
      icon: faGithub,
      style: {},
    },
  ];

  return (
    <footer className="bg-dark text-white text-center p-3">
      <Row>
        <Col>
          <p className="fs-5">By Ahmed Ashraf {"<3"}</p>
        </Col>
      </Row>
      <Row className="mt-3 linksRow">
        {Links.map((link, i) => (
          <Col key={i}>
            <a href={link.link} target="_blanc">
              <span style={{ width: "0", opacity: "0", position: "absolute" }}>
                Description Name
              </span>
              <FontAwesomeIcon
                color={link.color}
                size={link.size}
                icon={link.icon}
                style={{ ...link.style, cursor: "pointer" }}
              />
            </a>
          </Col>
        ))}
      </Row>
    </footer>
  );
}

export default Footer;
