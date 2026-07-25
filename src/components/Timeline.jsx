import { motion } from 'framer-motion'
import { timeline } from '../data'
import { fadeUp, staggerContainer, viewportOnce } from '../motion'

export default function Timeline() {
  return (
    <section className="px-margin py-xl bg-surface-variant">
      <div className="mb-xl">
        <span className="font-utility text-[13px] text-tertiary uppercase">EXPERIENCE TIMELINE</span>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="flex flex-col gap-0 max-w-4xl"
      >
        {timeline.map((item, i) => (
          <motion.div key={item.period} variants={fadeUp} className="flex group">
            <div className="w-32 flex justify-end pr-lg pt-1">
              <span className="font-utility text-sm text-secondary">{item.period}</span>
            </div>
            <div className={`relative w-px ${i === timeline.length - 1 ? 'min-h-[60px]' : 'min-h-[120px]'}`}>
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-tertiary-soft -translate-x-1/2" />
              <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="absolute left-1/2 top-0 w-[11px] h-[11px] rounded-full bg-tertiary ring-4 ring-surface-variant -translate-x-1/2 z-10"
              />
            </div>
            <div
              className={`flex-1 pl-lg ml-md p-lg bg-white rounded-2xl shadow-softer ${
                i === timeline.length - 1 ? 'mb-0' : 'mb-lg'
              }`}
            >
              <h4 className="font-headline text-2xl font-semibold text-primary">{item.role}</h4>
              <p className="font-utility text-[13px] text-tertiary mb-sm">{item.org}</p>
              <p className="font-body text-base text-secondary">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
