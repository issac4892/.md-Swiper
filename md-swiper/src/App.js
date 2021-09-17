import { React, Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import styled from '@emotion/styled';
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import './App.css';
import markdownrender from './markdownrender';

class App extends Component {
    render() {
        SwiperCore.use([Navigation, Pagination, Autoplay]);
        /**
        const MarkdownStyle = styled.div`
          font-size: 1em;
          line-height: 2.5rem;
        `;

        const mdText = `
          **hi**
        `;
        const htmltext = marked(mdText)
        **/
        return(
            <div className="App">
              {markdownrender()}
              {/* <Swiper
                      className="project-swiper"
                      spaceBetween={500}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 2500 }}
                >
                  <SwiperSlide></SwiperSlide>
                  <SwiperSlide>Hid</SwiperSlide>
                  <SwiperSlide>Hidd</SwiperSlide>
              </Swiper> */}
              
            </div>
        );
    }
}

export default App;