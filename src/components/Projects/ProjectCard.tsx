import { motion } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const durationTime = 0.6;

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  isClicked: boolean;
  setClickedId: (id: number) => void;
  id: number;
  clickedId: number;
  techStack: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  isClicked,
  setClickedId,
  id,
  clickedId,
  techStack,
}) => {
  const handleClick = () => {
    if (isClicked && clickedId === id) {
      setClickedId(-1);
    }
    if (clickedId === -1) {
      setClickedId(id);
    }
  };
  return (
    <motion.div>
      <motion.div
        transition={{
          layout: {
            duration: durationTime,
            type: "spring",
          },
        }}
        layout
        className={clsx("max-w-[530px] bg-white shadow-card rounded-lg p-4", {
          "shadow-full-page": isClicked && clickedId === id,
        })}
      >
        <motion.div onClick={() => handleClick()} layout="position">
          <motion.div
            layout="position"
            className="flex justify-between items-center cursor-pointer"
          >
            <motion.h2 className="font-bold text-xl text-main-green">
              {title}
            </motion.h2>
            <motion.button
              animate={clickedId === id ? { opacity: 1 } : { opacity: 0 }}
              layout
            >
              <FontAwesomeIcon icon={faXmark} />
            </motion.button>
          </motion.div>
          <motion.div className="flex items-center gap-2" layout="position">
            {Object.entries(techStack).map(([key, value]) => (
              <motion.img
                key={key}
                className="w-6"
                layout="position"
                src={`${value}`}
                alt={`${key} logo`}
              />
            ))}
          </motion.div>
        </motion.div>
        {isClicked && (
          <motion.div
            className="flex flex-col gap-4 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: durationTime }}
          >
            <motion.p>{description}</motion.p>
            <motion.div className="flex items-center gap-2">
              <img
                className="w-6"
                src="src/assets/images/Github.svg"
                alt="Github logo"
              />
              <motion.a
                className="text-linkedin-blue hover:underline"
                href={link}
                target="_blank"
              >
                {link}
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
