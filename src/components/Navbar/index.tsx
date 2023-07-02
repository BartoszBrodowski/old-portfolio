import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  return (
    <div className="bg-main-gray font-normal text-xs xs:text-md xs:font-medium w-4/5 md:w-2/3 mx-auto absolute top-[10%] max-w-[1280px] row-span-1 col-span-5 px-3 py-2 rounded-full">
      <ul className="flex gap-2 lg:gap-4 justify-between">
        <li
          className={`${
            path === "/" ? "bg-main-offwhite" : "bg-transparent"
          } + hover:cursor-pointer hover:text-[#51545a] hover:bg-[#eaeaea] rounded-full p-1 xs:px-4 duration-150 text-center flex-1 xs:flex-none`}
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className={`${
            path === "/about" ? "bg-main-offwhite" : "bg-transparent"
          } + hover:cursor-pointer hover:text-[#51545a] hover:bg-[#eaeaea] rounded-full p-1 xs:px-4 duration-150 text-center flex-1 xs:flex-none`}
          onClick={() => navigate("/about")}
        >
          About
        </li>
        <li
          className={`${
            path === "/projects" ? "bg-main-offwhite" : "bg-transparent"
          } + hover:cursor-pointer hover:text-[#51545a] hover:bg-[#eaeaea] rounded-full p-1 xs:px-4 duration-150 text-center flex-1 xs:flex-none`}
          onClick={() => navigate("/projects")}
        >
          Projects
        </li>
        <li
          className={`${
            path === "/contact" ? "bg-main-offwhite" : "bg-transparent"
          } + hover:cursor-pointer hover:text-[#51545a] hover:bg-[#eaeaea] rounded-full p-1 xs:px-4 duration-150 text-center flex-1 xs:flex-none`}
          onClick={() => navigate("/contact")}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
