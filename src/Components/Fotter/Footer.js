import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Row, Col } from "react-bootstrap";

function Footer({ isBlock }) {
  // Footer Links
  const Links = [
    {
      link: "https://www.facebook.com/ForR3oN",
      size: "2x",
      color: "#2050b3",
      icon: faFacebook,
      classes: "fot-link",
    },
    {
      link: "https://www.linkedin.com/in/ahmed-ashraf-10712922a/",
      size: "2x",
      color: "#fff",
      icon: faLinkedinIn,
      classes: "",
    },
    {
      link: "https://github.com/ahmdgun0",
      size: "2x",
      color: "#fff",
      icon: faGithub,
      classes: "",
    },
  ];

  return (
    <footer
      className={`bg-${isBlock ? "danger" : "dark"} text-white text-center p-3`}
    >
      <Row>
        <Col>
          <p className="fs-5">By Ahmed Ashraf {"<3"}</p>
        </Col>
      </Row>
      <Row className="mt-3 linksRow">
        {Links.map((link, i) => (
          <Col key={i}>
            <a href={link.link} target="_blanc">
              <span className="fot-span">Description Name</span>
              <FontAwesomeIcon
                color={link.color}
                size={link.size}
                icon={link.icon}
                className={`cu-pointer ${link.classes}`}
              />
            </a>
          </Col>
        ))}
      </Row>
    </footer>
  );
}

export default Footer;
