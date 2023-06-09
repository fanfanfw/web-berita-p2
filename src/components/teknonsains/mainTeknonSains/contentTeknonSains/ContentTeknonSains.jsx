import React from "react"
import "./contentteknonsains.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { contentTeknonSains } from "../../../../dummyData"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"

const ContentTeknonSains = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 5,
    slidesPerRow: 1,
  }
  return (
    <>
      <section className='teknonsains'>
        <Heading title='Tekno & Sains' />
        <div className='content'>
        <Slider {...settings}>
            {contentTeknonSains
              .filter((val) => val.catgeory === "Tekno & Sains" || val.catgeory === "Tekno" || val.catgeory === "Sains")
              .map((val) => {
                return (
                  <div className='items'>
                    <div className='box shadow flexSB'>
                      <div className='images'>
                        <div className='img'>
                          <img src={val.cover} alt='' />
                        </div>
                        <div class='category category1'>
                          <span>{val.catgeory}</span>
                        </div>
                      </div>
                      <div className='text'>
                      <Link to={`/TeknonSainsPage/${val.id}`}>
                        <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                        </Link>
                        <div className='date'>
                          <i class='fas fa-calendar-days'></i>
                          <label>{val.date}</label>
                        </div>
                        <p className='desc'>{val.desc.slice(0, 250)}...</p>
                        <div className='comment'>
                          <i class='fas fa-share'></i>
                          <label>Share / </label>
                          <i class='fas fa-comments'></i>
                          <label>{val.comments}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
         </Slider>
        </div>
      </section>
    </>
  )
}

export default ContentTeknonSains
