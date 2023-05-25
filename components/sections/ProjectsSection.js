import React from 'react'
import styled, { keyframes } from 'styled-components'

const Typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`

const Blink = keyframes`
  from {
    border-color: inherit;
  }
  to {
    border-color: transparent;
  }
`

const TypingAnimation = styled.p`
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid;
  animation: ${Typing} 3s steps(30) infinite,
    ${Blink} 0.5s step-end infinite alternate;
`

const Greeting = () => {
  return (
    <section>
      <h1>안녕하세요,</h1>
      <TypingAnimation>
        저는 최고의 개발자가 되려고 노력하는 사람입니다.
      </TypingAnimation>
    </section>
  )
}

export default Greeting
