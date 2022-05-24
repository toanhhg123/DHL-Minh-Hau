import React from 'react';
import HomeSreen from './Sreens/HomeSreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sevice from './components/service/Sevice';
import Blog from './components/Blog/Blog';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeSreen />} />
                <Route path="/service" element={<Sevice></Sevice>}></Route>
                <Route path='/blog' element={<Blog/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
