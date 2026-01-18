import Logo from "../../assets/img/Logo.svg";
import { Link, useLocation } from "react-router-dom";
import {Search, Bell}from "lucide-react"
const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="py-3 border-b border-[#00800043]">
      <div className="w-[90%] m-auto flex items-center justify-between">
        
        <img src={Logo} alt="Logo" />

        <div className="flex items-center gap-5">
          <Link
            to="/"
            className={`font-medium ${
              pathname === "/" ? "text-main" : "text-black"
            }`}
          >
            Home
          </Link>

          <Link
            to="/blog"
            className={`font-medium ${
              pathname === "/blog" ? "text-main" : "text-black"
            }`}
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <Search />
          <Bell />
        </div>
      </div>
    </div>
  );
};

export default Header;
