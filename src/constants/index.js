import {
  imgConfetti,
  imgCurrency,
  imgPlane,
  imgRestaurant,
  iconFacebook,
  iconYoutube,
  iconTwitter,
  iconPinterest,
  iconInstagram,
} from "../assets/";

import {
  IconOnline,
  IconBudgeting,
  IconOnboarding,
  IconApi,
} from "../components/svg";

export const headerNavLinks = [
  { url: "#home", label: "Home", id: 1 },
  { url: "#about", label: "About", id: 2 },
  { url: "#contact", label: "Contact", id: 3 },
  { url: "#blog", label: "Blog", id: 4 },
  { url: "#careers", label: "Careers", id: 5 },
];

export const footerNavLinks = [
  { url: "#about-us", label: "About Us", id: 1 },
  { url: "#contact", label: "Contact", id: 2 },
  { url: "#blog", label: "Blog", id: 3 },
  { url: "#careers", label: "Careers", id: 4 },
  { url: "#support", label: "Support", id: 5 },
  { url: "#privacy Policy", label: "Privacy Policy", id: 6 },
];

export const socialLinks = [
  { id: 1, url: "/", icon: iconFacebook, alt: "Visit our Facebook page" },
  { id: 2, url: "/", icon: iconYoutube, alt: "Visit our YouTube channel" },
  { id: 3, url: "/", icon: iconTwitter, alt: "Follow us on Twitter" },
  { id: 4, url: "/", icon: iconPinterest, alt: "Explore our Pinterest boards" },
  { id: 5, url: "/", icon: iconInstagram, alt: "Follow us on Instagram" },
];

export const heroSection = {
  title: "Next generation digital banking",
  description:
    "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.",
};

export const featuredSection = {
  title: "Why choose Easybank?",
  description:
    "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.",
};

export const featuredContents = [
  {
    id: 1,
    Icon: IconOnline,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 2,
    Icon: IconBudgeting,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    id: 3,
    Icon: IconOnboarding,
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 4,
    Icon: IconApi,
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

export const articleCards = [
  {
    id: 1,
    image: {
      src: imgCurrency,
      altText: "A stack of paper money from various currencies",
      width: "533",
      height: "400",
    },
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...",
    attribution: "By Claire Robinson",
  },
  {
    id: 2,
    image: {
      src: imgRestaurant,
      altText: "Restaurant table with various dishes and glasses of water.",
      width: "600",
      height: "400",
    },
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
    attribution: "By Wilson Hutton",
  },
  {
    id: 3,
    image: {
      src: imgPlane,
      altText: "Aerial view of aircraft's right wing in flight.",
      width: "602",
      height: "400",
    },
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...",
    attribution: "By Wilson Hutton",
  },
  {
    id: 4,
    image: {
      src: imgConfetti,
      altText: "Falling colorful confetti",
      width: "600",
      height: "400",
    },
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    attribution: "By Claire Robinson",
  },
];
