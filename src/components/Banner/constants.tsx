import { Variants } from 'framer-motion'

export const bannerVariants: Variants = {
  hidden: {
    opacity: 0.7
  },

  visible: {
    opacity: 1,
    transition: { type: 'tween', duration: 0.5 }
  }
}

export const imgVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 0.8 }
  }
}
