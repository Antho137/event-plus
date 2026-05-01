import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let today = new Date();
  let year = today.getFullYear();

  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-100 w-full p-4 md:px-10 lg:px-28 xl:px-48">
      <div className="flex justify-center items-center gap-4">
        <a href="#">
          <FaGithub className="text-blue-900" size={20} />
        </a>
        <a href="#">
          <FaLinkedinIn className="text-blue-900" size={20} />
        </a>
        <a href="#">
          <FaFacebook className="text-blue-900" size={20} />
        </a>
      </div>
      <p className="text-blue-900 text-center mt-2">
        Copyright &copy; <span className="year">{year}</span>&#160; Event Plus
        &#160;
      </p>
    </div>
  );
};

export default Footer;
