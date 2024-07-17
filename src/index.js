import React from 'react';
import ReactDOM from 'react-dom/client';
//import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
 
import { Provider } from 'react-redux';
import { createStore , combineReducers} from 'redux';
import { rootReducer } from './redux/rootReducer';
 

const finalReducer = combineReducers({
  rootReducer:rootReducer
})

const initialState = {
  rootReducer: {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :[]

  }
}

const store = createStore(finalReducer,initialState)

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/items',
//     element: <Items/>
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <RouterProvider router={router} /> */}
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
