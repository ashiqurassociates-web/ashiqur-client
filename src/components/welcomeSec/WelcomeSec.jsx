import './WelcomeSec.scss';
import { motion } from 'framer-motion';

const WelcomeSec = () => {
  return (
    <div className="welcome-sec">
      <div className="wrapper">
        <motion.h1
          transition={{ duration: 1 }}
          initial={{ scale: 1.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          Welcome to Ashiqur Rahman and Associates <br /> – Your Trusted Legal Partner
        </motion.h1>
        <span>(Barristers, Advocates, Tax & Company Law Consultants)</span>
        <hr />
        <motion.p
          transition={{ duration: 1 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          At Ashiqur Rahman and Associates, we are proactive, dedicated, and committed 
          to delivering high-quality legal services across a wide range of practice areas. 
          Our team of experienced professionals works tirelessly to protect our clients’ 
          interests, achieve the best possible outcomes, and ensure peace of mind through 
          expert legal guidance and representation.
        </motion.p>
      </div>
    </div>
  );
};

export default WelcomeSec;
