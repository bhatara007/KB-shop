import { Variants } from "framer-motion"

export const variants: Variants = {
  hidden: {
    y: 80,
    opacity: 0
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.5 }
  }
}
