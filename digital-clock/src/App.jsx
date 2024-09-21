
import DigitalClock from "./DigitalClock.jsx"
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <DigitalClock />
    </>
  )
}

export default App
