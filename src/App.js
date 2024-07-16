import {BrowserRouter , Route, Routes} from 'react-router-dom'

import HomePage from './pages/HomePage';
import Items from './pages/Items';
 




function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/> } />
          <Route path='/items' element={<Items/> } />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
