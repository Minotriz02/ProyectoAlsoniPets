import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Comments from './components/comments/Comments';
import Product from './components/product/Product';
import FoodPart from './components/foodpart/FoodPart';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header text="El mejor alimento para tu perro esta aquí" alter="No descuides el alimento de tu perro"></Header>
      <Product> </Product>
      <FoodPart></FoodPart>
      
      <Comments></Comments>
      <Footer></Footer>
    </div>
  );
}

export default App;
