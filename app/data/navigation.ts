import type { NavigationItem } from '~/types'

export const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/#skills', isAnchor: true },
  { name: 'Architecture', href: '/#architecture', isAnchor: true },
  { name: 'Projects', href: '/projects' },
  { name: 'Journey', href: '/#experience', isAnchor: true },
  { name: 'Contact', href: '/contact' }
]
