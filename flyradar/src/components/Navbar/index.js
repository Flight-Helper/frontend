import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav, 
    NavbarContainer,
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn,
    NavBtnLink
} from './NavbarElements';

export const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}> flight helper </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='search'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={0}>Search</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup'>Sign Up</NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavBtnLink to="/signup">Sign In</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}