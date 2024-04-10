

const Footers = () => {
  return (
    <footer  className="bg-gray-900 text-white py-12 max-w-6xl mx-auto">
      <div className=" px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-8 max-w-6xl mx-auto">
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Phone: +123456789</p>
            <p>Email: info@luxurialiving.com</p>
            <p>123 Luxury Avenue, City, Country</p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/properties" className="text-gray-400 hover:text-white">Properties</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400">© {new Date().getFullYear()} Luxuria Living. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footers;
