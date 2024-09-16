import React from 'react'
import Input from './Input'
import { useForm } from 'react-hook-form'
import Declaration from 'postcss/lib/declaration'

function Form() {

  const {register, handleSubmit} = useForm()

  const signUp = (data) => console.log(data);
  

  return (
      <div className="max-w-[440px] bg-[rgba(255,255,255,.5)] backdrop-blur-2xl rounded-[8%] p-11 flex flex-col justify-between items-center">
        <div className="flex w-full justify-between mb-12 items-center">
           <h1 className='text-lg font-light text-gray-700'>Cannabis Lab</h1>
           <h1 className='text-lg cursor-pointer'>Sign up</h1>
        </div>
        <form className="" onSubmit={handleSubmit(signUp)}>
          <div className="flex w-full justify-between mb-8 items-center">
            <h1 className='text-2xl font-medium'>Log In</h1>
            <div className="px-4 py-2 rounded-full border border-gray-500 text-xs cursor-pointer">Facebook</div>
          </div>
          <div className="mb-6">
            <Input placeholder = "e-mail address" type= "email" {...register("email")}/>
          </div>
          <div className="mb-10">
            <Input placeholder = "password" type = "password" btntext = "I&nbsp;forgot" btn = "true" {...register("password")}/>
          </div>
          <div className="flex justify-between mb-10">
            <p className='text-xs text-gray-800 w-9/12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae error porro delectus qui</p>
            <button type='submit' className="p-3 bg-black text-white rounded-full cursor-pointer">Go</button>
          </div>
        </form>
        <div className="">Please consume responsibly!</div>
      </div>
  )
}

export default Form