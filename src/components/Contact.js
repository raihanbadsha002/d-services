import React from 'react';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Contact = () => {
    return (
        <main className="antialiased bg-gray-900">
            <div className="flex w-full min-h-full justify-center items-center">
                <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-gray-900 max-w-4xl p-8 text-white sm:p-12">
                 <div className="flex flex-col space-y-2 justify-evenly">
                    <div className="">
                        <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
                        <p className="pt-2 text-purple-50 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere quo ut omnis nostrum doloremque officia. Minima earum repellendus magnam?</p>
                    </div>
                 <div className="flex flex-col space-y-6">
                    <div className="inline-flex space-x-2 items-center">
                       <CallIcon/>
                       <span>+8801303591342</span>
                    </div>
                    <div className="inline-flex space-x-2 items-center">
                       <MailOutlineIcon/>
                       <span>contact@xyzwebsite.com</span>
                    </div>
                    <div className="inline-flex space-x-2 items-center">
                       <LocationOnIcon/>
                       <span>11, Street 342, Abcd xyz.</span>
                    </div>
                 </div>
                 <div className="flex space-x-4 text-lg">
                    <a href="#"><FacebookIcon/></a>
                    <a href="#"><TwitterIcon/></a>
                    <a href="#"><LinkedInIcon/></a>
                    <a href="#"><InstagramIcon/></a>
                 </div>
             </div>
                 <div className="">
                     <div className="bg-white rounded-xl shadow-lg p-8 text-gray-700 md:w-80">
                         <form action="" className="flex flex-col">
                             <div>
                                 <label htmlFor="" className="text-sm">Your Name</label>
                                 <input type="text" placeholder="Your name" className="ring-1 my-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                             </div>
                             <div>
                                 <label htmlFor="" className="text-sm">Email Address</label>
                                 <input type="email" placeholder="Your Email" className="ring-1 my-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                             </div>
                             <div>
                                 <label htmlFor="" className="text-sm">Message</label>
                                 <textarea name="" placeholder="Message" className="ring-1 my-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" id="" cols="30" rows="5">

                                 </textarea>
        
                             </div>

                             <button className="inline-block self-end bg-black text-white font-bold rounded-lg py-2 px-5 uppercase text-sm">Send Message</button>
                         </form>
                     </div>
                 </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;