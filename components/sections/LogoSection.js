// components/sections/LogoSection.js
import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
  height: 100vh; // Add this line to make section take up the full viewport height
`

const Logo = styled.img`
  width: 400px;
  height: 400px;
`

const Title = styled.h2`
  margin: 1em 0;
  text-align: center;
  color: white;
  font-size: 40px;
`

const Description = styled.p`
  max-width: 800px;
  text-align: center;
  color: white;
  font-size: 24px;
`

const LogoSection = () => {
  return (
    <Section>
      <Logo src="/logo.png" alt="logo" />
      <Title>"AI Coder 재현"</Title>
      <Description>
        "누구나 개발자가 될 수 있는 시대" 여러분을 위한 도구와 자원을 제공하고
        있습니다.
      </Description>
    </Section>
  )
}

export default LogoSection
