import { useState } from 'react';
import "./css.css";
import Image from 'next/image';

const Gallery = ({ images}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className={`grid`}>
        {images.map((img, index) => (
          <div key={index} className={`item`} onClick={() => setSelectedImage(img)}>
            <Image src={`/images/${img}`} alt={`photo-${index}`} width={300} height={200} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={`modal`} onClick={() => setSelectedImage(null)}>
          <img src={`/images/${selectedImage}`} alt="Selected" className={`modalImage`} />
        </div>
      )}
    </div>
  );
};

export default Gallery;