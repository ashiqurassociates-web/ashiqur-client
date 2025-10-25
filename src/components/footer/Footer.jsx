import { Link } from 'react-router-dom';
import './Footer.scss';
import { LuArrowUpRight } from 'react-icons/lu';

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer">
        <div className="footer-top">
          {/* Firm Info */}
          <div className="footer-info">
            <h1 className="h1">Ashiqur Rahman & Associates</h1>
            <p>
              At Ashiqur Rahman & Associates, we are proactive, professional, and committed
              to delivering high-quality legal services. Our team works diligently to meet
              clients’ legal needs and ensures peace of mind throughout the legal process.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h1 className="h1">Quick Links</h1>
            <Link to="/" className="footer-link">Home <LuArrowUpRight /></Link>
            <Link to="/about" className="footer-link">About Us <LuArrowUpRight /></Link>
            <Link to="/practice-areas" className="footer-link">Practice Areas <LuArrowUpRight /></Link>
            <Link to="/team" className="footer-link">Our Team <LuArrowUpRight /></Link>
            <Link to="/blog" className="footer-link">Blog <LuArrowUpRight /></Link>
            <Link to="/career" className="footer-link">Career <LuArrowUpRight /></Link>
            <Link to="/contact" className="footer-link">Contact <LuArrowUpRight /></Link>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h1 className="contact-h1">Contact Us</h1>

            <p><b>High Court Chamber:</b> Room No. 409 (3rd Floor), Sher-E-Bangla A.K. Fazlul Haque Bhaban, Supreme Court Bar Association Building, Dhaka-1000</p>
            <p><b>Dhaka District Court Chamber:</b> Room No. C-1 (3rd Floor), Nahar Complex, Holding No. 25/1, Court House Street, Police Station: Kotwali, Dhaka</p>

            <p><b>Corporate Chamber:</b> Suite No. 15, Level-7, Kabbakos Super Market, Plot No. 3/D, Kawran Bazar, Tejgaon, Dhaka-1215</p>

            <p><b>Phone:</b></p>
            <span>+880 2550 14178</span><br />
            <span>+880 1794 876432</span><br />
            <span>+880 1811 903223</span>

            <p><b>Email:</b></p>
            <span>arandassociates81@gmail.com</span>
          </div>
        </div>

        <hr />

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span>© 2023 | Ashiqur Rahman & Associates | All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
