import React from "react"
import Side from "../../../home/sideContent/side/Side"
import ContentFoodnTravel from "../contentFoodnTravel/ContentFoodnTravel"

const HomeFoodnTravel = () => {
  return (
    <>
      <main>
        <div className='container'>
          <section className='mainContent'>
          <ContentFoodnTravel />
          </section>
          <section className='sideContent'>
            <Side />
          </section>
        </div>
      </main>
    </>
  )
}

export default HomeFoodnTravel
