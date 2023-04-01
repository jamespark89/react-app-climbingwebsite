import React, { useState } from "react"
import "./Main.scss"
import Hero from "../../assets/Hero.jpg"
import SigninModal from "../SigninModal/SigninModal"

export default function Main() {
  const [modal, setModal] = useState("off")
  const signinOnClick = () => {
    if (modal === "off") {
      setModal("on")
    } else {
      setModal("off")
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
          <button className="joinbtn btn-yellow">
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
      <SigninModal
        modal={modal}
        setModal={setModal}
        signinOnClick={signinOnClick}
      />
    </>
  )
}
