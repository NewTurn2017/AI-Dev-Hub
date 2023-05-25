// pages/index.js
import React from 'react'
import Sidebar from '../components/Sidebar'
import Greeting from '../components/sections/Greeting'
import LogoSection from '../components/sections/LogoSection'

export default function Home() {
  return (
    <main>
      <Sidebar />
      <div>
        <section id="greeting">
          <Greeting />
        </section>
        <section id="logo">
          <LogoSection />
        </section>
        {/* ...other sections */}
      </div>
    </main>
  )
}
