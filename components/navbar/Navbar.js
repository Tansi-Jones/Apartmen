import { Link } from "react-scroll";
import menuLinks from "./menu";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between  w-[90%] mx-auto font-lato tracking-wider">
      <h1 className=" text-2xl text-darkBlue font-bold ">
        <span className=" text-skyBlue font-bold">Apart</span>men
      </h1>

      <div className="hidden md:block space-x-14 ">
        {menuLinks.map(({ id, path, label }) => (
          <Link
            activeClass="active"
            className="cursor-pointer hover:text-skyBlue transition transform ease-in text-gray-700"
            to={path}
            spy={true}
            smooth={true}
            duration={500}
            key={id}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="hidden md:block">
        <button className="py-[0.4rem] px-6 text-white bg-darkBlue rounded-sm font-sans text-sm">
          Login
        </button>
      </div>
    </div>
  );
}
