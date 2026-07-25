import { motion } from 'framer-motion'
import { metrics } from '../data'
import { fadeUp, staggerContainer, viewportOnce } from '../motion'

export default function Metrics() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.08)}
      className="px-margin py-xl bg-surface grid grid-cols-2 md:grid-cols-4 gap-md"
    >
      {metrics.map((metric) => (
        <motion.div
          key={metric.id}
          variants={fadeUp}
          className="px-md py-lg flex flex-col gap-xs bg-white rounded-2xl shadow-softer"
        >
          <span className="font-utility text-[13px] text-tertiary uppercase">{metric.id}</span>
          <span className="font-headline text-2xl font-semibold text-primary">{metric.value}</span>
          <p className="font-utility text-sm text-on-surface-variant">{metric.caption}</p>
        </motion.div>
      ))}
    </motion.section>
  )
}
