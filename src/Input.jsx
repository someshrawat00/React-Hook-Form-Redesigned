import React from 'react'

function Input({
  type = "text",
  btn = "",
  btntext = "",
  placeholder = "",
  ...props
},
  ref
) {
  return (
    <div className='w-full flex rounded-full box-border font-medium h-fit justify-between items-center bg-[rgba(255,255,255,.3)] p-2 border-grey-500'>
      <div className="flex">
        <div className="w-[40px] h-[40px] rounded-full bg-white bg-[rgba(255,255,255,.5)]"></div>
        <input type={type} placeholder={placeholder} className='outline-none focus:bg-none w-10/12 border-none bg-transparent px-4 placeholder:text-gray-700' ref={ref} {...props} />
      </div>
      {btn && <div className="rounded-full flex cursor-pointer w-max justify-center items-center px-4 h-[35px] bg-white text-xs">{btntext}</div>}
    </div>
  )
}

export default React.forwardRef(Input)