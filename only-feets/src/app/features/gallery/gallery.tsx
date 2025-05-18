import Head from 'next/head';
import Gallery from '../../components/gallery/gallery';

export default function Home() {
  const imageList = ['file.svg', 'globe.svg', 'next.svg']; // add your filenames here

  return (
    <div>
      <Head>
        <title>Photo Gallery</title>
      </Head>
      <main>
        <h1 style={{ textAlign: 'center' }}>My Photo Gallery</h1>
        <Gallery images={imageList} />
      </main>
    </div>
  );
}