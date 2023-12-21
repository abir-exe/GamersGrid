import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaSteam, FaTwitter } from "react-icons/fa";
import { SiEpicgames, SiOrigin, SiPlaystation, SiXbox } from "react-icons/si";
import { FaTwitch } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center p-8 bg-base-300 text-base-content ">
<div className=" flex gap-5">
    <Link to="https://www.linkedin.com/in/web-abirmahmud/" className="text-2xl hover:text-xl hover:text-black"><FaTwitch></FaTwitch></Link>
    <Link to="https://www.linkedin.com/in/web-abirmahmud/" className="text-2xl hover:text-xl hover:text-black"><FaSteam></FaSteam></Link>
    <Link to="https://www.linkedin.com/in/web-abirmahmud/" className="text-2xl hover:text-xl hover:text-black"><SiEpicgames></SiEpicgames></Link>
    <Link to="https://www.linkedin.com/in/web-abirmahmud/" className="text-2xl hover:text-xl hover:text-black"><SiOrigin></SiOrigin></Link>
    <Link to="https://www.linkedin.com/in/web-abirmahmud/" className="text-2xl hover:text-xl hover:text-black"><SiXbox></SiXbox></Link>
    <Link to="https://www.facebook.com/abir.mahmudXD" className="text-2xl  hover:text-xl hover:text-black"><FaFacebook></FaFacebook></Link>
    <Link to="https://www.twitter.com/abirmahmud_" className="text-2xl  hover:text-xl hover:text-black"><FaTwitter></FaTwitter></Link>
    <Link to="https://instagram.com/abiir_asholeii/" className="text-2xl  hover:text-xl hover:text-black"><FaInstagram></FaInstagram></Link>
    <Link to="https://github.com/abir-exe" className="text-2xl  hover:text-xl hover:text-black"><SiPlaystation></SiPlaystation></Link>
</div>
  <aside>
    <hr />
    <p>© 2023 GamersGrid. All rights reserved.</p>
  </aside>
</footer>
    );
};

export default Footer;