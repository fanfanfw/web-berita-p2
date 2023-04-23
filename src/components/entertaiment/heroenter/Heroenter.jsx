import React, { useState } from "react"
import { heroenter } from "../../../dummyData"
import "./heroenter.css"
import Cardenter from "./Cardenter"

const Heroenter = () => {
  const [items, setItems] = useState(heroenter)

  return (
    <>
      <section className='heroenter'>
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <Cardenter key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Heroenter