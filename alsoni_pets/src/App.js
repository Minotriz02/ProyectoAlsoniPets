import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Comments from './components/comments/Comments';
import Product from './components/product/Product';
import FoodPart from './components/foodpart/FoodPart';
import Footer from './components/footer/Footer';
import Registro from './components/Registro/Registro';
import useModal from './hooks/useModal';

function App() {

  const [isOpenLogIn, openLogIn, closeLogIn] = useModal(false);
  const [isOpenRegister, openRegister, closeRegister] = useModal(false);

  return (
    <div className="App">
      <Navbar onClickLog={openLogIn} onClickReg={openRegister}></Navbar>
      <Header text="El mejor alimento para tu perro esta aquí" alter="No descuides el alimento de tu perro"></Header>
      <Product> </Product>
      <FoodPart></FoodPart>
      <Comments></Comments>
      <Footer></Footer>
      <Registro isOpen={isOpenRegister} closeModal={closeRegister}></Registro>
    </div>
  );
}

export default App;
