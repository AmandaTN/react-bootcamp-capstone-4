import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import { useState } from "react";

//Components
import {AppStyled} from './AppStyled'

import Header from './components/layout/Header'
import Content from './components/layout/Content'
import Footer from './components/layout/Footer'
import MainSlider from './components/pages/home/MainSlider'
import Categories from './components/pages/home/Categories'
import FeaturedProducts from './components/pages/home/FeaturedProducts'

import ProductsPage from './components/pages/products-list/ProductsPage';

function App() {
  // const { data: {results}, isLoading } = useFeaturedBanners();
  // console.log(results, isLoading);

  const [activePage, setActivePage] = useState('home');

  const activeHome = () => {
    setActivePage('home')
  }

  const activeProducts = () => setActivePage('products')

  return (
    <AppStyled className="App">
      < Header activeHome={activeHome} />
      {activePage === 'home' ? <Content id="main-home">
        <MainSlider />
        <Categories />
        <FeaturedProducts activeProducts={activeProducts} />
      </Content>
      :
      <Content id="products-list">
        <ProductsPage />
      </ Content>}
      < Footer />
    </AppStyled>
  );
}

export default App;
