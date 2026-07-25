import { motion } from 'framer-motion'
import { capabilities } from '../data'
import { fadeUp, staggerContainer, viewportOnce } from '../motion'

export default function Capabilities() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.08)}
      className="px-margin py-xl grid grid-cols-1 md:grid-cols-4 gap-lg"
    >
      {capabilities.map((group) => (
        <motion.div
          key={group.heading}
          variants={fadeUp}
          className="flex flex-col gap-md p-lg bg-surface rounded-2xl shadow-softer"
        >
          <span className="font-utility text-[13px] text-tertiary uppercase border-b border-outline pb-xs">
            {group.heading}
          </span>
          <ul className="font-body text-base text-primary space-y-xs">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.section>
  )
}
