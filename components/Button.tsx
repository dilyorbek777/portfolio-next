import Link from 'next/link'
import React from 'react'

export default function Button() {
    return (
        <>
            <Link href='/about'>
                <button className='bg-indigo-500 py-2 px-6 btt rounded-lg text-white font-bold text-lg hover:bg-indigo-500/80'>
                    Learn more
                </button>
            </Link>
        </>
    )
}
