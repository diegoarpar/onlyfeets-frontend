import Slider from "./components/slider/slider";
import MenuBar from "./components/menu/menubar";
import Gallery from "./features/gallery/gallery";
import TerraAds from "./features/ads/terraAds";

export default function Home() {
  return (
    <div>
    
    <Slider/>
    <MenuBar/>
    <Gallery/>
    <TerraAds/>
    </div>
  );
}
