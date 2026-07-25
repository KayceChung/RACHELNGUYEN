export const easeOut = [0.23, 1, 0.32, 1]
export const easeInOut = [0.77, 0, 0.175, 1]

export const press = {
  whileTap: { scale: 0.97 },
  transition: { duration: 0.16, ease: easeOut },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
}

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
})

export const viewportOnce = { once: true, margin: '0px 0px -80px 0px', amount: 0.2 }
