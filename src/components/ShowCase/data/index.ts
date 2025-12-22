import GardenHillsLanding from "../../../assets/videos/gardenhills-landing.mp4";
import LebetLanding from "../../../assets/videos/lebet-landing.mp4";
import One2OneLanding from "../../../assets/videos/one2one-landing.mp4";
import One2OneWorkings from "../../../assets/videos/one2one-workings.mp4";
import CastorLogo from "../../../assets/images/castor.png";
import CastorDashboard from "../../../assets/images/castor-dashboard.png";
import CastorWorkings from "../../../assets/videos/castor-workings.mp4";

export default [
  {
    title: "Garden Hills Hotel",
    description:
      "Garden Hills Hotel’s website is a modern, hospitality-focused platform designed to present the hotel’s brand, services, and booking capabilities in a clean and intuitive way. The site features a visually appealing layout with spacious imagery, clear typography, and a calm aesthetic that reflects the hotel’s hillside retreat atmosphere.",
    media: [
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/715277795.jpg?k=83ecd24380db488d2e7def8c62b02d572921b519a4fb43450e532040fd630203&o=",
        duration: 3000,
        type: "image",
      },
      {
        url: GardenHillsLanding,
        duration: 30000,
        type: "video",
      },
    ],
  },
  {
    title: "Lebet",
    description:
      "Lebet.et’s website is a sleek, design-driven e-commerce platform dedicated to home décor, furniture, and interior design — aimed at both professional interior designers and home-owners.",
    media: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeW14m3uJXfVVEspa3PRQ06S9FweRCfcx8yA&s",
        duration: 3000,
        type: "image",
      },
      {
        url: LebetLanding,
        duration: 48000,
        type: "video",
      },
    ],
  },
  {
    title: "UnSwype",
    description:
      "UnSwype’s website serves as the front-end portal for a modern, AI-powered social/dating & matrimony platform targeting younger generations (Gen Z / Millennials).",
    media: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbCt-IvdTZdgw4_q4qjLkdrsqOY7Q-w1c3w&s",
        duration: 3000,
        type: "image",
      },
      {
        url: "https://play-lh.googleusercontent.com/n6g7K-PRRG2z8AKcipJcL3A5TLx-gz5Tk74xMaWyMjQFkMaT9zk1nWvA-neOPSwkJw=w526-h296-rw",
        duration: 3000,
        type: "image",
      },
      {
        url: "https://unswype.social/assets/hero-cc449607.png",
        duration: 3000,
        type: "image",
      },
      {
        url: "https://play-lh.googleusercontent.com/Dh-cDhLiMJHfwLG3vywVdY2CZ9QANuVsHY6nXLcg1vD30TUR1xnGFus8f93BX_pmaQ=w526-h296-rw",
        duration: 3000,
        type: "image",
      },
    ],
  },
  {
    title: "Gharchaska",
    description:
      "Gharchaska is a modern platform (mobile app) that connects home-cooks and independent artisans with customers — enabling individuals to sell homemade food or handcrafted goods directly.",
    media: [
      {
        url: "https://play-lh.googleusercontent.com/t2f7-7xd6-t_vMABB1fgFdyZwe-KDZojewhRN26wEDQrP8FNN1eQ_ox62NadO7U-4g8TEZpyr8tPkqo7V6ES2mM=w1052-h592",
        duration: 3000,
        type: "image",
      },
      {
        url: "https://play-lh.googleusercontent.com/JKUfgpMTVV0AVezXCbt2D5idGkG2JkaOzBfNGMRyYNlja-8s_3USVN5zrRG_EtWmThl_KkEu779fm0YHFjARoYU=w1052-h592-rw",
        duration: 3000,
        type: "image",
      },
      {
        url: "https://play-lh.googleusercontent.com/vjZcEYoogDrdjkidDsCGBSqMDbVtqrDo__0NKTEAZzV5tkv-L7VExvVMSkN4lnKBQeGAc3lyqvEZk88KQXjDCg=w1052-h592-rw",
        duration: 3000,
        type: "image",
      },
      {
        url: "https://play-lh.googleusercontent.com/QL8kOuztFPdnodR4zpAxmLSBfajoVIcfLJCjACCkuV7WSGqFEY1UqTOHAxRrvIbRb56QXmVQMrI-KJYOQjgdFTo=w1052-h592-rw",
        duration: 3000,
        type: "image",
      },
    ],
  },
  {
    title: "One2One AI",
    description:
      "One2One AI is a web app that delivers an AI-powered chatbot with both text and voice interactions (voice-cloning/voice-enabled responses). It includes user authentication, profile/subscription management, and modular chat UI components (avatar, message groups, streaming messages), demonstrating end-to-end AI-chat UX and voice integration suitable for influencers, creators, and brands.",
    media: [
      {
        url: One2OneLanding,
        duration: 25000,
        type: "video",
      },
      {
        url: One2OneWorkings,
        duration: 18000,
        type: "video",
      },
    ],
  },
  {
    title: "Castor",
    description:
      "Built an Electron + React (Vite + TypeScript) desktop app that separates a control UI from a projector display, letting users load images/videos/PDFs, manage slides/lyrics, and present them on a fullscreen external display or via a remote browser view.",
    media: [
      {
        url: CastorLogo,
        duration: 3000,
        type: "image",
      },
      {
        url: CastorDashboard,
        duration: 10000,
        type: "image",
      },
      {
        url: CastorWorkings,
        duration: 64000,
        type: "video",
      },
    ],
  },
];
