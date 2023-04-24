import React from 'react'
import Heroenter from "./heroenter/Heroenter"
import HomeEnter from './mainEnter/home/HomeEnter'

const Entertaiment = () => {
  return (
    <>
    <section className='enteraiment'>
    <div className='container paddingTB'>
      <Heroenter />
      <HomeEnter/>
    </div>
    </section>
  </>
  )
}

export default Entertaiment