import React from "react"
import "./Events.scss"
import Event_1 from "../../assets/Event_1.jpeg"
import Event_2 from "../../assets/Event_2.jpeg"

export default function Events() {
  return (
    <section className="events" id="events">
      <h1>Upcoming Events</h1>
      <ul className="eventcard">
        <li>
          <figure>
            <img src={Event_1} alt="eventposter" />
          </figure>
          <h3>2023 Victorian State Lead Titles</h3>
          <table>
            <tbody>
              <tr>
                <th>start</th>
                <td>04 Mar 2023</td>
              </tr>
              <tr>
                <th>End</th>
                <td>05 Mar 2023</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>Urban Climb,Blackburn</td>
              </tr>
            </tbody>
          </table>
          <button className="registerbtn btn-yellow">
            Register
          </button>
        </li>
        <li>
          <figure>
            <img src={Event_2} alt="eventposter" />
          </figure>
          <h3>2023 NSW/ACT Lead and Speed Titles</h3>
          <table>
            <tbody>
              <tr>
                <th>start</th>
                <td>11 Mar 2023</td>
              </tr>
              <tr>
                <th>End</th>
                <td>12 Mar 2023</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>SICG Villawood</td>
              </tr>
            </tbody>
          </table>
          <button className="registerbtn btn-yellow">
            Register
          </button>
        </li>
      </ul>
    </section>
  )
}
