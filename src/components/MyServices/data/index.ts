//Images
import ux from "../../../assets/images/ux.png";
import server from "../../../assets/images/server.png";
import stack from "../../../assets/images/stack.png";
import mobile from "../../../assets/images/mobile.png";
import desktop from "../../../assets/images/desktop.png";
import bots from "../../../assets/images/bots.png";

//Icons
import figma from "../../../assets/icons/figma.png";
import tailwind from "../../../assets/icons/tailwind.png";
import nodejs from "../../../assets/icons/nodejs.png";
import nextjs from "../../../assets/icons/nextjs.png";
import nestjs from "../../../assets/icons/nestjs.png";
import react from "../../../assets/icons/react.png";
import mongodb from "../../../assets/icons/mongodb.png";
import flutter from "../../../assets/icons/flutter.png";
import android from "../../../assets/icons/android.png";
import ios from "../../../assets/icons/ios.png";
import dotnet from "../../../assets/icons/dotnet.png";
import electron from "../../../assets/icons/electron.png";
import telegram from "../../../assets/icons/telegram.png";
import discord from "../../../assets/icons/discord.webp";

export default [
  {
    title: "UI/UX Design",
    description: "Crafting visually appealing and user-friendly interfaces",
    image: ux,
    icons: [figma, tailwind],
  },
  {
    title: "Backend Servers",
    description: "Handling server-side logic, databases, and APIs",
    image: server,
    icons: [nodejs, nextjs, nestjs],
  },
  {
    title: "Full Stack",
    description: "Developing both front-end and back-end of applications",
    image: stack,
    icons: [react, mongodb],
  },
  {
    title: "Mobile Development",
    description: "Creating applications for iOS and Android",
    image: mobile,
    icons: [flutter, android, ios],
  },
  {
    title: "Desktop Development",
    description:
      "Building software applications for Windows, macOS, and Linux.",
    image: desktop,
    icons: [flutter, dotnet, electron],
  },
  {
    title: "Bots",
    description: "Automating tasks and interactions",
    image: bots,
    icons: [telegram, discord],
  },
];
