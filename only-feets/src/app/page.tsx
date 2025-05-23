import Slider from "./components/slider/slider";
import Menu from "./features/menu/menu";
import GalleryFeature from "./features/gallery/gallery";
import TerraAds from "./features/ads/terraAds";

export default function Home() {
  return (
    <div>
    
    <Slider/>
    <Menu/>
    <GalleryFeature/>
    <TerraAds/>
    </div>
  );
}
