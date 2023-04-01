import React from "react"
import "./Footer.scss"
import Logo from "../../assets/Logo.png"

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
            <a href="terms&conditions">
              Terms & Conditions
            </a>
          </p>
          <p>
            <a href="privacy">Privacy</a>
          </p>
          <p>
            <a href="copyright">Copyright</a>
          </p>
          <p>
            <a href="/#contact">Contact us</a>
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
