import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'

const GreetingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
`

const GreetingTitle = styled.h1`
  font-size: 9em;
`

const TypewriterText = styled.div`
  font-size: 4em;
`

const Greeting = () => {
  return (
    <GreetingWrapper>
      <GreetingTitle>안녕하세요</GreetingTitle>
      <TypewriterText>
        <Typewriter
          options={{
            strings: [
              '첫 번째 소개 문장',
              '두 번째 소개 문장',
              '세 번째 소개 문장',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </TypewriterText>
    </GreetingWrapper>
  )
}

export default Greeting
