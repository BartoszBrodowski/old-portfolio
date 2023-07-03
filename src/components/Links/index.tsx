import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Links = () => {
  return (
    <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-8 mt-4 lg:mt-0">
      <a href="https://github.com/BartoszBrodowski" target="_blank">
        <div className="flex items-center gap-1 lg:gap-2 text-xl hover:cursor-pointer hover:text-linkedin-blue duration-300 hover:scale-110">
          <img
            className="w-6 lg:w-10"
            src="/assets/images/Github.svg"
            alt="Github logo"
          />
          <p className="flex items-center gap-1 text-sm lg:text-lg">
            Github{" "}
            <FontAwesomeIcon
              className="w-4 lg:w-5"
              icon={faUpRightFromSquare}
            />
          </p>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/bartoszbrodowski/" target="_blank">
        <div className="flex items-center gap-1 lg:gap-2 text-xl hover:cursor-pointer hover:text-linkedin-blue duration-300 hover:scale-110">
          <img
            className="w-6 lg:w-10"
            src="/assets/images/LinkedIn.svg"
            alt="LinkedIn logo"
          />
          <p className="flex items-center gap-1 text-sm lg:text-lg">
            LinkedIn{" "}
            <FontAwesomeIcon
              className="w-4 lg:w-5"
              icon={faUpRightFromSquare}
            />
          </p>
        </div>
      </a>
    </div>
  );
};

export default Links;
