import './App.css';
import image from './packeg.webp'
import imageTwo from './deliveryman.webp'
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="app">
      <div className="container">
      <img src={image} width="250px" alt="shoper"/>
      </div>
      <div className="container">
      <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      <div className="container">
      <img src={imageTwo} width="250px" alt="deliveryman"/>
      </div>
    </div>
  );
}

export default App;
