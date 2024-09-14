import { motion } from 'framer-motion';



const Hero = () => (
    <motion.section
      id="home"
      className="relative h-screen flex items-center justify-center text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/back.jpg')", filter: "brightness(50%) blur(5px)" }}></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Forest Consulting Group</h1>
        <p className="text-2xl">Planting security and harvesting results</p>
      </div>
    </motion.section>
  );

  export default Hero;