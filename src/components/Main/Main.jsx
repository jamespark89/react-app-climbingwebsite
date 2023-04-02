import React, { useState } from "react"
import "./Main.scss"
import Hero from "../../assets/Hero.jpg"
import SigninModal from "../SigninModal/SigninModal"
import SignupModal from "../SignupModal/SignupModal"

export default function Main() {
  const [signinModal, setSigninModal] = useState("off")
  const [signupModal, setSignupModal] = useState("off")
  const signinOnClick = () => {
    if (signinModal === "off") {
      setSigninModal("on")
    } else {
      setSigninModal("off")
    }
  }
  const signupOnClick = () => {
    if (signupModal === "off") {
      setSignupModal("on")
    } else {
      setSignupModal("off")
    }
  }
  return (
    <>
      <section className="hero">
        <figure>
          <img src={Hero} alt="Heroimage" />
        </figure>
        <div className="herocard">
          <h1>
            Welcome to <br />
            Australia <br />
            Sport Climbing
          </h1>
          <p>LEAD - BOULDERING - SPEED</p>
          <button
            className="joinbtn btn-yellow"
            onClick={signupOnClick}
          >
            JOIN NOW
          </button>
          <button
            className="signinbtn btn-gray"
            onClick={signinOnClick}
          >
            SIGN IN
          </button>
        </div>
      </section>

      <SignupModal
        modal={signupModal}
        setModal={setSignupModal}
        signinOnClick={signupOnClick}
      />
      <SigninModal
        modal={signinModal}
        setModal={setSigninModal}
        signinOnClick={signinOnClick}
      />
    </>
  )
}
