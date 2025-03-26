import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "swiper/css"; // Swiper 기본 스타일
import "swiper/css/navigation"; // Swiper 네비게이션 스타일
import "swiper/css/pagination"; // Swiper 페이지네이션 스타일

import "./scss/global.scss"


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

