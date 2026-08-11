import React from 'react'
import paghmanNet from "../../assets/images/PaghmanNet.svg"

const CargoNetworkSVG = () => {
  return (
    <section>
        <div className="svg-ctr relative">
            <img src={paghmanNet} alt="Paghman network img" />
            <div className=' absolute w-full h-full inset-0 dark:bg-black/30'></div>
        </div>
    </section>
  )
}

export default CargoNetworkSVG
