import s from './reviews.module.css'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper'

SwiperCore.use([Navigation])







export const Reviews = ({title, reviews}) => {

  return (
    <div className={s.container}>
      <h2 className={classNames('title', s.title)}>{title}</h2>
      <Swiper
        spaceBetween={48}
        slidesPerView={2}
        navigation
        watchSlidesProgress
      >
        {reviews.map((e) => {
            return(
                <SwiperSlide className={s.card} key={e._id}>
                  <div className={s.avatar}  style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/' + e.avatar})`}}/>
                  <div className={s.content}>
                    <h3 className={classNames(s.name)}>{e.name}</h3>
                    <p className={classNames(s.review, 'text')}>{e.review}</p>
                  </div>
                </SwiperSlide>
            )
          })}
        </Swiper>
    
    </div>
  )
}