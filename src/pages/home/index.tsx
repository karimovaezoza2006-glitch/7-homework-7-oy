import Header from "../../components/header"
import HeroSlider from "./HeroSlider"
import Card from "../../pages/home/Card"
import ShopPage from "./ShopPage"
const Home = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <ShopPage />
    
    <Card/>
    </div>
  )
}

export default Home