import { ScrollFadeIn } from "../../../../components/scroll-page";
import { useThemeStore } from "@/hooks/store/theme-store";
import { Intro } from "./_components/intro";
import { Tools } from "./_components/tools";
import { WhatUp } from "./_components/connect";
import FlowingMenu from "./_components/flow-menu";

const demoItems = [
  {
    link: "#",
    text: "Frontend Developer",
    image: "https://cdn.wallpapersafari.com/98/70/F38zRk.jpg",
  },
  {
    link: "#",
    text: "Backend Developer",
    image: "https://wallpapercave.com/wp/wp14258974.png",
  },
  {
    link: "#",
    text: "Database Administrator",
    image: "https://wallpapers-clan.com/wp-content/uploads/2025/01/naruto-uzumaki-sunny-day-desktop-wallpaper-cover.jpg",
  },
];

const stack = [
  { image: "assets/png/reactjs.png", name: "ReactJs" },
  { image: "assets/png/vite.png", name: "ViteJs" },
  { image: "assets/svg/next.svg", name: "NextJs" },
  { image: "assets/png/inertia.png", name: "InertiaJs" },
  { image: "assets/png/ts.png", name: "TypeScript" },
  { image: "assets/png/docker.png", name: "Docker" },
  { image: "assets/svg/express.svg", name: "Express" },
  { image: "assets/png/node.png", name: "NodeJs" },
  { image: "assets/svg/postgre.svg", name: "Postgre" },
  { image: "assets/png/chakra.png", name: "ChakraUI" },
  { image: "assets/png/prisma.png", name: "PrismaORM" },
  { image: "assets/png/Laravel.png", name: "Laravel" },
  { image: "assets/png/tailwind.png", name: "Tailwind" },
  { image: "assets/png/javascript.png", name: "Javascript" },
  { image: "assets/png/PHP.png", name: "PHP" },
  { image: "assets/png/react-native.png", name: "React Native" },
  { image: "assets/png/mysql.png", name: "mySQL" },
  { image: "assets/png/Bootstrap.png", name: "Bootstrap" },
  { image: "assets/png/shadcn.png", name: "Shadcn UI" },
  { image: "assets/png/MaterialUI.png", name: "Material UI" },
  { image: "assets/png/HTML5.png", name: "HTML" },
  { image: "assets/png/CSS3.png", name: "CSS" },
  { image: "assets/png/Alpine.png", name: "Alpine js" },
  { image: "assets/png/framer.png", name: "Framer Motion" },
  { image: "assets/png/zustand.png", name: "Zustand" },
];
export const Summary = () => {
  const { theme } = useThemeStore();
  const isDarkMode = theme === "dark";
  const rows = [stack.slice(0, 8), stack.slice(8, 16), stack.slice(16, 24)];

  return (
    <div className="w-full max-w-[920px] mx-auto">
      
      <ScrollFadeIn>
        <Intro />
      </ScrollFadeIn>

      <hr className="border-b-1 border-dashed border-gray-300 my-10" />

      {/* <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu
          items={demoItems}
          speed={15}
          textColor="#060010"
          bgColor="#ffffff"
          marqueeBgColor="#060010"
          marqueeTextColor="#ffffff"
          borderColor="#060010"
        />
      </div> */}

      {/* <hr className="border-b-1 border-dashed border-gray-300 my-10" /> */}

      <ScrollFadeIn delay={0.3}>
        <Tools rows={rows} isDarkMode={isDarkMode} />
      </ScrollFadeIn>

      <hr className="border-b-1 border-dashed border-gray-300 my-10" />

      <ScrollFadeIn delay={0.6}>
        <WhatUp />
      </ScrollFadeIn>
    </div>
  );
};
