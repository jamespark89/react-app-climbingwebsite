import React from "react"
import Board from "../components/Board/Board"
import Contact from "../components/Contact/Contact"
import Events from "../components/Events/Events"
import Gallery from "../components/Gallery/Gallery"
import Main from "../components/Main/Main"

export default function Home() {
  return (
    <>
      <Main />
      <Events />
      <Gallery />
      <Board />
      <Contact />
    </>
  )
}
