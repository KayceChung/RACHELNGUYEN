import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Capabilities from './components/Capabilities'
import About from './components/About'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main className="max-w-[1440px] mx-auto">
        <Hero />
        <Metrics />
        <Projects />
        <Timeline />
        <Capabilities />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
