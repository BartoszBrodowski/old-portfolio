import { motion } from "framer-motion";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const durationTime = 1;

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  isClicked: boolean;
  setClickedId: (id: number) => void;
  id: number;
  clickedId: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  isClicked,
  setClickedId,
  id,
  clickedId,
}) => {
  const handleClick = () => {
    if (isClicked && clickedId === id) {
      setClickedId(-1);
    } else {
      setClickedId(id);
    }
  };
  return (
    <motion.div
      transition={{ layout: { duration: durationTime, type: "spring" } }}
      layout
      className="max-w-[500px] shadow-card rounded-lg"
    >
      <motion.div className="p-4">
        <motion.div
          layout="position"
          onClick={() => handleClick()}
          className="flex justify-between items-center cursor-pointer"
        >
          <motion.h2
            className="font-bold text-xl text-main-green"
            layout="position"
          >
            {title}
          </motion.h2>
          <motion.button
            className="w-8 h-8"
            animate={clickedId === id ? { rotate: -90 } : { rotate: 0 }}
            layout="position"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </motion.button>
        </motion.div>
      </motion.div>
      {isClicked && (
        <motion.div
          className="flex flex-col gap-4 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: durationTime }}
        >
          <motion.p>{description}</motion.p>
          <motion.a
            className="hover:text-linkedin-blue"
            href={link}
            target="_blank"
          >
            {link}
          </motion.a>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
