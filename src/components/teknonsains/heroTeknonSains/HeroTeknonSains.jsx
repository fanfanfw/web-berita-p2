import React, { useState } from "react"
import { heroteknonsains } from "../../../dummyData"
import "./heroteknonsains.css"
import CardTeknonSains from "./CardTeknonSains"

const HeroTeknonSains = () => {
  const [items, setItems] = useState(heroteknonsains)
  return (
    <>
      <section className='heroteknonsains'>
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <CardTeknonSains key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default HeroTeknonSains