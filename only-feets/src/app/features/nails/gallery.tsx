'use client'
import Head from 'next/head';
import Gallery from '../../components/gallery/gallery';

export default function GalleryFeature() {
  const imageList = []; // Initialize an empty array
  for (let i = 1; i <= 21; i++) {
    imageList.push("/images/nails/nails" + i + ".jpg"); // Process and add to the array
  }
  return (
    <div>
      <Head>
        <title>Only Feets</title>
      </Head>
      <main>
        <Gallery images={imageList} />
      </main>
    </div>
  );
}