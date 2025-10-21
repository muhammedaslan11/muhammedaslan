import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const Icons = {
  linkedin: (props) => <FaLinkedin {...props} />,
  facebook: (props) => <FaFacebook {...props} />,
  instagram: (props) => <FaInstagram {...props} />,
  twitter: (props) => <FaTwitter {...props} />,
  youtube: (props) => <FaYoutube {...props} />,
  github: (props) => <FaGithub {...props} />,
  x: (props) => <FaXTwitter {...props} />,
  mail: (props) => <FiMail {...props} />
};

export const Icon = ({ iconName, className = "", size = 24, color = "#000" }) => {
  const IconComponent = Icons[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found.`);
    return null;
  }

  return (
    <IconComponent
      className={className}
      style={{ width: size, height: size, fill: color }}
    />
  );
};

export default Icons;
