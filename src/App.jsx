import { useState } from 'react'
import Form from './Form'


function App() {

  return (
    <div className='w-full h-screen flex items-center justify-center bg-hero-image bg-cover backdrop-blur-lg'>
        <div className="absolute w-full h-full overflow-hidden z-[-1] backdrop-blur-lg"></div>
        <Form />
    </div>
  )
}

export default App
