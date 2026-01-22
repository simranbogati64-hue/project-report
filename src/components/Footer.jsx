import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Bela Plants</h3>
          <p className="text-green-100 leading-relaxed">
            Bringing nature closer to your home with fresh, healthy, and
            beautiful plants.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-green-100">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-300" />
              <span>+977 9815898541</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-300" />
              <span>New road, Kathmandu</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/belaplantsgallery" target="_blank"
              className="p-3 rounded-full bg-green-700 hover:bg-green-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/belaplantsgallery/" target="_blank"
              className="p-3 rounded-full bg-green-700 hover:bg-green-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-green-700 hover:bg-green-600 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-green-700 hover:bg-green-600 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 text-center py-4 text-sm text-green-200">
        © 2026 Bela Plants. All Rights Reserved.
      </div>
    </footer>
  );
}
