import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// This component is removed from the Index.tsx as requested
// Keeping the file in case it's needed later, but it's not being used anymore
const Header = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">
              <span className="text-blue-600">Mahuli</span> Uniyal
            </h1>
          </div>

          {isMobile ? (
            <>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
              
              {menuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-20">
                  <nav className="flex flex-col py-4">
                    <a href="#" className="px-4 py-2 hover:bg-gray-100">Home</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-100">About</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-100">Projects</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-100">Certificates</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-100">Contact</a>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Certificates</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
