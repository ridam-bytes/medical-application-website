import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Toaster } from "react-hot-toast";
import ContactForm from './ContactForm';
import Carousel from './Carousel';
import Carousel2 from '../Carousel2';

const Layout = ({children}) =>{
    return (
        <div>
            <Header/>
            {/* <main style={{ minHeight: "75vh" }}>
                <Toaster />
                {children}
            </main> */}
            {/* <Carousel/>
             */}
            <Carousel2/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default Layout;