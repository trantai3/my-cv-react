import {
  FaHome,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between h-full">
      <div className="flex items-center h-full">
        <div className="bg-yellow-400 rounded-l-2xl flex items-center justify-center w-20 h-full">
          <FaHome className="text-2xl text-black" />
        </div>
      </div>
      <nav className="flex-1 flex items-center justify-start gap-8 ml-8">
        <a
          href="#"
          className="font-bold tracking-wide !text-black hover:text-yellow-400 transition"
        >
          RESUME
        </a>
        <a
          href="#"
          className="font-bold tracking-wide !text-black hover:text-yellow-400 transition"
        >
          PORTFOLIO
        </a>
        <a
          href="#"
          className="font-bold tracking-wide !text-black hover:text-yellow-400 transition"
        >
          BLOG
        </a>
        <a
          href="#"
          className="font-bold tracking-wide !text-black hover:text-yellow-400 transition"
        >
          CONTACT
        </a>
      </nav>
      <div className="flex items-center gap-4 ml-8">
        <a
          href="#"
          className="!text-gray-400 hover:text-yellow-400 text-xl transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="!text-gray-400 hover:text-yellow-400 text-xl transition"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="!text-gray-400 hover:text-yellow-400 text-xl transition"
        >
          <FaInstagram />
        </a>
        <button className="ml-4 flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-5 rounded-full text-base shadow transition-all">
          <FaPaperPlane className="mr-2" /> Hire Me
        </button>
      </div>
    </div>
  );
};

export default Header;
