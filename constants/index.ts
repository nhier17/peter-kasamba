//icons
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

//nav links
export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Newsletter",
    href: "/newsletter",
  },
  {
    label: "Donate",
    href: "/donate",
  },
  {
    label: "Get Involved",
    href: "/get-involved",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

//footer links
export const footerLinks = {
quickLinks: [
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Newsletter', href: '/newsletter' },
    { title: 'Donate', href: '/donate' },
    { title: 'Get Involved', href: '/get-involved' },
    { title: 'Contact', href: '/contact' }
],
socialLinks: [
    { icon: Facebook, href: 'https://facebook.com/' },
    { icon: Twitter, href: 'https://twitter.com/' },
    { icon: Instagram, href: 'https://instagram.com/' },
    { icon: Youtube, href: 'https://youtube.com/' },
],
contactLinks: [
    { title: 'Bunju, Tanzania', icon: MapPin},
    { title: '0712 345 678', icon: Phone },
    { title: 'peterkasamba@gmail.com', icon: Mail },
]
};