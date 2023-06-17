'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const AnimatedText = ({ heading, fromRight }) => {
  const initial = {
    x: fromRight ? '20%' : '-20%',
    opacity: 0,
  }

  const animate = {
    x: 0,
    opacity: 1,
  }
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ duration: 0.5, ease: 'easeIn' }}
    >
      {heading}
    </motion.div>
  )
}

export default AnimatedText
