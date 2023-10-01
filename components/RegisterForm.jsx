"use client";


import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'

const RegisterForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState('')

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name || !email || !password) {
            setError('Please fill all fields')
            return
        }

        try {

            const resUserExists = await fetch('api/userExists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email}),
            });

            const { user } = await resUserExists.json();

            if (user) {
                setError('User already exists');
                return;
            }
            
            const res = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            console.log(res)

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push('/')
            }else {
                console.log('User registraion failed')
            }
            
        } catch (error) {
            console.log("Error during registration", error)
            
        }
    }
    
  return (
    <div className='grid place-items-center h-screen '>
        <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
            <h1 className='text-xl font-bold text-center'>
                Register</h1>

                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your full name" className='border-2 border-gray-300 p-2 w-full my-2 rounded-lg' />
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" className='border-2 border-gray-300 p-2 w-full my-2 rounded-lg' />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" className='border-2 border-gray-300 p-2 w-full my-2 rounded-lg' />
                    <input type="submit" value="Register" className='bg-green-400 text-white p-2 w-full my-2 rounded-lg cursor-pointer' />


                    {error && (
                        <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>{error}
                        </div>
                    )}

                    <Link href={'/'} className='text-sm mt-3 text-right'>
                        Already have an account? <span className='underline'>Login</span>
                    </Link>
                </form>

        </div>
    </div>
  )
}

export default RegisterForm