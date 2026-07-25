import { motion } from 'framer-motion'
import { projects } from '../data'
import { fadeUp, staggerContainer, viewportOnce } from '../motion'

export default function Projects() {
  return (
    <section className="px-margin py-xl" id="work">
      <div className="mb-lg">
        <span className="font-utility text-[13px] text-tertiary uppercase">SELECTED PROJECTS</span>
      </div>
      <motion.div
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="grid grid-cols-1 md:grid-cols-3 gap-lg"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="p-lg flex flex-col gap-sm bg-surface rounded-2xl shadow-softer hover:shadow-soft transition-shadow duration-300"
          >
            <span className="font-utility text-[13px] text-tertiary uppercase">{project.tag}</span>
            <h3 className="font-headline text-2xl font-semibold text-primary">{project.title}</h3>
            <p className="font-body text-base text-secondary">{project.description}</p>
            <a
              href="#"
              aria-label="Read case study (coming soon)"
              className="mt-auto font-utility text-[13px] tracking-wide text-tertiary uppercase border-b border-tertiary w-fit hover:opacity-70 transition-opacity"
            >
              READ CASE STUDY
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
