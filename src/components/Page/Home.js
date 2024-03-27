import React from 'react';
import './Home.css';
import Slideshow from './Slideshow'; 
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="app-container">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Home Page</title>
      <link rel="stylesheet" href="App.css" /> 
      <div className="container">
      <h3>  <Link to="/Login"> /تسجيل الدخول</Link></h3>
      <h2>  <Link to="/Singup"> انشاء حساب</Link></h2>

        <div className="right-section">
          <Slideshow /> {/* إضافة مكون السلايدر هنا */}
        </div>
        <div className="text-container">
        <p>منصة للمهتمين بالنباتات للتعرف على النباتات في المنطقة المحلية</p>
          <p>  والتعرف على متطلبات الرعاية الخاصة بها، وتلقي تذكيرات بشأن الري والعناية بالنباتات بشكل عام</p>
        </div>
        <div className="button-container">
          <button className="custom-button"><span> دليل النباتات</span></button>
        </div>
      </div>
    </div>
  );
}

export default App;