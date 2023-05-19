import React from 'react'
import { useEffect, useState } from 'react'

const Backtotop = () => {
  const [backtotop, setBacktotop] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setBacktotop(true)
      }else {
        setBacktotop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='container'>
      {backtotop && (
        <button 
          className='flex items-center justify-center pt-1 fixed bottom-[30px] right-[30px] h-[30px] w-[30px] rounded text-[25px] font-thin text-white bg-green-700'
          onClick={scrollUp}
        >^</button>
      )}
    </div>
  )
}

export default Backtotop