import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, email } from '../data'
import { easeOut, press } from '../motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-outline transition-shadow duration-200 ${
        scrolled ? 'shadow-softer' : ''
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin py-md mx-auto max-w-[1440px]">
        <span className="font-headline text-2xl font-semibold tracking-tight uppercase text-primary">
          Nguyen Thi Thao Nhi
        </span>

        <div className="hidden md:flex gap-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-on-surface-variant font-utility uppercase text-[13px] tracking-wide hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-md">
          <motion.a
            {...press}
            href={`mailto:${email}`}
            className="font-utility text-[13px] tracking-wide text-white bg-tertiary rounded-full px-lg py-sm whitespace-nowrap shadow-softer hover:opacity-90 transition-opacity"
          >
            CONTACT
          </motion.a>
          <motion.button
            {...press}
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-outline bg-surface"
          >
            <motion.span
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="material-symbols-outlined text-primary"
            >
              menu
            </motion.span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="md:hidden border-t border-outline overflow-hidden bg-background rounded-b-2xl shadow-softer"
          >
            <div className="flex flex-col px-margin py-md gap-md">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-on-surface-variant font-utility uppercase text-[13px] tracking-wide hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
