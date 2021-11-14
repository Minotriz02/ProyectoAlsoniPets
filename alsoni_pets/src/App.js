import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Comments from './components/comments/Comments';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header text="El mejor alimento para tu perro esta aquí" alter="No descuides el alimento de tu perro"></Header>
      <Comments></Comments>
    </div>
  );
}

export default App;
