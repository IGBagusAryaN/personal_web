import { motion } from "framer-motion";
import Image from "next/image";
import { useThemeStore } from "@/hooks/store/theme-store";

export const MarqueeRow = ({
  items,
  reverse = false,
  isDarkMode,
}: {
  items: { image: string; name: string }[];
  reverse?: boolean;
  isDarkMode: boolean;
}) => {
  const { theme } = useThemeStore();
  const logosWithLight = ["NextJs", "Express", "Shadcn UI"];

  const singleGroup = Array(15).fill(items).flat();

  return (
    // PERBAIKAN: Angka 128px diubah menjadi 40px agar area blur lebih tipis/kecil
    <div className="overflow-hidden flex w-full flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)] [-webkit-mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)]">
      <motion.div
        className="flex w-max flex-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 350, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(2)].map((_, blockIndex) => (
          <div
            key={blockIndex}
            className="flex flex-shrink-0 flex-nowrap gap-3 pr-3"
          >
            {singleGroup.map((tech, i) => {
              const imageSrc =
                isDarkMode && logosWithLight.includes(tech.name)
                  ? `/${tech.image.replace(".svg", "-light.svg")}`
                  : `/${tech.image}`;

              return (
                <div
                  key={`${blockIndex}-${tech.name}-${i}`}
                  className={`border rounded-2xl px-3 py-2 flex items-center gap-2 text-[12px] whitespace-nowrap ${
                    theme === "dark"
                      ? "border-[#404040] bg-[#262626]"
                      : "border-gray-300"
                  }`}
                >
                  <Image
                    src={imageSrc}
                    alt={tech.name}
                    width={20}
                    height={20}
                  />
                  {tech.name}
                </div>
              );
            })}
          </div>
        ))}
      </motion.div>
    </div>
  );
};