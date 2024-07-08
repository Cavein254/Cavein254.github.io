import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export const ButtonMailto = ({ mailto }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      <SiGmail size={24} />
    </Link>
  );
};
const Contact = () => {
  return (
    <div id="contacts" className="py-6">
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
        <div className="my-6 flex flex-col items-center justify-center gap-2 px-16 text-secondary-200 sm:flex-row sm:justify-around">
          <ButtonMailto mailto="mailto:caveomuthama@gmail.com" />
          <Link to="https://github.com/Cavein254">
            <FaGithub size={24} />
          </Link>
          <Link to="https://www.linkedin.com/in/muthuahjohn/">
            <FaLinkedin size={24} />
          </Link>
          <Link to="https://twitter.com/JohnMuthua5">
            <FaXTwitter size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
