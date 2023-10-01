"use client"

import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { signIn } from 'next-auth/react'

import { useRouter } from 'next/navigation'

const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await signIn('credentials', {
        email, password, redirect: false
      });

      if (res.error) {
        setError('Invalid Credentials')
        return
      }

      router.replace('dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <div className='grid place-items-center h-screen '>
        <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
            <h1 className='text-xl font-bold text-center'>
                Login details</h1>

                <form action="" className='flex flex-col gap-3'>
                    
                    <input type="email" placeholder="Enter your email" className='border-2 border-gray-300 p-2 w-full my-2 rounded-lg' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter your password" className='border-2 border-gray-300 p-2 w-full my-2 rounded-lg' onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Login" className='bg-green-400 text-white p-2 w-full my-2 rounded-lg cursor-pointer' onClick={handleSubmit }/>

                    {error && (
                      <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>{error}
                      </div>
                    )}
                    

                    <Link href={'/register'} className='text-sm mt-3 text-right'>
                        Do not have an account? <span className='underline'>Register</span>
                    </Link>
                </form>
        </div>
    </div>
  )
}

export default LoginForm