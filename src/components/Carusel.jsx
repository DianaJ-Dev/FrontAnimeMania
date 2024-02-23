import PropTypes from 'prop-types';
import {  useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../components/styles.css';

import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import { AnimeCard } from './AnimeCard';
import { GetAnimeData } from '../helpers/getDataHelper';

export const Carusel = ({anime}) => {
    const [setSwiperRef] = useState(null);

    const {animes} =  GetAnimeData(anime)

  return (
    <>
  
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={40}
        pagination={{
          type: 'fraction',
          clickable: true
        }}
        loop={false}
        scrollbar = {{ draggable:true}}
        navigation={true}
        modules={[Pagination, Navigation, Scrollbar]}
        className="mySwiper"
        breakpoints={{
          120: { slidesPerView: 1 },
          480: { slidesPerView: 1},
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {
          animes.map( (anime)  => (
            <SwiperSlide key={anime.id}> 
            <AnimeCard {...anime} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

Carusel.propTypes = {
  anime: PropTypes.array.isRequired
};
