import React from "react";
import "./communities.css";
import CustomButton from "@/components/common/CustomButton";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Communities = () => {
  const router = useRouter();

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="h-community">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="mb-4">Our Communities.</h2>
            <p className="mb-5">
              At Love Network we create a comfortable Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Veritatis ducimus nobis
              mollitia quos aliquid, distinctio adipisci rerum sint repellendus
              aspernatur voluptate enim assumenda deserunt est, et minus nulla
              quis tempore distinctio adipisci rerum sint repellendus aspernatur
              voluptate enim assumenda deserunt est, et minus nulla quis
              tempore..
            </p>
            <CustomButton
              type="primary"
              className="btn-bg-white text-black font-bold"
              title="Connect With Our Community"
              onClick={() => router.push("/contact")}
            />
          </div>
          <div className="col-md-6">
            <Slider {...settings}>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  outline: "4px solid #e54626",
                  borderRadius: "5px",
                }}
              >
                <img
                  src="/LNG_img/person-7.jpg"
                  alt="Community 1"
                  className="img-fluid rounded"
                />
              </div>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  outline: " 4px solid #e54626",
                  borderRadius: "5px",
                }}
              >
                <img
                  src="/LNG_img/person-6.jpg"
                  alt="Community 2"
                  className="img-fluid rounded"
                />
              </div>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  outline: " 4px solid #e54626",
                  borderRadius: "5px",
                }}
              >
                <img
                  src="/LNG_img/person-5.jpg"
                  alt="Community 2"
                  className="img-fluid rounded"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communities;
