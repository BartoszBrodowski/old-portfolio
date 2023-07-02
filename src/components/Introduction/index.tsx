import { TypeAnimation } from "react-type-animation";
import ProfileImage from "../ProfileImage";
import Links from "../Links";

const Introduction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen pt-8 lg:mt-0">
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        <div className="col-span-2 flex flex-col gap-4 justify-center h-max items-center relative">
          <ProfileImage />
          <div className="flex flex-col items-center absolute top-28 xs:top-40 lg:top-80">
            <p className="flex items-center gap-2 text-lg lg:text-2xl">
              <div className="animate-status-glow bg-[#24AB1E] rounded-full w-2 h-2 xs:w-3 xs:h-3 lg:w-4 lg:h-4"></div>
              Looking for a job!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-center lg:text-left justify-center">
          <div className="flex flex-col font-bold text-[24px] leading-8 lg:text-5xl lg:gap-2">
            <span>Bartosz Brodowski,</span>
            <span className="text-main-green">
              <TypeAnimation
                sequence={["Software Engineer 💻", 2000, "CS Student 🎓", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>
          <div className="px-8 md:text-xl lg:px-0">
            <span className="block">
              Hello! I'm Bartosz Brodowski, a Computer Science student.
            </span>
            <span className="block">Based in Gdańsk, Poland. 📍</span>
          </div>
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
