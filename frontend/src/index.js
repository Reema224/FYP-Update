import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Start from './Start';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
 
    <Start />
    </BrowserRouter>
 </React.StrictMode>
 </Provider>
 ,
  document.getElementById('root')
)
