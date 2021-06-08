import React from 'react';
import s1 from '../assets/s01.jpg';
import s2 from '../assets/s02.jpg';
import s3 from '../assets/s03.png';

const Services = () => {
    return (
        <div className="flex flex-row flex-wrap py-14 justify-center">
            <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
            <div className="bg-white p-3">
                <div className="">
                    <img src={s1} className="w-full" alt="web design" />
                </div>
                <div className="">
                    <h2 className="font-bold text-xl py-1.5">Web Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio deleniti, unde eum maiores sint voluptate!</p>
                </div>
            </div>
            </div>
            <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
                 <div className="bg-white p-3">
                <div className="">
                    <img src={s2} className="w-full" alt="web Development" />
                </div>
                <div className="">
                    <h2 className="font-bold text-xl py-1.5">Web Development</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio deleniti, unde eum maiores sint voluptate!</p>
                </div>
                </div>
            </div>
            <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
                 <div className="bg-white p-3">
                <div className="">
                    <img src={s3} className="w-full" alt="Graphic design" />
                </div>
                <div className="">
                    <h2 className="font-bold text-xl py-1.5">Graphic Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio deleniti, unde eum maiores sint voluptate!</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Services;