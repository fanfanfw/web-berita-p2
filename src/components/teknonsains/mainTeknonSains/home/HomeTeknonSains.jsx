import React from "react"
import Side from "../../../home/sideContent/side/Side"
import ContentTeknonSains from "../contentTeknonSains/ContentTeknonSains"

const HomeTeknonSains = () => {
  return (
    <>
      <main>
        <div className='container'>
          <section className='mainContent'>
          <ContentTeknonSains />
          </section>
          <section className='sideContent'>
            <Side />
          </section>
        </div>
      </main>
    </>
  )
}

export default HomeTeknonSains
