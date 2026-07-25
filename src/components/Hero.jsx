import { motion } from 'framer-motion'
import heroPortrait from '../assets/hero-portrait.jpg'
import { email } from '../data'
import { easeOut, press } from '../motion'

export default function Hero() {
  return (
    <section className="px-margin pt-xl pb-xl flex flex-col gap-lg bg-background">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="font-display text-[64px] md:text-[120px] uppercase text-primary leading-[0.95] tracking-[-0.03em] font-bold"
      >
        Nguyen Thi
        <br />
        Thao Nhi
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
        className="flex flex-col md:flex-row md:items-start gap-xl"
      >
        <div className="flex flex-col gap-md max-w-[640px]">
          <p className="font-utility text-[13px] text-tertiary uppercase tracking-widest">
            Operations &amp; Market Executive · Travel &amp; Tourism · Ho Chi Minh City
          </p>
          <p className="font-body text-lg text-primary leading-relaxed max-w-[640px]">
            I run tour and transport operations from the front line — and I build the systems that make
            operations run. Two years across supplier coordination, service recovery, and low-code process
            automation for clients in Vietnam and the United States.
          </p>
          <div className="flex gap-md pt-sm">
            <motion.a
              {...press}
              href="/Nguyen-Thi-Thao-Nhi-CV.pdf"
              download="Nguyen-Thi-Thao-Nhi-CV.pdf"
              className="bg-tertiary text-white font-utility text-[13px] tracking-wide rounded-full px-lg py-md shadow-softer hover:opacity-90 transition-opacity w-fit"
            >
              DOWNLOAD CV
            </motion.a>
            <motion.a
              {...press}
              href={`mailto:${email}`}
              className="border border-tertiary text-tertiary font-utility text-[13px] tracking-wide rounded-full px-lg py-md hover:bg-tertiary hover:text-white transition-colors w-fit"
            >
              EMAIL ME
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
          className="w-full md:flex-1 aspect-[3/4] md:aspect-auto md:self-stretch md:min-h-[420px] bg-surface relative overflow-hidden rounded-2xl shadow-soft"
        >
          <img
            alt="Nguyen Thi Thao Nhi wearing a traditional non la at dusk in Hue, Vietnam"
            loading="eager"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            src={heroPortrait}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
