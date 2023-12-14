import { Route, Routes } from 'react-router-dom';
import AboutUs from '../pages/AboutUs/AboutUs';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import Test from '../pages/Test/Test';


export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/test' element={<Test />} />
        </Routes>
    );
};
