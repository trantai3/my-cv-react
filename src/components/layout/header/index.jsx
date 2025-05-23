import { Button, Dropdown } from "antd";
import {
  FaHome,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
  FaBars,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../../../assets/styles/header.css";
const items = [
  {
    label: <Link to="/resume">RESUME</Link>,
  },
  {
    label: <Link to="/portfolio">PORTFOLIO</Link>,
  },
  {
    label: <Link to="/blog">BLOG</Link>,
  },
  {
    label: <Link to="/contact">CONTACT</Link>,
  },
];
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="customer-header flex items-center justify-between h-full">
      <div className="flex items-center h-full">
        <Link
          className="h-full !bg-yellow-400 rounded-l-2xl flex items-center justify-center w-20"
          to="/"
        >
          <FaHome className="text-2xl text-black" />
        </Link>
      </div>
      <div className="navMax850">
        <Dropdown
          className="dropdown-customer"
          menu={{ items }}
          placement="bottom"
        >
          <FaBars />
        </Dropdown>
      </div>
      <nav className="navMin850 flex-1 flex items-center justify-start gap-8 ml-8">
        <Button
          type="text"
          className="!text-black hover:!text-yellow-400 !font-bold !text-base !p-0 !h-auto !bg-transparent"
          onClick={() => navigate("/resume")}
        >
          RESUME
        </Button>
        <Button
          type="text"
          className="!text-black hover:!text-yellow-400 !font-bold !text-base !p-0 !h-auto !bg-transparent"
          onClick={() => navigate("/portfolio")}
        >
          PORTFOLIO
        </Button>
        <Button
          type="text"
          className="!text-black hover:!text-yellow-400 !font-bold !text-base !p-0 !h-auto !bg-transparent"
          onClick={() => navigate("/blog")}
        >
          BLOG
        </Button>
        <Button
          type="text"
          className="!text-black hover:!text-yellow-400 !font-bold !text-base !p-0 !h-auto !bg-transparent"
          onClick={() => navigate("/contact")}
        >
          CONTACT
        </Button>
      </nav>
      <div className="flex items-center gap-4 ml-8">
        <a
          href="#"
          className="!text-black hover:text-yellow-400 text-xl transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="!text-black hover:text-yellow-400 text-xl transition"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="!text-black hover:text-yellow-400 text-xl transition"
        >
          <FaInstagram />
        </a>
        <button className="hiremeCustome ml-4 flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-5 rounded-full text-base shadow transition-all">
          <FaPaperPlane className="mr-2" /> Hire Me
        </button>
      </div>
    </div>
  );
};

export default Header;
