import logo from './logo.svg';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

//Components
import { Header } from './components/layout/Header'
import { Content } from './components/layout/Content'
import { Footer } from './components/layout/Footer'
import { MainSlider } from './components/pages/home/slider/MainSlider'
import { Categories } from './components/pages/home/Categories'
import { FeaturedProducts } from './components/pages/home/FeaturedProducts'
import { Title } from './components/common/Title_Styled'

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      < Header />
      <Content Content id="main-home" className="">
        <MainSlider />
        <Categories />
        <FeaturedProducts />
      </Content>
      < Footer />
    </div>
  );
}

export default App;
