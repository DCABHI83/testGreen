import React from 'react'
import Header from '../UI/Header'
import Hero from './Hero'
import Services from './Services'
import Pricing from './Pricing'
import Footer from '../UI/Footer'
import Features from './Features'
import { motion } from 'framer-motion'
import ScrollDownButton from './ScrollDownButton'
// Animation variants for reuse
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  }),
}

const Home = () => {
  return (
    <>
      {/* Header fixed with fade-in */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Header />
      </motion.div>

      {/* Hero Section */}
      <motion.section
        id="hero"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Hero />
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={2}
      >
        <Services />
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={3}
      >
        <Features />
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={4}
      >
        <Pricing />
      </motion.section>

      <section className="bg-yellow-100 py-4 text-center mb-4">
  <p className="text-gray-800 font-medium animate-pulse ">
    🚀 We are currently working on a fully fledged website with more features. Stay tuned!
  </p>
</section>
<section>
  <ScrollDownButton/>
</section>


      {/* Footer Section */}
      <motion.section
        id="footer"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={5}
      >
        <Footer />
      </motion.section>
    </>
  )
}

export default Home
