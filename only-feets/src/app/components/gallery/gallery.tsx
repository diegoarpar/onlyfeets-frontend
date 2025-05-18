'use client'
import { useState } from 'react';
import styles from "./gallery";
import Image from 'next/image';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className={styles.grid}>
        {images.map((img, index) => (
          <div key={index} className={styles.item} onClick={() => setSelectedImage(img)}>
            <Image src={`./images/${img}`} alt={`photo-${index}`} width={300} height={200} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <img src={`./images/${selectedImage}`} alt="Selected" className={styles.modalImage} />
        </div>
      )}
    </div>
  );
};

export default Gallery;