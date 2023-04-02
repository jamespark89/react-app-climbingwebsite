import React from "react"
import "./Footer.scss"
import Logo from "../../assets/Logo.png"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer>
      <figure>
        <img src={Logo} alt="logoimage" />
      </figure>
      <div className="footercard">
        <div className="aboutus">
          <h1>ABOUT US</h1>
          <p>
            <Link to="terms&conditions">
              Terms & Conditions
            </Link>
          </p>
          <p>
            <Link to="privacy">Privacy</Link>
          </p>
          <p>
            <Link to="copyright">Copyright</Link>
          </p>
          <p>
            <Link to="/#contact">Contact us</Link>
          </p>
        </div>
        <div className="contactus">
          <h1>CONTACT & ENQUIRIES</h1>
          <p>Email: info@climbing.com.au</p>
          <p>Phone: 03 1111 1111</p>
        </div>
      </div>
    </footer>
  )
}
