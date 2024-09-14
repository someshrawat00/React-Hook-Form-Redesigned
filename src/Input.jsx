import React from 'react'

function Input({
    type = "text",
     placeholder = "",
     ...props
    },
    ref
) {
  return (
    <div className='w-full'>
        <input  type={type} placeholder={placeholder}  className='w-full border font-medium outline-none py-4 px-4 border-grey-500 rounded-sm' ref = {ref} {...props}/>
    </div>
  )
}

export default React.forwardRef(Input)