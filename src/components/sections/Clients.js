import { reactSlider } from "@/src/sliderProps"
import { Swiper, SwiperSlide } from "swiper/react"
import Separator from "../Separator"

const Clients = () => {
  return (
    <section className="clients">
      <Separator type={"down"} />

      <div className="clients-container">
        <h3>My Clients</h3>
        <Swiper
          {...reactSlider.clients}
          className="swiper swiper-clients fadeInUp wow">
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/themeforest-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/photodune-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/graphicriver-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/codecanyon-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/audiojungle-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/activeden-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/3docean-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/themeforest-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/activeden-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/audiojungle-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/graphicriver-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/codecanyon-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
    </section>
  )
}
export default Clients
