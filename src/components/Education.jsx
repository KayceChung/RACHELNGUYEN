import { motion } from 'framer-motion'
import { awards } from '../data'
import { fadeUp, staggerContainer, viewportOnce } from '../motion'

export default function Education() {
  return (
    <section className="px-margin py-xl bg-surface grid grid-cols-1 md:grid-cols-2 gap-lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="p-xl bg-white rounded-2xl shadow-softer flex flex-col gap-lg"
      >
        <span className="font-utility text-[13px] text-tertiary uppercase">EDUCATION</span>
        <div className="flex flex-col gap-sm">
          <h5 className="font-headline text-2xl font-semibold text-primary">
            Bachelor of International Business
          </h5>
          <p className="font-body text-base text-secondary">Hoa Sen University, Class of 2024</p>
          <div className="flex flex-col gap-xs mt-md">
            <div className="flex justify-between border-b border-outline pb-xs">
              <span className="font-utility text-[13px] text-primary">GPA</span>
              <span className="font-utility text-sm text-tertiary">3.52 / 4.00</span>
            </div>
            <div className="flex justify-between border-b border-outline pb-xs pt-xs">
              <span className="font-utility text-[13px] text-primary">ENGLISH</span>
              <span className="font-utility text-sm text-tertiary">CEFR C1 LEVEL</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="p-xl bg-white rounded-2xl shadow-softer flex flex-col gap-lg"
      >
        <span className="font-utility text-[13px] text-tertiary uppercase">AWARDS &amp; RECOGNITION</span>
        <div className="space-y-gutter">
          {awards.map((award) => (
            <motion.div key={award.title} variants={fadeUp} className="flex gap-md items-start">
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-tertiary bg-surface-variant rounded-full w-10 h-10 flex items-center justify-center shrink-0"
              >
                {award.icon}
              </span>
              <div>
                <h6 className="font-utility text-[13px] text-primary uppercase">{award.title}</h6>
                <p className="font-body text-base text-secondary">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
