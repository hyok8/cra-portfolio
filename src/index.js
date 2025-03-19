import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/layout.scss'

//layout
import Header from './layout/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header></Header>
    <div>폰트 적용 되었나요?</div>
    <div className='font_bold'>강조 폰트</div>
    <div className='d-flex flex-column'>부트스트랩?
      <ul className='d-flex'>
        <li>우</li>
        <li>아</li>
        <li>우</li>
      </ul>
    </div>
  </BrowserRouter>
);

