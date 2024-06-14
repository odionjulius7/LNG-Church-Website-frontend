"use client";

import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Autoplay } from "swiper/core";
// import "swiper/swiper.min.css";
// import "swiper/swiper-bundle.min.css";

// SwiperCore.use([Navigation, Autoplay]);
import "./upcoming.css";
import { Carousel } from "react-bootstrap";

const UpcomingEvent = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated-slide");
        } else {
          entry.target.classList.remove("animated-slide");
        }
      });
    });

    if (textRef1.current) {
      observer.observe(textRef1.current);
    }

    if (textRef2.current) {
      observer.observe(textRef2.current);
    }

    return () => {
      if (textRef1.current) {
        observer.unobserve(textRef1.current);
      }
      if (textRef2.current) {
        observer.unobserve(textRef2.current);
      }
    };
  }, []);

  return (
    <div className="container-fluid h-upcoming">
      <div className="row mb-3">
        <h3>Upcoming Events</h3>
      </div>

      <Carousel slide={true}>
        <Carousel.Item>
          <div className="row mt-4 flex-row justify-content-around">
            <div className="col-sm-12 col-md-5">
              <hr className="h-hr" />
              <div className="pr-5">
                <h2 ref={textRef1}>Mid Year Retreat!</h2>
                <p>
                  Love Network Mid Year Retreat, At the redemption camp, Coming
                  up on the 16th of June 2024. You're cordially invited and you
                  won't regret coming.
                </p>
                <span>16 June, 2024. </span>
              </div>
            </div>

            <div className="col-sm-12 col-md-5">
              <div className=" h-img">
                <img
                  src="/LNG_img/person-4.jpg"
                  alt="mud"
                  className="img-fluid h-100"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row mt-4 flex-row justify-content-around">
            <div className="col-sm-12 col-md-5">
              <hr className="h-hr" />
              <div className="pr-5">
                <h2 ref={textRef1}>Mid Year Hangout!</h2>
                <p>
                  Love Network Mid Year Retreat, At the redemption camp, Coming
                  up on the 16th of June 2024. You're cordially invited and you
                  won't regret coming.
                </p>
                <span>8 June, 2024. </span>
              </div>
            </div>

            <div className="col-sm-12 col-md-5">
              <div className=" h-img">
                <img
                  src="/LNG_img/person-6.jpg"
                  alt="mud"
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row mt-4 flex-row justify-content-around">
            <div className="col-sm-12 col-md-5">
              <hr className="h-hr" />
              <div className="pr-5">
                <h2 ref={textRef1}>Membership Class 3rd Cohort!</h2>
                <p>
                  Love Network Mid Year Retreat, At the redemption camp, Coming
                  up on the 16th of June 2024. You're cordially invited and you
                  won't regret coming.
                </p>
                <span>16 Dec, 2024. </span>
              </div>
            </div>

            <div className="col-sm-12 col-md-5">
              <div className=" h-img">
                <img
                  src="/LNG_img/person-5.jpg"
                  alt="mud"
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default UpcomingEvent;
