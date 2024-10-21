import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#5a1a28] text-[#ddc073] py-10 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Venues */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Venues</h3>
            <ul className="space-y-2">
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
              <li>Banglore</li>
              <li>Durg</li>
              <li>Rajasthan</li>
            </ul>
          </div>

          {/* Suppliers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Suppliers</h3>
            <ul className="space-y-2">
              <li>Photographers</li>
              <li>Decorators</li>
              <li>Venues Planner</li>
              <li>Choreographers</li>
              <li>Designers</li>
              <li>Makeup Artists</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
