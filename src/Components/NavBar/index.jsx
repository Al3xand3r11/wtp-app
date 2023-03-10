import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
    Nav,
    NavBarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
  } from "./NavBar-Styled";

  const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
  
    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", changeNav);
    }, []);
  
    const toggleHome = () => {
      scroll.scrollToTop();
    };
  
    return (
      <>
        <Nav scrollNav={scrollNav}>
          <NavBarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              What's The Play
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="Projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Content
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Resume"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {" "}
                  Members
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="About"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {" "}
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
  
            <NavBtn>
              
                <NavBtnLink>Links</NavBtnLink>
            </NavBtn>
          </NavBarContainer>
        </Nav>
      </>
    );
  };
  
  export default NavBar;