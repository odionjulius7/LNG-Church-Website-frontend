"use client";

import React, { useEffect, useRef } from "react";
import "./upcoming.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

const UpcomingEvent = () => {
  // ... (keep the existing code for refs and useEffect)
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

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

    const refs = [textRef1.current, textRef2.current, textRef3.current];

    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
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
                  up on the 16th of June 2024. You&apos;re cordially invited and
                  you won&apos;t regret coming.
                </p>
                <span>16 June, 2024. </span>
              </div>
            </div>

            <div className="col-sm-12 col-md-5">
              <div
                className="h-img"
                style={{ position: "relative", width: "100%", height: "300px" }}
              >
                <Image
                  src="/LNG_img/person-4.jpg"
                  alt="Mid Year Retreat"
                  layout="fill"
                  objectFit="cover"
                  // width={100} // Set a default width
                  // height={100} // Set a default height
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
                <h2 ref={textRef2}>Mid Year Hangout!</h2>
                <p>
                  Love Network Mid Year Retreat, At the redemption camp, Coming
                  up on the 16th of June 2024. You&apos;re cordially invited and
                  you won&apos;t regret coming.
                </p>
                <span>8 June, 2024. </span>
              </div>
            </div>

            <div className="col-sm-12 col-md-5">
              <div
                className="h-img"
                style={{ position: "relative", width: "100%", height: "300px" }}
              >
                <Image
                  src="/LNG_img/person-6.jpg"
                  alt="Mid Year Hangout"
                  layout="fill"
                  objectFit="cover"
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
                  up on the 16th of June 2024. You&apos;re cordially invited and
                  you won&apos;t regret coming.
                </p>
                <span>16 Dec, 2024. </span>
              </div>
            </div>

            <div className="col-sm-12 col-md-5">
              <div
                className="h-img"
                style={{ position: "relative", width: "100%", height: "300px" }}
              >
                <Image
                  src="/LNG_img/person-5.jpg"
                  alt="Membership Class 3rd Cohort"
                  layout="fill"
                  objectFit="cover"
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
