import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import { homeObjOne } from '../components/InfoSection/Data';
import Search from '../components/Search'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Search toggle={toggle}/>
            <Footer />
        </>
    )
}

export default Home