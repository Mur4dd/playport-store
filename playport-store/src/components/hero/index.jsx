import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'

export default function AppSlider() {
  return (
    <Swiper
      modules={[EffectCoverflow, Pagination, Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false
      }}
      effect="coverflow"
      grabCursor
      centeredSlides
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
      pagination={{ clickable: true }}
      className="w-full h-[670px] bg-black"
    >
      <SwiperSlide><img src="https://blog.playstation.com/tachyon/2024/09/16554ba2a0ada3fc7c2f05187300c4a3fb1966f1.jpg?resize=1088%2C612&crop_strategy=smart" className='w-full h-full object-cover' /></SwiperSlide>
      <SwiperSlide><img src="https://cdn0.techbang.com/system/excerpt_images/109082/original/a58f356e15ccb0b5cbdbf26611aee76f.jpg?1692876040" className='w-full h-full object-cover' /></SwiperSlide>
      <SwiperSlide><img src="https://www.arabnews.jp/en/wp-content/uploads/sites/2/2020/05/shutterstock_623107235-1024x683.jpg" className='w-full h-full object-cover' /></SwiperSlide>
    </Swiper>
  )
}
