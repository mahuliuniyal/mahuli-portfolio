
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/50 py-8 mt-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              <span className="text-pink-500">Mahuli</span> Uniyal
            </h2>
            <p className="text-gray-300 mt-1">Software Developer & UI/UX Designer</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:mahuliuniyal23@gmail.com" className="text-gray-300 hover:text-pink-500 transition">
                mahuliuniyal23@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+916388517770" className="text-gray-300 hover:text-pink-500 transition">
                +91 6388517770
              </a>
            </div>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-pink-500 transition">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-pink-500 transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:mahuliuniyal23@gmail.com" className="text-gray-300 hover:text-pink-500 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Mahuli Uniyal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
