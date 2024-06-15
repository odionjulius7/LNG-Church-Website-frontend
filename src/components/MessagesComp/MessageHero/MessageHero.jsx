"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./message-hero.css";

const MessageHero = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Replace these with your actual YouTube video IDs
  const videoIds = [
    { id: "n39zvuV-7gA", category: "Sunday Sermon" },
    { id: "c2XEhqRaLpQ", category: "Sunday Sermon" },
    { id: "7u0tYKKSy7c", category: "Midweek Service" },
    // Add more videos with their respective categories
  ];

  const filteredVideos =
    selectedCategory === "All"
      ? videoIds
      : videoIds.filter((video) => video.category === selectedCategory);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <>
      <div className="message-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Our Church</h1>
            <p>
              Experience the word of God through our sermons and messages. Join
              us for worship and find inspiration in our teachings.
            </p>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="sidebar">
                <div className="category-buttons">
                  <button
                    className={selectedCategory === "All" ? "active" : ""}
                    onClick={() => setSelectedCategory("All")}
                  >
                    All
                  </button>
                  <button
                    className={
                      selectedCategory === "Sunday Sermon" ? "active" : ""
                    }
                    onClick={() => setSelectedCategory("Sunday Sermon")}
                  >
                    Sunday Sermon
                  </button>
                  <button
                    className={
                      selectedCategory === "Midweek Service" ? "active" : ""
                    }
                    onClick={() => setSelectedCategory("Midweek Service")}
                  >
                    Midweek Service
                  </button>
                  {/* Add more categories as needed */}
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="video-gallery d-flex justify-content-start">
                {filteredVideos.map((video) => (
                  <div
                    className="video-container"
                    key={video.id}
                    onClick={() => handleVideoClick(video)}
                  >
                    <div className="image-container">
                      <Image
                        src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                        alt={`Thumbnail for ${video.category}`}
                        className="video-thumbnail"
                        width={100}
                        height={80}
                      />
                      <div className="video-overlay">
                        <span>&#9658;</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && selectedVideo && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close bg-danger" onClick={closeModal}>
              &times;
            </button>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageHero;
