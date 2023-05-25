import React from 'react'
import { motion } from 'framer-motion'

const ScrollIndicator = () => {
  const arrowVariants = {
    blink: {
      opacity: [1, 0, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  }

  return (
    <motion.div
      style={{
        position: 'fixed',
        bottom: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        width="80" // doubled the size
        height="80" // doubled the size
        variants={arrowVariants}
        initial="blink"
        animate="blink"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </motion.svg>
    </motion.div>
  )
}

export default ScrollIndicator
