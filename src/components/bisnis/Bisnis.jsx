import React from 'react'
import Herobisnis from "./heroBisnis/Herobisnis"
import HomeBisnis from './mainBisnis/home/HomeBisnis'


const Bisnis = () => {
  return (
    <>
    <section className='bisnis'>
    <div className='container paddingTB'>
    <Herobisnis />
    <HomeBisnis />  
    </div>
    </section>
  </>
  )
}

export default Bisnis