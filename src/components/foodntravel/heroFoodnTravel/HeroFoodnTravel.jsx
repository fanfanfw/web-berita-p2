import React, { useState } from "react"
import { herofoodntravel } from "../../../dummyData"
import "./herofoodntravel.css"
import CardFoodnTravel from "./CardFoodnTravel"

const HeroFoodnTravel = () => {
  const [items, setItems] = useState(herofoodntravel)
  return (
    <>
      <section className='herofoodntravel'>
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <CardFoodnTravel key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default HeroFoodnTravel