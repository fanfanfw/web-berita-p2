import React, { useState } from "react"
import { herobolansports } from "../../../dummyData"
import "./herobolansports.css"
import CardBolanSports from "./CardBolanSports"

const HeroBolanSports = () => {
  const [items, setItems] = useState(herobolansports)
  return (
    <>
      <section className='herobolansports'>
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <CardBolanSports key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default HeroBolanSports