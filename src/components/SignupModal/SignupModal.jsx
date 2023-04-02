import React, { useEffect } from "react"
import "./SignupModal.scss"

export default function SignupModal({ modal, setModal }) {
  const handleCancel = () => {
    setModal("off")
    document.getElementById("id02").style.display = "none"
  }

  useEffect(() => {
    if (modal === "on") {
      document.getElementById("id02").style.display =
        "block"
    }
  }, [modal])
  return (
    <div id="id02" className="modal">
      <form className="modal-content animate" method="POST">
        <div className="container">
          {/* <!-- Username --> */}
          <label>
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          {/* <!-- Password --> */}
          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          {/* Confirm Password */}
          <label>
            <b>Confirm Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <label>
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter eamil"
            name="email"
            required
          />
          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            className="loginbtn btn-yellow"
          >
            Siginin
          </button>
        </div>
        <div className="container">
          <button
            type="button"
            onClick={handleCancel}
            className="cancelbtn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
