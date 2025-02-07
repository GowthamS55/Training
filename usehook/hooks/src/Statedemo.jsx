import React from 'react'
import { useState } from 'react'

const Statedemo = () => {
    const [count, setCount] = useState(0)

  return (
    <div>
      <h1>USE-STATE</h1>
      {/* <h2>Count : {count}</h2>
      <button>add</button> */}
      <h2>Count:{count}</h2>
      <button onClick={()=> setCount((pre)=> pre +1)}>Add</button>
      <button onClick={()=> setCount((pre)=> pre -1)}>Sub</button>
      <button onClick={()=> setCount(0)}>clear</button>

    </div>
  )
}

export default Statedemo
