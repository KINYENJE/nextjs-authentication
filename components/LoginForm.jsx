import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
  return (
    <div className='grid place-items-center h-screen '>
        <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
            <h1 className='text-xl font-bold text-center'>
                Login details</h1>

                <form action="" className='flex flex-col gap-3'>
                    <input type="text" placeholder="Enter your name" className='border-2 border-gray-300 p-2 w-full my-2 rounded-lg' />
                    <input type="email" placeholder="Enter your email" className='border-2 border-gray-300 p-2 w-full my-2 rounded-lg' />
                    <input type="password" placeholder="Enter your password" className='border-2 border-gray-300 p-2 w-full my-2 rounded-lg' />
                    <input type="submit" value="Login" className='bg-green-400 text-white p-2 w-full my-2 rounded-lg cursor-pointer' />

                    <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>Error Message
                    </div>

                    <Link href={'/register'} className='text-sm mt-3 text-right'>
                        Don't have an account? <span className='underline'>Register</span>
                    </Link>
                </form>
        </div>
    </div>
  )
}

export default LoginForm