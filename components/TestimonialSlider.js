import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { RiChatQuoteLine } from 'react-icons/ri';
const TestimonialSlider = () => {
  return (
    <section className='py-10 py-lg-11 bg-light'>
      <div className='container'>
        <div className='row mb-5 align-items-center'>
          <div className='col-lg-8 mx-auto text-center'>
            <div>
              <h2 className='display-5 mb-0'>My Clients Reviews</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-10 mx-auto'>
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className='mySwiper'
            >
              <SwiperSlide>
                <div className='bg-light text-center'>
                  <span className='quote fs-1 text-link d-inline-flex mb-4'>
                    <RiChatQuoteLine />
                  </span>
                  <p className='lead px-10'>
                    Super keen. Hard working, fast, flexible, neat code - Monir
                    was a pleasure to work and collaborate with on the project.
                    Thanks very much.
                  </p>
                  <h6 className='mb-0'>Susan Smith</h6>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='bg-light text-center'>
                  <div className='fs-1 text-link d-inline-flex mb-4'>
                    <RiChatQuoteLine />
                  </div>
                  <p className='lead px-10'>
                    Monir was absolutely a great help. He delivered a fully
                    working website with PHP and database in just half a day. 5
                    star service!
                  </p>
                  <h6 className='mb-0'>Anna Johnson</h6>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
