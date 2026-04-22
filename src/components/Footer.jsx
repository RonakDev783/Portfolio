import { FaGithub, FaHeart, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: darkMode
          ? 'linear-gradient(to bottom, #000000, #111827)'
          : 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)',
        borderColor: darkMode ? '#374151' : '#d1d5db'
      }}
      className="border-t"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-orange-500 dark:text-white">
              Portfolio
            </h3>
            <p 
              className="text-sm"
              style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
            >
              Full Stack Developer & Freelancer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {/* Github */}
            <a
              href="https://github.com/RonakDev783"
              target='_blank'
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ronak-sharma-02935833a/"
              target='_blank'
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]"
            >
              <FaLinkedin />
            </a>

            {/* Instagram*/}
            <a
              href="https://www.instagram.com/__ronaksharma21/"
              target='_blank'
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm flex items-center justify-end gap-1 text-[#6b7280] dark:text-[#9ca3af]">
              @ {currentYear} Website developed
              <FaHeart className="text-red-500" /> 
              designed by <span className="mt-1 text-[#f97316]">Ronak Sharma</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;