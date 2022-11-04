import React from 'react'
import {FooterContainer, NavbarLinkContainer, NavbarLink} from '../Style'

const Footer = () => {
  return (
    <div>
        <FooterContainer >
          <p className='text'>copyright 2022 Peculiar Richard</p>
          <NavbarLinkContainer>
            <NavbarLink to="/">home</NavbarLink>
            <NavbarLink to="/portfolio">portfolio</NavbarLink>
            <NavbarLink to="/about">about</NavbarLink>
            <NavbarLink to="/blog">blog</NavbarLink>
            <NavbarLink to="/contact">contact</NavbarLink>
          </NavbarLinkContainer>
        </FooterContainer>
    </div>
  )
}

export default Footer