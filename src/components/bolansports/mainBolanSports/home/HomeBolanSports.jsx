import React from "react"
import Side from "../../../home/sideContent/side/Side"
import ContentBolanSports from "../contentBolanSports/ContentBolanSports"

const HomeBolanSports = () => {
  return (
    <>
      <main>
        <div className='container'>
          <section className='mainContent'>
          <ContentBolanSports />
          </section>
          <section className='sideContent'>
            <Side />
          </section>
        </div>
      </main>
    </>
  )
}

export default HomeBolanSports
