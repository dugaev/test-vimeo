import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video from "../video.png";
import "../index.css";

const VideoCarousel = ({ videos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const openModal = (videoUrl, index) => {
    setCurrentVideoIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Slider {...settings}>
        {videos.map((videoUrl, index) => (
          <div key={index} onClick={() => openModal(videoUrl, index)}>
            <img src={video} alt={`video-${index}`} />
          </div>
        ))}
      </Slider>
      <Modal
        className="fixed bg-black/70 right-0 top-0 left-0 bottom-0"
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
      >
        <div className="video-container">
          <iframe
            title="video"
            src={videos[currentVideoIndex]}
            width="100%"
            height="700px"
            className="mt-3"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
        <div className="pagination">
          {videos.map((video, index) => (
            <button
              key={index}
              className={`pagination-dot ${
                index === currentVideoIndex ? "active" : ""
              }`}
              onClick={() => setCurrentVideoIndex(index)}
            />
          ))}
        </div>
        <button
          onClick={closeModal}
          className="absolute top-3 right-20 text-[30px] text-white"
        >
          X
        </button>
      </Modal>
    </div>
  );
};

export default VideoCarousel;
