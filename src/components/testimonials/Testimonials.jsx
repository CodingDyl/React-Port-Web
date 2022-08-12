import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'

import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const data = [
  {
    avatar: Avatar1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minima commodi vitae, voluptatum cumque hic facilis maxime doloremque fuga quis distinctio possimus dolorem nemo quasi minus culpa totam vel ducimus?'
  },
  {
    avatar: Avatar2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minima commodi vitae, voluptatum cumque hic facilis maxime doloremque fuga quis distinctio possimus dolorem nemo quasi minus culpa totam vel ducimus?'
  },
  {
    avatar: Avatar3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minima commodi vitae, voluptatum cumque hic facilis maxime doloremque fuga quis distinctio possimus dolorem nemo quasi minus culpa totam vel ducimus?'
  },
  {
    avatar: Avatar4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minima commodi vitae, voluptatum cumque hic facilis maxime doloremque fuga quis distinctio possimus dolorem nemo quasi minus culpa totam vel ducimus?'
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt={name} />
          </div>

          <h5 className='client__name'>{name}</h5>
          <small className="client__review">{review}</small>

        </SwiperSlide>
            );
          })
        }
      </Swiper>
    </section >
  )
}

export default Testimonials