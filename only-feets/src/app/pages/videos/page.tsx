import VideoGallery from "../../features/videos/videos";
import Menu from "../../features/menu/menu";
import TerraAds from "../../features/ads/terraAds";

export default function Home() {
  return (
    <div>
      <Menu/>
    <VideoGallery></VideoGallery>
    
    <TerraAds/>
    </div>
  );
}
