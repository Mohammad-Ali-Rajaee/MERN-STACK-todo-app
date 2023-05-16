import { Link } from "react-router-dom";
import "../style.css";

const Header = () => {
  return (
    <header className="p-header bg-red-500 hidden">
      <ul className="p-header__container max-w-5xl mx-auto py-2 gap-1 flex text-lg">
        <Link
          to={"/home"}
          className="px-4 py-1 cursor-pointer flex-col gap-1 flex items-center justify-center after:content-[''] after:block after:bg-white after:w-0 after:h-0.5 hover:after:w-full after:transition-all font-semibold"
        >
          Home
        </Link>
        <Link
          to={"/history"}
          className="px-4 py-1 cursor-pointer flex-col gap-1 flex items-center justify-center after:content-[''] after:block after:bg-white after:w-0 after:h-0.5 hover:after:w-full after:transition-all font-semibold"
        >
          History
        </Link>
        <Link
          to={"/members"}
          className="px-4 py-1 cursor-pointer flex-col gap-1 flex items-center justify-center after:content-[''] after:block after:bg-white after:w-0 after:h-0.5 hover:after:w-full after:transition-all font-semibold"
        >
          Members
        </Link>
      </ul>
    </header>
  );
};

export default Header;
