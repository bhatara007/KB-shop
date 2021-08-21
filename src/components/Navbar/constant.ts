import { Variants } from 'framer-motion'

export const variants: Variants = {
  hidden: {
    opacity: 0
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'keyframes', duration: 0.8 }
  }
}

export const mobileVariants: Variants = {
  hidden: {
    opacity: 0,
    x:-60,
    transition: { type: 'tween', duration: 0.5 }
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.5 }
  }
}

export const bannerDesc = [
  {
    name: 'GMK Botanical',
    desc: 'Designed by Omnitype',
    link: 'https://cdn.shopify.com/s/files/1/0054/0878/4458/files/GMK_Botanical_2_OMNI_Bauer_003_dist_x800.jpg?v=1628715382'
  },
  {
    name: 'GMK Handarbeit',
    desc: 'Designed by cocobrais',
    link: 'https://i.imgur.com/K94YTos.jpg'
  }
]
