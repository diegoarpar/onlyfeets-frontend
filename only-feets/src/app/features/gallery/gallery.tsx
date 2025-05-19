'use client'
import Head from 'next/head';
import Gallery from '../../components/gallery/gallery';

export default function Home() {
  const imageList = []; // Initialize an empty array
  for (let i = 1; i <= 7; i++) {
    imageList.push("feets" + i + ".jpg"); // Process and add to the array
  }
  return (
    <div>
      <Head>
        <title>Only Feets</title>
      </Head>
      <main>
        <h1 style={{ textAlign: 'center' }}>My Photo Gallery</h1>
        <Gallery images={imageList} />
      </main>
    </div>
  );
}