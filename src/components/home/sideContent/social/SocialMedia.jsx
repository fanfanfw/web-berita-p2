import React from "react"
import "./socialstyle.css"

const SocialMedia = () => {
  return (
    <>
      <section className='social'>
        <div className='socBox'>
          <i className='fab fa-facebook-f'></i>
          <a href='https://web.facebook.com/BandungSTMIK' target='_blank' rel='noopener noreferrer'><span>11,740 Likes</span></a>
        </div>
        <div className='socBox'>
          <i className='fab fa-twitter'></i>
          <a href='https://twitter.com/stmikbandung' target='_blank' rel='noopener noreferrer'><span>8,700 Followers</span></a>
        </div>
        <div className='socBox'>
          <i className='fab fa-instagram'></i>
          <a href='https://www.instagram.com/stmikbandung/?hl=id' target='_blank' rel='noopener noreferrer'><span>22,700 Followers</span></a>
        </div>
        <div className='socBox'>
          <i className='fab fa-youtube'></i>
          <a href='https://www.youtube.com/channel/UCquRaRrD-VR2sWhHNHDLV5g' target='_blank' rel='noopener noreferrer'><span>2,700 Subscriber</span></a>
        </div>
      </section>
    </>
  )
}

export default SocialMedia
