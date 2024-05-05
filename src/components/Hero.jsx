import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideo = () => {
    setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  }

  useGSAP(() => {
    gsap.to('.hero-title', { opacity: 1, delay: 1.5 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleVideo)

    //this is special return statement  for event listner cleanup
    return () => {
      window.removeEventListener('resize', handleVideo)
    }

  }, [])

  return (
    <section className='w-full nav-height bg-black relatice'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p className='hero-title'>
          iPhone 15
        </p>
        <div className='md:w-10/12 w-9/12'>
          <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc} >
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>

      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href='#highlights' className='btn'>
          Buy
        </a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero