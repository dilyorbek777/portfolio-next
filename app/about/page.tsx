import { PageWrapper, PageWrapperText } from '@/components/PageMotion'
import SkillsIcons from '@/components/SkillsIcons'
import SocialIcons from '@/components/SocialIcons'
import React from 'react'




export default function About() {
  return (
    <>

      <section className='flex px-32 w-full  h-[calc(100vh-50px)] dfc'>

        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
          <div className="social fixed-nav mt-10">
            <SocialIcons />
          </div>

        </PageWrapper>
        <div className="flex py-32 w-full  justify-between px-8 items-center r-c gap-16">


          <div
            className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
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
          <div className="texts w-1/3 ml-4 txt-r">

            <PageWrapper>
              <h1 className='font-bold text-6xl'>About Me</h1>

            </PageWrapper>

            <PageWrapperText>
              <p className='mt-10 font-bold text-lg df-w'> My full name is <span className='text-indigo-700'> DilyorbekAsfandiyorov.</span> <br />Young  <span className='text-indigo-700'>  FULL STACK DEVELOPER  </span> and <span className='text-indigo-700'>COMPUTER SCIENCE
              </span> with 2 year experience.
                And with one year experience of <span className='text-indigo-700'>online working</span> and <span className='text-indigo-700'>freelancing</span>.
              </p>
              <p className='font-bold text-lg mb-4 df-w '>I participated in 20+ real and large projects. And I worked on 150+ real projects and telegram bots.</p>


            </PageWrapperText>





          </div>
          <div className="texts w-1/2 txt-r">

            <PageWrapper>
              <h1 className='font-bold text-6xl'>My skills</h1>

            </PageWrapper>

            <PageWrapperText>
              <p className='mt-10 font-bold text-lg '>I have expertise in these programming languages:</p>


            </PageWrapperText>
           
              <SkillsIcons/>


          </div>
        </div>

      </section>
    </>
  )
}
