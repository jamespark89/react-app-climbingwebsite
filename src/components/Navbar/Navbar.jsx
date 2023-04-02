import React from "react"
import { HashLink as Link } from "react-router-hash-link"
import logo from "../../assets/Logo.png"
import "./Navbar.scss"

export default function Navbar() {
  const navItems = ["events", "gallery", "board", "contact"]
  return (
    <nav className="navbar">
      <figure className="logo">
        <a href="/react-app-climbingwebsite">
          <img src={logo} width="100px" alt="Logoimage" />
        </a>
      </figure>
      <div>
        <ul className="nav-items">
          {navItems.map((item) => {
            return (
              <li key={item}>
                <Link to={`#${item}`}>
                  {item.charAt(0).toUpperCase()}
                  {item.slice(1)}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
