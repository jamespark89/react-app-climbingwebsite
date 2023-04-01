import React from "react"
import logo from "../../assets/Logo.png"
import "./Navbar.scss"

export default function Navbar() {
  return (
    <nav className="navbar">
      <figure className="logo">
        <a href="/">
          <img src={logo} width="100px" alt="Logoimage" />
        </a>
      </figure>
      <div>
        <ul className="nav-items">
          <li>
            <a href="/#events">Events</a>
          </li>
          <li>
            <a href="/#gallery">Gallery</a>
          </li>
          <li>
            <a href="/#board">Board</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
