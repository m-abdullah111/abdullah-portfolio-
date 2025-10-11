import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaSnapchatGhost,
} from "react-icons/fa";

const items = [
  {
    href: "https://github.com/dev",
    icon: <FaGithub />,
    label: "GitHub",
    bg: "bg-gray-800",
    hoverBg: "hover:bg-gray-700",
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    bg: "bg-blue-700",
    hoverBg: "hover:bg-blue-600",
  },
  {
    href: "https://twitter.com/",
    icon: <FaTwitter />,
    label: "Twitter",
    bg: "bg-sky-500",
    hoverBg: "hover:bg-sky-400",
  },
  {
    href: "https://www.facebook.com/",
    icon: <FaFacebook />,
    label: "Facebook",
    bg: "bg-blue-600",
    hoverBg: "hover:bg-blue-500",
  },
  {
    href: "https://www.instagram.com/",
    icon: <FaInstagram />,
    label: "Instagram",
    bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    hoverBg:
      "hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700",
  },
  {
    href: "https://www.youtube.com/",
    icon: <FaYoutube />,
    label: "YouTube",
    bg: "bg-red-600",
    hoverBg: "hover:bg-red-500",
  },
  {
    href: "https://www.tiktok.com/",
    icon: <FaTiktok />,
    label: "TikTok",
    bg: "bg-black",
    hoverBg: "hover:bg-gray-800",
  },
  {
    href: "https://www.snapchat.com/",
    icon: <FaSnapchatGhost />,
    label: "Snapchat",
    bg: "bg-yellow-400 text-black",
    hoverBg: "hover:bg-yellow-300",
  },
];

export default function SocialMedia() {
  return (
    <div className="flex flex-wrap gap-4">
      {items.map(({ href, icon, label, bg, hoverBg }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-medium shadow-md transform transition-all duration-300 hover:scale-105 text-white ${bg} ${hoverBg}`}
        >
          <span className="text-2xl">{icon}</span>
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}
