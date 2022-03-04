import logo from './logo.svg';
import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import { Header } from './components/layout/header'
import { Content } from './components/layout/content'
import { Footer } from './components/layout/footer'
import { Slider } from './components/pages/home/slider'

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      < Header />
      <Content Content id="main-home" className="">
        <Slider />
      </Content>
      < Footer />
    </div>
  );
}

export default App;
