import React from "react"
import "./side.css"
import Heading from "../../../common/heading/Heading"
import SocialMedia from "../social/SocialMedia"

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <Heading title='Media Sosial' />
      <SocialMedia />
    </>
  )
}

export default Side
