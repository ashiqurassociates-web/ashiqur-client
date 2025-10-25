import './Achieve.scss';
import { GiScales, GiFlatHammer } from 'react-icons/gi';
import { HiBuildingLibrary } from 'react-icons/hi2';
import { GoGlobe } from 'react-icons/go';
import { motion } from 'framer-motion';

const Achieve = () => {
  return (
    <div className="achieve">
      <div className="top">
        <motion.h1
          transition={{ duration: 1 }}
          initial={{ scale: 1.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          We’re not just lawyers, <br /> we’re advocates for justice.
        </motion.h1>
      </div>

      <div className="bottom">
        <motion.div
          transition={{ duration: 1 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bottom-sec"
        >
          <div className="icon">
            <GiScales />
          </div>
          <div className="desc">
            <h2>Excellence in Legal Services</h2>
            <p>
              We uphold the highest standards of legal practice, providing our clients 
              with expert guidance and effective representation in every matter.
            </p>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bottom-sec"
        >
          <div className="icon">
            <GiFlatHammer />
          </div>
          <div className="desc">
            <h2>Dedicated to Justice</h2>
            <p>
              Our team is committed to pursuing justice for our clients with diligence, 
              integrity, and unwavering focus on favorable outcomes.
            </p>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bottom-sec"
        >
          <div className="icon">
            <HiBuildingLibrary />
          </div>
          <div className="desc">
            <h2>Client-Centric Advocacy</h2>
            <p>
              We prioritize our clients’ needs, providing tailored legal strategies 
              that protect their interests and promote long-term success.
            </p>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bottom-sec"
        >
          <div className="icon">
            <GoGlobe />
          </div>
          <div className="desc">
            <h2>Extensive Legal Expertise</h2>
            <p>
              With years of experience across corporate, financial, intellectual property, 
              and dispute resolution matters, we provide practical and effective solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achieve;
