import { useState } from 'react';

export default function VideoGallery({videos}) {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <video
          key={currentVideo.file}
          controls
          className="w-full rounded-lg shadow-lg"
          poster={currentVideo.thumbnail}
        >
          <source src={currentVideo.file} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2 className="text-center text-xl mt-4">{currentVideo.title}</h2>

        <div className="mt-6 overflow-x-auto">
          <div className="flex gap-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-40 cursor-pointer transition-transform duration-200 hover:scale-105 ${
                  video.file === currentVideo.file ? 'ring-2 ring-yellow-500' : ''
                }`}
                onClick={() => setCurrentVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="rounded-md"
                />
                <p className="text-sm mt-1 text-center">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}