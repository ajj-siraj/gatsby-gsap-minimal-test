/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const Layout = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".nav-link", {
      alpha: 0,
      scrollTrigger: { trigger: ".nav-link" },
    })
    if (document) {
      gsap.from("#triggered", {
        duration: 3,
        alpha: 0,
        scrollTrigger: { start: "50% 50%", markers: true },
      })
    }
  })
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#triggered">
          Navbar
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#triggered">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#triggered">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#triggered">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ minHeight: "100vh" }}>content</div>
      <div
        style={{ textAlign: "center", fontSize: "4rem", minHeight: "100vh" }}
        id="triggered"
      >
        Scroll Triggered content
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
