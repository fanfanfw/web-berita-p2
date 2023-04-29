import React from "react"
import Side from "../../../home/sideContent/side/Side"
import ContentEnter from "../contentEnter/ContentEnter"

const HomeEnter = () => {
  return (
    <>
      <main>
        <div className='container'>
          <section className='mainContent'>
          <ContentEnter />
          </section>
          <section className='sideContent'>
            <Side />
          </section>
        </div>
      </main>
    </>
  )
}

export default HomeEnter
