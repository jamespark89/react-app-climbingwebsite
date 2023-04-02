import React from "react"
import logo from "../../assets/Logo.png"
import "./Navbar.scss"

export default function Navbar() {
  return (
    <nav className="navbar">
      <figure className="logo">
        <a href="/react-app-climbingwebsite">
          <img src={logo} width="100px" alt="Logoimage" />
        </a>
      </figure>
      <div>
        <ul className="nav-items">
          <li>
            <a href="/react-app-climbingwebsite#events">
              Events
            </a>
          </li>
          <li>
            <a href="/react-app-climbingwebsite#gallery">
              Gallery
            </a>
          </li>
          <li>
            <a href="/react-app-climbingwebsite#board">
              Board
            </a>
          </li>
          <li>
            <a href="/react-app-climbingwebsite#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
