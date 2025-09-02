import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import PageWrapper from '../components/common/PageWrapper'

const Terms = () => {


  return (
    <PageWrapper className='bg-white text-black'>
      <div className='container mx-auto lg:px-12 px-6 py-24'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='terms-content font-[font2] lg:text-6xl text-4xl uppercase mb-12 leading-tight'>
            Terms & Conditions
          </h1>
          
          <div className='terms-content prose prose-lg max-w-none'>
            <div className='bg-gray-100 rounded-2xl p-8 lg:p-12 text-center'>
              <h2 className='font-[font2] text-2xl lg:text-3xl uppercase text-gray-600 mb-6'>
                Content Coming Soon
              </h2>
              <p className='font-[font1] text-lg lg:text-xl text-gray-500 leading-relaxed'>
                Type here
              </p>
              <p className='font-[font1] text-base text-gray-400 mt-8'>
                Our detailed terms and conditions will be available shortly. For immediate questions about our services, please contact us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Terms