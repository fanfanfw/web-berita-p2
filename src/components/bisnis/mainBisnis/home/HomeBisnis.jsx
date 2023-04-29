import React from "react"
import Side from "../../../home/sideContent/side/Side"
import ContentBisnis from "../contentBisnis/ContentBisnis"

const HomeBisnis = () => {
  return (
    <>
      <main>
        <div className='container'>
          <section className='mainContent'>
          <ContentBisnis />
          </section>
          <section className='sideContent'>
            <Side />
          </section>
        </div>
      </main>
    </>
  )
}

export default HomeBisnis
