
import { FaFacebook } from "react-icons/fa";
import { FaAirbnb, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="mt-24 bg-base-200 text-base-content ">
            <footer className="footer p-10  max-w-6xl mx-auto">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Property Listings</a>
    <a className="link link-hover">Property Management</a>
    <a className="link link-hover">Investment Consultation</a>
    <a className="link link-hover">Renovation and Construction</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Awards and Recognition</a>
    <a className="link link-hover">Careers</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
    <a className="link link-hover">Copyright Notice</a>
  </nav> 
  <form>
    <h6 className="footer-title">Social Media Links</h6> 
    <div className="flex gap-2 mb-2">
        <FaFacebook />
        <FaTwitter />
        <FaGithub />
        <FaInstagram />
        <FaLinkedin />
        <FaAirbnb />
    </div>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;