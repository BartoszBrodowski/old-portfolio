import { motion } from "framer-motion";
import {
  faAngleLeft,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const durationTime = 1;

type GalacticRebornCardProps = {
  title: string;
  description: string;
  link: string;
  isClicked: boolean;
  setClickedId: (id: number) => void;
  id: number;
  clickedId: number;
  techStack: string[];
};

const GalacticRebornCard: React.FC<GalacticRebornCardProps> = ({
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
    } else {
      setClickedId(id);
    }
  };
  return (
    <motion.div
      transition={{ layout: { duration: durationTime, type: "spring" } }}
      layout
      className="max-w-[530px] shadow-card rounded-lg p-4"
    >
      <motion.div layout="position">
        <motion.div
          layout="position"
          onClick={() => handleClick()}
          className="flex justify-between items-center cursor-pointer"
        >
          <motion.h2 className="font-bold text-xl text-galactic-reborn-purple">
            {title}
          </motion.h2>
          <motion.button
            className="w-8 h-8"
            animate={clickedId === id ? { rotate: -90 } : { rotate: 90 }}
            layout
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </motion.button>
        </motion.div>
        <motion.div className="flex items-center gap-2" layout="position">
          {Object.entries(techStack).map(([key, value]) => (
            <motion.img
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
            <FontAwesomeIcon icon={faWindowMaximize} />
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
  );
};

export default GalacticRebornCard;
