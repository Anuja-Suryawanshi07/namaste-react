import { LOGO_URL } from "../utils/contact";
import { CDN_URL_FACEBOOK } from "../utils/contact";
import { CDN_URL_INSTAGRAM } from "../utils/contact";
import { CDN_URL_TWITTER } from "../utils/contact";

const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow-inner mt-10 px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        
        {/* Logo Section */}
        <div>
          <div className="flex items-center gap-3">
            <img
              className="w-16 rounded-lg"
              src={LOGO_URL}
              alt="npmEats Logo"
            />
            <h2 className="text-2xl font-bold text-orange-600">
              npmEats
            </h2>
          </div>

          <p className="mt-4 text-gray-600">
            © 2026 npmEats Limited
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-orange-500 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              npm Corporate
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Careers
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Team
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-orange-500 cursor-pointer">
              Help & Support
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Partner with Us
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Ride with Us
            </li>
          </ul>
        </div>

        {/* Cities & Social */}
        <div>
          <h3 className="font-bold text-lg mb-3">Available In</h3>
          <ul className="space-y-2 text-gray-600 mb-5">
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>

          <h3 className="font-bold text-lg mb-3">Social Links</h3>

          <div className="flex gap-4">
            <img
              className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
              src={CDN_URL_FACEBOOK}
              alt="Facebook"
            />

            <img
              className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
              src={CDN_URL_INSTAGRAM}
              alt="Instagram"
            />

            <img
              className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
              src={CDN_URL_TWITTER}
              alt="Twitter"
            />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;