import React, { useEffect } from "react"
import "./SigninModal.scss"

export default function SigninModal({ modal, setModal }) {
  const handleCancel = () => {
    setModal("off")
    document.getElementById("id01").style.display = "none"
  }

  useEffect(() => {
    if (modal === "on") {
      document.getElementById("id01").style.display =
        "block"
    }
  }, [modal])
  return (
    <div id="id01" className="modal">
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
          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            className="loginbtn btn-yellow"
          >
            Login
          </button>
          <label>
            <input type="checkbox" name="remember" />
            Remember Me
          </label>
        </div>
        <div className="container">
          <button
            type="button"
            onClick={handleCancel}
            className="cancelbtn"
          >
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="/">password?</a>
          </span>
        </div>
      </form>
    </div>
  )
}
