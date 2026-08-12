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

  // KUNCI PERBAIKAN:
  // Gandakan array items menjadi sangat panjang (15 kali lipat).
  // Ini menggaransi bahwa 1 blok akan memiliki lebar ribuan pixel,
  // sehingga tidak akan pernah kehabisan item / terpotong saat layar di-resize.
  const singleGroup = Array(15).fill(items).flat();

  return (
    // Tambahkan flex-nowrap agar item tidak pernah mencoba turun ke bawah (wrap)
    <div className="overflow-hidden flex w-full flex-nowrap">
      <motion.div
        className="flex w-max flex-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        // Durasi diperbesar proporsional karena itemnya sekarang jauh lebih banyak/panjang
        transition={{ duration: 350, repeat: Infinity, ease: "linear" }}
      >
        {/* Render tepat 2 blok besar untuk menciptakan ilusi infinite loop */}
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
                  key={`${blockIndex}-${tech.name}-${i}`} // Key diperbarui agar 100% unik
                  className={`border rounded-lg px-3 py-2 flex items-center gap-2 text-[12px] whitespace-nowrap ${
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