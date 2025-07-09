import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { styles } from "../styles";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} h-full flex flex-col-reverse sm:flex-row items-center justify-between pt-24`}
      >
        {/* Left: Text Content */}
        <div className="flex-1">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm <span className="text-[#915EFF]">Roopendra</span>
          </motion.h1>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`${styles.heroSubText} mt-4 text-white-100`}
          >
            I'm a CSE student passionate about{" "}
            <TypeAnimation
              sequence={[
                "AI", 1500,
                "Machine Learning", 1500,
                "Full Stack Development", 1500,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
            />
          </motion.p>

          <motion.a
            href="/Roopendra_resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 px-6 py-3 bg-[#915EFF] text-white rounded-lg font-semibold shadow-lg hover:bg-[#7d4fe0] transition-all duration-300"
          >
            Download Resume
          </motion.a>
        </div>

        {/* Right: Circular Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden border-4 border-[#915EFF] shadow-2xl"
        >
          <img
            src={profile}
            alt="Roopendra"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Scroll-down Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
