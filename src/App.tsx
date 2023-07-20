import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import Header from './components/Header/Header';

function App() {
  
  return (
    <>
      {/* <Popup /> */}
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/month-statistics' element={<MonthStatistics />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
