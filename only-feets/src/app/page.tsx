import Slider from "./components/slider/slider";
import Menu from "./components/menu/menu";
import Gallery from "./features/gallery/gallery";
import TerraAds from "./features/ads/terraAds";

export default function Home() {
  return (
    <div>
    
    <Slider/>
    <Menu/>
    <Gallery/>
    <TerraAds/>
    </div>
  );
}
