import React from 'react';
import NavBar from './NavBar';
import Hero from '../assets/hero.jpg'
import Services from './Services';
import Footer from './Footer';

const HomePage = () => {
    return (
        <div className="min-h-full bg-gray-100 font-body">
          <div className="h-screen flex flex-col" >
            <NavBar/>

            <div className="relative flex items-center justify-center h-full bg-cover bg-center bg-fixed bg-no-repeat" style={{backgroundImage:`url(${Hero})`}}>

                <h1 className="relative px-2.5 text-white uppercase z-10 text-4xl text-center md:text-6xl">Digital Service Center</h1>
                <div
                    className="z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-40"
                />

                </div>
          </div>

          <Services/>
           <Footer/>

        </div>
    );
};

export default HomePage;