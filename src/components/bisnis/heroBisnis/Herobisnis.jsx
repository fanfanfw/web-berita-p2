import React, { useState } from "react"
import { herobisnis } from "../../../dummyData"
import "./herobisnis.css"
import Cardbisnis from "./Cardbisnis"

const Herobisnis = () => {
  const [items, setItems] = useState(herobisnis)
  return (
    <>
      <section className='herobisnis'>
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <Cardbisnis key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Herobisnis