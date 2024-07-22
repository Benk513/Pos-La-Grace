import {BrowserRouter , Route, Routes} from 'react-router-dom'

import HomePage from './pages/HomePage';
import Items from './pages/Items';
import CartPage from './pages/CartPage';
import Register from './pages/Register';
 




function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/> } />
          <Route path='/items' element={<Items/> } />
          <Route path='/cart' element={<CartPage/> } />
          <Route path='/register' element={<Register/> } />
       
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
