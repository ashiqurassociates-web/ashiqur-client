import { Link } from 'react-router-dom';
import './HomeSection.scss';
import { motion } from 'framer-motion';

const HomeSection = () => {
  return (
    <div className="home-sec">
      <div className="left">
        <motion.h1
          transition={{ duration: 1 }}
          initial={{ scale: 1.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          Excellence in Corporate and Commercial Legal Services in Bangladesh
        </motion.h1>

        <motion.p
          transition={{ duration: 1 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Ashiqur Rahman and Associates is a full-service law firm in Bangladesh 
          with a proven track record of providing practical, timely, and innovative 
          legal solutions. With expertise across corporate, financial, intellectual 
          property, and dispute resolution matters, our experienced attorneys 
          combine legal excellence with a client-centric approach to serve 
          businesses and individuals with utmost dedication.
        </motion.p>

        <motion.div
          transition={{ duration: 1 }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/about" className="home-btn">
            Learn More
          </Link>
        </motion.div>
      </div>

      <motion.div
        transition={{ duration: 1 }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="right"
      >
        <img src="/law.png" alt="Law firm illustration" />
      </motion.div>
    </div>
  );
};

export default HomeSection;
