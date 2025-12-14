//icons
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
   MapPin, 
   Phone, 
   Mail, 
   Church, 
   Globe, 
  Droplet
 } from 'lucide-react';

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

export const areas = [
  {
    id: "church",
    title: "Church Planting",
    description:
      "We plant local, sustainable fellowships led by trained local leaders — focusing on discipleship, worship and Christ-centered community life.",
    icon: Church,
    image: "/images/church.JPG",
  },
  {
    id: "outreach",
    title: "Outreach Evangelism",
    description:
      "Regular evangelistic outreach and Gospel campaigns in villages and towns where believers are few and access to the Word is limited.",
    icon: Globe,
    image: "/images/miss.JPG",
  },
  {
    id: "community",
    title: "Community Development",
    description:
      "Water, food security and education projects that serve physical needs and open doors for lasting church and community transformation.",
    icon: Droplet,
    image: "/images/women.jpg",
  },
];

export const values = [
  "Faithfulness to Scripture",
  "Compassion",
  "Integrity",
  "Discipleship",
  "Community transformation",
  "Evangelism",
];

export const history = [
  {
    year: "2014",
    title: "Called to Missions",
    description:
      "A defining moment of prayer led Pastor Peter to commit to full-time ministry and outreach in Tanzania's interior.",
  },
  {
    year: "2016",
    title: "First Church Plant",
    description:
      "Planted the first fellowship in the River Valley area. The congregation began with a small group meeting under a tree.",
  },
  {
    year: "2019",
    title: "Community Projects Begin",
    description:
      "Launched water and education projects to meet physical needs and open doors for the Gospel.",
  },
  {
    year: "2022",
    title: "Leadership Training",
    description:
      "Started a leaders' training program equipping local pastors and lay leaders to sustain churches long-term.",
  },
];

export const testimonials = [
  {
    quote:
      "This ministry brought hope to our village. The teaching and love we received changed our lives.",
    name: "Mama Achieng",
    designation: "Neno",
    src : "https://i.pinimg.com/736x/e4/69/e7/e469e7e68c236bc6e6961fd32bc37758.jpg",
  },
  {
    quote:
      "We now have a place to worship and our children can attend Sunday school. Thank you for coming.",
    name: "Daniel",
    designation: "Ndumo",
    src: "/images/miss.JPG",
  },
];