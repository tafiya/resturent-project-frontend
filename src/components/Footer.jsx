import Image from "next/image";
import {
  FaPinterest,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  const gallery = [
    "/footer-image/burger-inst.jpg",
    "/footer-image/chines.jpg",
     "/footer-image/grill.jpg",
     "/footer-image/ice.jpg",
     "/footer-image/mixed.jpg",
     "/footer-image/nodoles.jpg",
  ];

  return (
    <footer className="bg-red-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Newsletter */}
        <div>
          <h2 className="text-2xl font-bold mb-4">RESTAURANT</h2>
          <p className="mb-4">
            Subscribe our newsletter and get discount 25%off
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="px-4 py-2 bg-white rounded-l-md text-black w-full"
            />
            <button className="bg-red-600 px-4 rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </div>
          <div className="flex space-x-3 mt-4 text-xl">
            <FaPinterest />
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="lg:text-[20px] md:text-[18px] text-lg font-semibold mb-4">
            Contact us
          </h2>
          <ul className="space-y-3 lg:text-[18px] md:text-[14px] text-sm font-light">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              3517 W. Gray St. Utica, Pennsylvania 57867
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> (480) 555-0103
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> M.Alyaqout@4house.Co
            </li>
            <li className="flex items-center gap-2">
              <FaClock /> Sun - Sat / 10:00 AM - 8:00 PM
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="lg:text-[20px] md:text-[18px] text-lg font-semibold mb-4">
            Links
          </h2>
          <ul className="space-y-3 lg:text-[18px] md:text-[14px] text-sm font-light">
            <li>About us</li>
            <li>Contact Us</li>
            <li>Our Menu</li>
            <li>Team</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Instagram Gallery */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Instagram Gallery</h2>
          <div className="grid grid-cols-3 gap-2">
            {gallery.map((src, i) => (
              <div key={i} className="w-full h-20 relative">
                <Image
                  src={src}
                  alt={`insta-${i}`}
                  fill
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-red-800 ">
        <div className="max-w-7xl mx-auto  mt-10 py-4 px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>Copyright © 2025. All rights reserved</p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Term of Use</a>
            <a href="#">Partner</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
