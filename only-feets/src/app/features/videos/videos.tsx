'use client'
import VideoGallery from "../../components/video/video";

export default function Menu() {
    const videos = [
      {
        title: 'Video 1',
        file: '/videos/feets1.mp4',
        thumbnail: '/thumbnails/nature.jpg',
      },
      {
        title: 'Video 2',
        file: '/videos/feets1.mp4',
        thumbnail: '/thumbnails/city.jpg',
      },
      {
        title: 'Video 3',
        file: '/videos/feets1.mp4',
        thumbnail: '/thumbnails/beach.jpg',
      },
    ];
    return (
      <VideoGallery videos={videos}></VideoGallery>
    )
  }