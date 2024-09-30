import Header from "./components/Header"
import Footer from "./components/Footer"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Hero from './components/Hero';
import About from './components/About';
import Count from './components/Count';
import WhyUs from './components/WhyUs';
import Courses from './components/Courses';
import Trainers from './components/Trainers';


function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="App">
            <div className="index-page">

                <Header />

                <main className="main">

                    <Hero />

                    <About />

                    <Count />

                    <WhyUs />

                <Courses />

                    <Trainers />

                </main>

                <Footer />

            </div>
        </div>
    );
}

export default App;
