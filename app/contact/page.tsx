"use client"
import { PageWrapper, PageWrapperNav, PageWrapperText } from '@/components/PageMotion'
import React, { FormEvent } from 'react'

export default function Contact() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
     
        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/submit', {
          method: 'POST',
          body: formData,
        })
     
        // Handle response if necessary
        const data = await response.json()
        // ...
      }
    return (
        <>  
            <div className="div h-[calc(100vh-50px)] py-32   px-32 dfc lofr">
                <PageWrapper>
                    <h1 className='text-5xl text-center text-indigo-600 font-bold'>Connect Me</h1>
                </PageWrapper>
                <PageWrapperText>
                    <form action="/contact"  onSubmit={onSubmit} method="post" className='flex mt-10 gap-10 flex-wrap justify-center '>
                      
                            <div className="flex w-full gap-10">
                                <input type="text" name='firstname' className='w-1/2 h-10 border rounded-md border-indigo-800 pl-3 font-bold' placeholder='First Name' />
                                <input type="email" name='email' className='w-1/2 h-10 border rounded-md border-indigo-800 pl-3 font-bold' placeholder='Your Email' />
                            </div>
                            <textarea name="message" className='w-full h-80 border rounded-md border-indigo-800 pl-3 font-bold pt-2' placeholder='Enter your message here...'></textarea>
                 

                        <button type='submit' className='bg-indigo-500 px-16 py-2 rounded-xl text-white font-bold text-xl'>Send</button>
                    </form>
                </PageWrapperText>
            </div>
        </>
    )
}
