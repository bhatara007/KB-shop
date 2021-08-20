import { Variants } from "framer-motion"






export const variants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      type: 'spring',
      duration: 2,
      delay: 1
      // ease: [0.42, 0, 0.58, 1],
    }
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',

      duration: 2,
      delay: 1
      // ease: [0.42, 0, 0.58, 1],
    }
  }
}
