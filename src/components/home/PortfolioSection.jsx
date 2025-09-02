import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

const PortfolioSection = () => {
  const sectionRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.fromTo('.portfolio-title',
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.portfolio-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo('.portfolio-preview',
      {
        opacity: 0,
        scale: 0.95,
        y: 30
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.4
        },
        scrollTrigger: {
          trigger: '.portfolio-grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  const portfolioPreviews = [
    { videoId: 'dQw4w9WgXcQ', title: 'Romantic Garden Wedding' },
    { videoId: 'jNQXAC9IVRw', title: 'Elegant Château Ceremony' },
    { videoId: 'M7lc1UVf-VE', title: 'Intimate Beach Wedding' },
    { videoId: 'ZZ5LpwO-An4', title: 'Modern City Wedding' }
  ]

  return (
    <section id="portfolio" ref={sectionRef} className='min-h-screen bg-gray-50 text-black relative z-30'>
      <div className='container mx-auto lg:px-12 px-6 lg:py-24 py-16'>
        <div className='text-center mb-16'>
          <h2 className='portfolio-title font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight'>
            Our Portfolio
          </h2>
          <p className='font-[font1] lg:text-xl text-lg lg:max-w-3xl max-w-xl mx-auto leading-relaxed text-gray-700'>
            Discover our most recent creations and let yourself be inspired by our unique approach to wedding videography.
          </p>
        </div>

        <div className='portfolio-grid grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 mb-12'>
          {portfolioPreviews.map((item, index) => (
            <div key={index} className='portfolio-preview group relative aspect-video rounded-2xl overflow-hidden bg-black shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105'>
              <iframe
                className='absolute top-0 left-0 w-full h-full'
                src={`https://www.youtube.com/embed/${item.videoId}?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0`}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection