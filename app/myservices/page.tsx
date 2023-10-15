import { Cards } from '@/components/Cards'
import { PageWrapper, PageWrapperNav, PageWrapperText } from '@/components/PageMotion'
import SocialIcons from '@/components/SocialIcons'
import React from 'react'

export default function Services() {
 
    return (
        <>
            <section className='flex px-32 w-full  h-[calc(100vh-50px)] dfc '>
                <div
                    className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <PageWrapper>
                    <div className="social fixed-nav mt-16">
                        <SocialIcons />
                    </div>

                </PageWrapper>

                <div className="flex py-32 w-full flex-wrap justify-between px-8 gap-3 items-center">

                    <div
                        className="fixed inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)]  aspect-[1155/678] w-[40.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-500 to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="texts w-full ml-4 ">
                        <PageWrapperNav>
                            <h1 className='font-bold text-6xl text-center'>My services</h1>

                        </PageWrapperNav>
                        <PageWrapperText>
                            <p className='mt-10 font-bold text-lg text-center'>My services include:</p>

                        </PageWrapperText>

                        <div className="cards flex flex-wrap gap-5 justify-center w-full">
                            <Cards />
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}