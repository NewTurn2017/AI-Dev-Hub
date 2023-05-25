// components/Sidebar.js
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import ScrollIndicator from './ScrollIndicator' // Import ScrollIndicator

const SidebarStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #222;
  color: #fff;
`

const StyledLink = styled(Link)`
  font-size: 30px;
  margin-bottom: 30px;
  cursor: pointer;
`

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('greeting')

  return (
    <SidebarStyled>
      <StyledLink
        to="greeting"
        smooth={true}
        duration={500}
        spy={true}
        onSetActive={setActiveLink}
        style={{ color: activeLink === 'greeting' ? 'lightblue' : '#fff' }}
      >
        인사
      </StyledLink>
      <StyledLink
        to="logo"
        smooth={true}
        duration={500}
        spy={true}
        onSetActive={setActiveLink}
        style={{ color: activeLink === 'logo' ? 'lightblue' : '#fff' }}
      >
        소개
      </StyledLink>
      {/* add other sections here */}
      <ScrollIndicator />
    </SidebarStyled>
  )
}

export default Sidebar
