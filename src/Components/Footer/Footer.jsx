import { FaFacebook, FaInstagram, FaSteam, FaTwitter } from "react-icons/fa";
import { SiEpicgames, SiOrigin, SiPlaystation, SiXbox } from "react-icons/si";
import { FaTwitch } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center p-8 bg-base-300 text-base-content py-20">
<div className=" flex gap-5">
    <Link to="https://www.twitch.tv/" className="text-3xl hover:text-6xl  hover:text-black"><FaTwitch></FaTwitch></Link>
    <Link to="https://store.steampowered.com/" className="text-3xl hover:text-6xl  hover:text-black"><FaSteam></FaSteam></Link>
    <Link to="https://store.epicgames.com/en-US/" className="text-3xl hover:text-6xl  hover:text-black"><SiEpicgames></SiEpicgames></Link>
    <Link to="https://www.ea.com/games/library/pc-download" className="text-3xl hover:text-6xl  hover:text-black"><SiOrigin></SiOrigin></Link>
    <Link to="https://www.xbox.com/" className="text-3xl hover:text-6xl   hover:text-black"><SiXbox></SiXbox></Link>
    <Link to="https://www.facebook.com/" className="text-3xl  hover:text-6xl  hover:text-black"><FaFacebook></FaFacebook></Link>
    <Link to="https://www.twitter.com/" className="text-3xl  hover:text-6xl  hover:text-black"><FaTwitter></FaTwitter></Link>
    <Link to="https://instagram.com/" className="text-3xl  hover:text-6xl  hover:text-black"><FaInstagram></FaInstagram></Link>
    <Link to="https://www.playstation.com/en-us/" className="text-3xl  hover:text-6xl  hover:text-black"><SiPlaystation></SiPlaystation></Link>
</div>
  <aside>
    <hr />
    <p>© 2023 GamersGrid. All rights reserved.</p>
  </aside>
</footer>
    );
};

export default Footer;