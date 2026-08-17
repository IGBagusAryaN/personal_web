import { motion } from "framer-motion";

export const Intro = () => {
  return (
    <div>
      <div className="text-[28px]">
        Helloo, i'm arya
        <motion.span
          animate={{ rotate: [0, 20, -10, 20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
          style={{ display: "inline-block", originY: 0.7 }}
        >
          🖐️
        </motion.span>
      </div>
      <div className="flex text-xs gap-4 text-[#969191] mt-2 sm:block md:hidden">
        <div>• West Jakarta, Indonesia 🇮🇩</div>
        <div>• Software Engineer, Web Master, Database Spesialist</div>
      </div>
      <div className="text-[#969191] mt-3 ">
        <div className="text-[#969191] mt-3">
          <p className="mt-3 text-justify">
            As a Software Engineer and Webmaster at PT Sinar Metrindo Perkasa, I
            specialize in JavaScript and TypeScript, leveraging modern
            technologies to create seamless user experiences and ensure robust
            site architecture. In my daily operations, I work extensively with
            SQL Server and MySQL to manage, query, and optimize data, bridging
            dynamic frontend interfaces with reliable backend systems.
          </p>
          <p className="mt-3 text-justify">
            Through my professional experience, I bring hands-on expertise in
            web development, UI/UX enhancement, and performance optimization. My
            dual role allows me to apply deep full-stack knowledge to oversee
            how web applications function as a complete ecosystem. My goal is to
            continuously improve, ensuring that every project I architect and
            maintain meets the highest standards of quality and usability.
          </p>
        </div>
      </div>
    </div>
  );
};
