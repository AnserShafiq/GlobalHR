import React, { useEffect, useRef } from 'react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/effect-flip'



const SlidesData = [
  {
    img: require('../Images/Home/h1.jpg'),
    name: 'Manufacturing & production'
  },{
    img: require('../Images/Home/h2.jpg'),
    name: 'Warehouse & distribution'
  },{
    img: require('../Images/Home/h3.jpg'),
    name: 'Transportation & logistics'
  },{
    img: require('../Images/Home/h4.jpg'),
    name: 'Administrative & Clerical'
  },{
    img: require('../Images/Home/h5.jpg'),
    name: 'Healthcare & Medical'
  },{
    img: require('../Images/Home/h6.jpg'),
    name: 'Finance & Accounting'
  },{
    img: require('../Images/Home/h6.jpg'),
    name: 'Call center & customer service'
  },{
    img: require('../Images/Home/h6.jpg'),
    name: 'Hospitality & Tourism'
  },{
    img: require('../Images/Home/h6.jpg'),
    name: 'Retail & Sales'
  },{
    img: require('../Images/Home/h6.jpg'),
    name: 'Engineering & Technical'
  },{
    img: require('../Images/Home/h6.jpg'),
    name: 'Information Technology'
  },{
    img: require('../Images/Home/h6.jpg'),
    name: 'HR & Recruitment '
  },
]


const IndustriesSlide = () => {

  const swiperRef =  useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      if(swiperRef.current && swiperRef.current.autoplay){
        swiperRef.current.autoplay.stop();
      }
    }

    const handleMouseLeave = () => {
      if(swiperRef.current && swiperRef.current.autoplay){
        swiperRef.current.autoplay.start();
      }
    }

    const swiperContainer = swiperRef.current && swiperRef.current.el;
    if(swiperContainer){
      swiperContainer.addEventListener('mouseenter', handleMouseEnter);
      swiperContainer.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        swiperContainer.removeEventListener('mouseenter', handleMouseEnter);
        swiperContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    }

  },[])

  return (
    <div className='flex justify-center py-10'>
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'3'}
      autoplay={{delay:4000, disableOnIteration: true}}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={ { dynamicBullets: true, clickable:true}}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      className='px-10'
      loop={true}
      
      >
        {SlidesData.map((Slide, index) =>(
          <SwiperSlide key={index}>
            <div className='flex flex-col w-full h-[380px]'>
              <img className='h-full w-full object-cover ' src={Slide.img} alt={`${Slide.name}`}/>
              <div className='absolute flex flex-col items-center justify-end pb-[8%] top-0 left-0 h-full w-full content-0 bg-gradient-to-t from-10% from-[#0000007f] to-40% to-transparent '>
                <h5 className='text-[1.3rem] font-[500] text-slate-50'>{Slide.name}</h5>
              </div>
            </div>
          </SwiperSlide>
        ) )}
      </Swiper>
    </div>
  )
}

export default IndustriesSlide