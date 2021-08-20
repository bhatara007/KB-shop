import { Variants } from 'framer-motion'

export const variants: Variants = {
  hidden: {
    opacity: 0
  },

  visible: {
    y: 0, 
    opacity: 1 ,
    transition: { type: 'keyframes', duration: 0.8 }
  }
}

export const bannerVariants: Variants = {
  hidden: {
    opacity: 0.7
  },

  visible: {
    opacity: 1,
    transition: { type: 'tween', duration: 0.5 }
  }
}

