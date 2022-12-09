import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from "./Components/DishesComponent/Dishes";
import AllCategories from './Components/Filter/AllCategories';
import logo from "./ravioli.png";

function App() {
  return(
    <div className='App'>
      <div className='blockOne'>
      <h1>Your Italian World  <img src={logo} alt="logo" className="logo"/> </h1>
      <AllCategories/>
      <Cart/>
      </div>
      <div className='blockTwo'>
      <Dishes/>
      </div>
    </div>
  )
}

export default App;
