import { motion } from "framer-motion";
import profile from "@/images/profile.jpg";

const Hero = () => (
  <section
    id="home"
    className="hero min-h-[90vh] bg-gradient-to-br from-accent/20 to-base-300/50 relative overflow-hidden"
  >
    {/* Background decorative blobs */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>

    {/* Layout desktop: flex */}
    <div className="hero-content lg:flex-row-reverse flex-col-reverse items-center text-neutral-content relative z-10 max-w-6xl mx-auto px-4 lg:gap-12 gap-5">
      
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center lg:text-left items-center lg:items-start justify-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-5 text-4xl md:text-6xl lg:text-6xl font-bold"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
            Fahmi Idris
          </span>
          <br />
          <span className="text-secondary">Anjounghan</span>
        </motion.h1>
        <p className="text-xl md:text-2xl font-medium mb-4">
          Fullstack Developer
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm md:text-base">
          <span className="badge badge-accent">React.js</span>
          <span className="badge badge-primary">Laravel</span>
          <span className="badge badge-secondary">Node.js</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href="#projects"
            className="btn btn-accent btn-lg rounded-full px-8 shadow-lg hover:shadow-accent/50 transition-all"
          >
            My Projects
          </a>
          <a
            href="#contact"
            className="btn btn-outline btn-lg rounded-full px-8 hover:bg-base-100/10 hover:text-neutral"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Profile Image with blob shape */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="flex-1 flex justify-center"
      >
        <div className="avatar w-80">
          <img src={profile} alt="profile" className="mask mask-squircle shadow-lg "/>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
