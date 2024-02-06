import React from "react";
import VideoCarousel from "./components/VideoCarousel";

const App = () => {
  const videos = [
    "https://player.vimeo.com/video/824804225",
    "https://player.vimeo.com/video/824804225",
    "https://player.vimeo.com/video/824804225",
    "https://player.vimeo.com/video/824804225",
    "https://player.vimeo.com/video/824804225",
    "https://player.vimeo.com/video/824804225",
    "https://player.vimeo.com/video/824804225",
    "https://player.vimeo.com/video/824804225",
  ];

  return (
    <div className="p-10 bg-stone-200 h-screen text-center">
      <h1 className="text-3xl  mb-3">Video Slider</h1>
      <VideoCarousel videos={videos} />
    </div>
  );
};

export default App;
