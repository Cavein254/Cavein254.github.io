import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contacts">
      <div className="flex flex-col items-center justify-center pt-8">
        <img src={Logo} alt="logo" className="w-[200px] sm:w-[250px]" />
        <div className="px-16">
          <p>If you liked my work and you need me, I'm ready to talk to you.</p>
        </div>
      </div>
      <div>
        <h4 className="text-center text-[2rem] font-bold text-secondary-200">
          Contacts
        </h4>
        <div className="flex flex-col items-center justify-center gap-2 px-16 text-secondary-200 sm:flex-row sm:justify-around">
          <div>
            <Link to="https://github.com/Cavein254">
              <FaGithub size={24} />
            </Link>
            <Link to="https://www.linkedin.com/in/muthuahjohn/">
              <FaLinkedin />
            </Link>
          </div>
          <div>
            <Link to="https://twitter.com/JohnMuthua5">
              <FaXTwitter />
            </Link>
            <p>Website</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
