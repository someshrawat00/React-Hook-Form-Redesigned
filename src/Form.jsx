import React from 'react'
import Input from './Input'
import { useForm } from 'react-hook-form'
import Declaration from 'postcss/lib/declaration'

function Form() {

  const {register, handleSubmit} = useForm()

  const signUp = (data) => console.log(data);
  

  return (
    <div className=' z-1 subpixel-antialiased font-sans md:max-w-7xl w-full lg:h-[800px]  h-5/6 flex border '>
        <div className="bg-gray-50 flex flex-col gap-2 items-center  justify-center flex-wrap md:w-1/2 w-full">
           <h1 className='text-3xl font-bold text-gray-700 '>Sign Up</h1>
           <p className='font-medium text-gray-500 text-xl mb-10'> Create a new account</p>
            
            <form onSubmit={handleSubmit(signUp)} className='w-full px-[100px]  flex flex-col gap-5'>
                <Input placeholder = {"username"} {...register("name")}></Input>
                <Input placeholder = {"email"} type = {"email"} {...register("email")}></Input>
                <Input placeholder = {"password"} type = {"password"} {...register("password")}></Input>
                <button type='submit' className='bg-blue-500 py-4 text-white font-medium'>Sign up</button>
            </form>

        </div>
        <div className="md:block hidden flex flex-wrap overflow-hidden w-1/2">
          <img src="./img.jpg" className='w-full h-full' alt="" />
        </div>
    </div>
  )
}

export default Form