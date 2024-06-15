"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./testimonies.css";
import Image from "next/image";

const Testimonies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container h-testimony py-5">
      <h2 className="text-center text-black mb-5">
        What Our Testifiers Have To Say!
      </h2>
      <Slider {...settings}>
        {testimonies.map((testimony, index) => (
          <div key={index} className="px-3">
            <div className="testimony-card">
              <Image
                src={testimony.image}
                alt={`Testimony ${index + 1}`}
                className="testimony-image"
                width={100}
                height={100}
              />
              <div className="testimony-content">
                <p className="testimony-text">{testimony.text}</p>
                <h4 className="testimony-name">{testimony.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const testimonies = [
  {
    name: "John Doe",
    image: "/LNG_img/person-7.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
  },
  {
    name: "Jane Smith",
    image: "/LNG_img/person-6.jpg",
    text: "Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.",
  },
  {
    name: "Mike Johnson",
    image: "/LNG_img/person-5.jpg",
    text: "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui.",
  },
  // Add more testimonies as needed
];

export default Testimonies;
