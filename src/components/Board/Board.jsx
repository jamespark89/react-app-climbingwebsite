import React from "react"
import "./Board.scss"

export default function Board() {
  return (
    <section className="board" id="board">
      <h2>Board</h2>
      <ul>
        <li>
          <p className="classification">Notice</p>
          <h1>
            Inviting to free coaching session by an Olympic
            team coach
          </h1>
          <p>Do you want to improve you climbing skills?</p>
          <span className="writer">Drew Potter</span>
          <span>Feb 23, 2023</span>
        </li>
        <li>
          <p className="classification">News</p>
          <h1>
            Stefano Ghisolfi On Prying Excalibur From the
            Stone
          </h1>
          <p>
            The Italian climber reckons the line goes at
            5.15C, making it Italy's hardest route.
          </p>
          <span className="writer">Owen Clarke</span>
          <span>Feb 23, 2023</span>
        </li>
        <li>
          <p className="classification">Gear</p>
          <h1>
            Valandre's 5F Sleeping Bag is One of the Best
            We've Ever Tested
          </h1>
          <p>
            The Bloody Mary's laundry list of features makes
            it much more than "just" a winter bag.
          </p>
          <span className="writer">Anthony Walsh</span>
          <span>Feb 21, 2023</span>
        </li>
      </ul>
    </section>
  )
}
