import { motion } from 'framer-motion'
import { bio, portraitAlt, portraitSrc } from '../data'
import { fadeUp, viewportOnce } from '../motion'

export default function About() {
  return (
    <section
      className="px-margin py-xl border-t border-outline flex flex-col md:flex-row gap-xl"
      id="about"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="flex-1 flex flex-col gap-lg"
      >
        <span className="font-utility text-[13px] text-tertiary uppercase">BIOGRAPHICAL SKETCH</span>
        <div className="flex flex-col gap-md font-body text-lg text-primary max-w-[640px]">
          {bio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="w-full md:w-[400px] aspect-[4/5] bg-surface relative overflow-hidden rounded-2xl shadow-soft"
      >
        <img
          alt={portraitAlt}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
          src={portraitSrc}
        />
      </motion.div>
    </section>
  )
}
