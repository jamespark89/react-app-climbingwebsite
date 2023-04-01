import React from "react"
import "./Gallery.scss"
import Climbing_1 from "../../assets/Climbing_1.jpg"
import Climbing_2 from "../../assets/Climbing_2.jpg"
import Climbing_3 from "../../assets/Climbing_3.jpg"
import Climbing_4 from "../../assets/Climbing_4.jpg"
import Climbing_5 from "../../assets/Climbing_5.jpg"
import Climbing_6 from "../../assets/Climbing_6.jpg"
import Climbing_7 from "../../assets/Climbing_7.jpg"
import Climbing_8 from "../../assets/Climbing_8.jpg"

export default function Gallery() {
  const photoSrc_1 = [
    Climbing_1,
    Climbing_2,
    Climbing_3,
    Climbing_4
  ]
  const photoSrc_2 = [
    Climbing_5,
    Climbing_6,
    Climbing_7,
    Climbing_8
  ]
  const handleNext = () => {
    const slidesContainer = document.getElementById(
      "slides-container"
    )
    const slide = document.querySelector(".slide")
    const slideWidth = slide.clientWidth
    slidesContainer.scrollLeft += slideWidth //shift right
  }
  const handlePrev = () => {
    const slidesContainer = document.getElementById(
      "slides-container"
    )
    const slide = document.querySelector(".slide")
    const slideWidth = slide.clientWidth
    slidesContainer.scrollLeft -= slideWidth //shift left
  }

  return (
    <section className="gallery" id="gallery">
      <h2>Gallery</h2>
      <section className="slider-wrapper">
        <ul
          className="slides-container"
          id="slides-container"
        >
          <li className="slide">
            <div className="grid-container">
              {photoSrc_1.map((photo) => (
                <div className="grid-item" key={photo}>
                  <img src={photo} alt="climbingphoto" />
                </div>
              ))}
            </div>
          </li>
          <li className="slide">
            <div className="grid-container">
              {photoSrc_2.map((photo) => (
                <div className="grid-item" key={photo}>
                  <img src={photo} alt="climbingphoto" />
                </div>
              ))}
            </div>
          </li>
        </ul>

        <button
          className="slide-arrow"
          id="slide-arrow-prev"
          onClick={handlePrev}
        >
          &#8249;
        </button>

        <button
          className="slide-arrow"
          id="slide-arrow-next"
          onClick={handleNext}
        >
          &#8250;
        </button>
      </section>
      <button className="viewmorebtn btn-yellow">
        View more
      </button>
    </section>
  )
}
