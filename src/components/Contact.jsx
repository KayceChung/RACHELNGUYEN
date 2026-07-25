import { motion } from 'framer-motion'
import { email } from '../data'
import { fadeUp, press, viewportOnce } from '../motion'

export default function Contact() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      className="bg-tertiary text-white mx-margin my-xl px-margin py-xl flex flex-col gap-lg text-center md:text-left rounded-3xl shadow-soft"
      id="contact"
    >
      <h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tight">
        Let&apos;s talk about
        <br />
        operations.
      </h2>
      <p className="font-body text-lg opacity-90 max-w-[640px]">
        Open to operations and market roles at travel platforms and tech-enabled logistics companies.
      </p>
      <div className="flex flex-col md:flex-row gap-lg mt-md">
        <motion.a
          {...press}
          href={`mailto:${email}`}
          className="font-utility text-[13px] tracking-wide uppercase border-b-2 border-white pb-sm w-fit hover:opacity-70 transition-opacity"
        >
          {email}
        </motion.a>
        <motion.a
          {...press}
          href="#"
          aria-label="Connect via LinkedIn (add your profile URL)"
          className="font-utility text-[13px] tracking-wide uppercase border-b-2 border-white pb-sm w-fit hover:opacity-70 transition-opacity"
        >
          CONNECT VIA LINKEDIN
        </motion.a>
      </div>
    </motion.section>
  )
}
