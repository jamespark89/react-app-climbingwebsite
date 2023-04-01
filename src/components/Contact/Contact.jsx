import React from "react"
import "./Contact.scss"

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <form action="/">
        <label htmlFor="firstname">Name </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          required
        />

        <label htmlFor="role">Role </label>
        <select id="role">
          <option value="Hobby climber">
            Hobby climber
          </option>
          <option value="Athlete">Athlete</option>
          <option value="Influencer">Influencer</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          required
        ></textarea>
        <button
          type="submit"
          className="submitbtn btn-yellow"
        >
          Sumbit
        </button>
      </form>
    </section>
  )
}
