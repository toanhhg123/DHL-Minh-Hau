import React from 'react';
import HomeSreen from './Sreens/HomeSreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sevice from './components/service/Sevice';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeSreen />} />
                <Route path="/service" element={<Sevice></Sevice>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
