import bannerImg1 from '../assets/banner1.webp'
import bannerImg2 from '../assets/banner2.png'
import bannerImg3 from '../assets/banner3.jpg'
import bannerImg4 from '../assets/banner4.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../components/SliderCss/style.css';

// import required modules
import { Navigation } from 'swiper/modules';



const Banner = () => {
    return (
        < >
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper rounded-2xl"
                style={{ height: '30rem' }} 
            >
                <SwiperSlide><img src={bannerImg1} alt="Banner 1" className="w-full h-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={bannerImg2} alt="Banner 2" className="w-full h-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={bannerImg3} alt="Banner 3" className="w-full h-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={bannerImg4} alt="Banner 4" className="w-full h-full object-cover" /></SwiperSlide>
            </Swiper>

        </>
    );
};

export default Banner;